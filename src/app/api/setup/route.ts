import { NextResponse } from "next/server";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { getCurrentProvider, checkSetupStatus } from "~/lib/setup";

export async function POST(req: Request) {
  // Prevent reconfiguration if database is already set up
  const { needsSetup } = await checkSetupStatus();
  if (!needsSetup) {
    return NextResponse.json(
      { success: false, error: "Database is already configured" },
      { status: 403 }
    );
  }

  const body = (await req.json()) as {
    provider: "sqlite" | "postgresql";
    connectionString?: string;
  };

  const schemaPath = path.join(process.cwd(), "prisma", "schema.prisma");
  const originalSchema = fs.readFileSync(schemaPath, "utf-8");
  const envPath = path.join(process.cwd(), ".env");
  const originalEnv = fs.existsSync(envPath)
    ? fs.readFileSync(envPath, "utf-8")
    : null;

  try {
    if (body.provider === "sqlite") {
      return await setupSqlite(schemaPath);
    } else {
      return await setupPostgresql(body.connectionString, schemaPath);
    }
  } catch (error) {
    // Revert schema and .env on failure
    fs.writeFileSync(schemaPath, originalSchema, "utf-8");
    if (originalEnv !== null) {
      fs.writeFileSync(envPath, originalEnv, "utf-8");
    } else if (fs.existsSync(envPath)) {
      fs.unlinkSync(envPath);
    }

    // Extract useful message from execSync errors (stderr is in the message)
    let message: string;
    if (error && typeof error === "object" && "stderr" in error) {
      const stderr = String((error as { stderr: unknown }).stderr);
      // Pull out the Prisma error line (e.g. "Error: P1001: Can't reach...")
      const prismaError = stderr.match(/Error: (P\d+: .+)/)?.[1];
      message = prismaError ?? stderr.trim().split("\n").pop() ?? "Setup failed";
    } else {
      message = error instanceof Error ? error.message : String(error);
    }

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

async function setupSqlite(schemaPath: string) {
  // Ensure data directory exists
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Ensure schema says sqlite
  const currentProvider = getCurrentProvider();
  if (currentProvider !== "sqlite") {
    const schema = fs.readFileSync(schemaPath, "utf-8");
    fs.writeFileSync(
      schemaPath,
      schema.replace(
        /provider\s*=\s*"postgresql"/,
        'provider = "sqlite"'
      ),
      "utf-8"
    );
  }

  // Run prisma db push
  execSync("npx prisma db push --skip-generate", {
    cwd: process.cwd(),
    stdio: "pipe",
    env: {
      ...process.env,
      DATABASE_URL: "file:./data/claude-manager.db",
    },
  });

  return NextResponse.json({ success: true });
}

async function setupPostgresql(
  connectionString: string | undefined,
  schemaPath: string
) {
  if (!connectionString) {
    return NextResponse.json(
      { success: false, error: "Connection string is required for PostgreSQL" },
      { status: 400 }
    );
  }

  // Basic format validation
  if (!connectionString.startsWith("postgresql://") && !connectionString.startsWith("postgres://")) {
    return NextResponse.json(
      { success: false, error: "Connection string must start with postgresql:// or postgres://" },
      { status: 400 }
    );
  }

  // Reject dangerous characters that could break .env format or inject content
  if (/["\n\r\\]/.test(connectionString)) {
    return NextResponse.json(
      { success: false, error: "Connection string contains invalid characters" },
      { status: 400 }
    );
  }

  // Patch schema to postgresql first (needed before prisma generate)
  const schema = fs.readFileSync(schemaPath, "utf-8");
  fs.writeFileSync(
    schemaPath,
    schema.replace(
      /provider\s*=\s*"sqlite"/,
      'provider = "postgresql"'
    ),
    "utf-8"
  );

  // Write .env file
  const envPath = path.join(process.cwd(), ".env");
  const envContent = `DATABASE_URL="${connectionString}"\n`;
  fs.writeFileSync(envPath, envContent, "utf-8");

  // Generate client for PostgreSQL, then push schema (validates connection)
  execSync("npx prisma generate && npx prisma db push", {
    cwd: process.cwd(),
    stdio: "pipe",
    env: {
      ...process.env,
      DATABASE_URL: connectionString,
    },
  });

  return NextResponse.json({
    success: true,
    message: "PostgreSQL configured. Restart the dev server to apply changes.",
  });
}
