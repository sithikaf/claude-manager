import fs from "fs";
import path from "path";
import { PrismaClient } from "../../generated/prisma";

export type DbProvider = "sqlite" | "postgresql";

export function getCurrentProvider(): DbProvider {
  const schemaPath = path.join(process.cwd(), "prisma", "schema.prisma");
  const schema = fs.readFileSync(schemaPath, "utf-8");
  const match = schema.match(/provider\s*=\s*"(sqlite|postgresql)"/);
  if (match?.[1] === "postgresql") return "postgresql";
  return "sqlite";
}

export async function checkSetupStatus(): Promise<{
  needsSetup: boolean;
  provider: DbProvider;
}> {
  const provider = getCurrentProvider();

  try {
    const dbUrl =
      process.env.DATABASE_URL ?? "file:./data/claude-manager.db";
    const client = new PrismaClient({
      datasourceUrl: dbUrl,
      log: [],
    });

    try {
      await client.$queryRaw`SELECT 1`;
      await client.$disconnect();
      return { needsSetup: false, provider };
    } catch {
      await client.$disconnect().catch(() => {});
      return { needsSetup: true, provider };
    }
  } catch {
    return { needsSetup: true, provider };
  }
}
