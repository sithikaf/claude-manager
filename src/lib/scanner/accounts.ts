import fs from "fs/promises";
import path from "path";

export interface AccountInfo {
  name: string;
  dirPath: string;
  displayName?: string;
  email?: string;
}

async function readClaudeJson(dirPath: string): Promise<{ displayName?: string; email?: string }> {
  try {
    const raw = await fs.readFile(path.join(dirPath, ".claude.json"), "utf-8");
    const data = JSON.parse(raw) as Record<string, unknown>;
    const oauth = data.oauthAccount as Record<string, unknown> | undefined;
    return {
      displayName: (oauth?.displayName as string) ?? undefined,
      email: (oauth?.emailAddress as string) ?? undefined,
    };
  } catch {
    return {};
  }
}

export async function scanAccounts(): Promise<AccountInfo[]> {
  const homeDir = process.env.HOME ?? "/home/fernando-server";
  const entries = await fs.readdir(homeDir, { withFileTypes: true });
  const accounts: AccountInfo[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name.startsWith(".claude")) {
      const dirPath = path.join(homeDir, entry.name);
      const { displayName, email } = await readClaudeJson(dirPath);
      accounts.push({
        name: entry.name,
        dirPath,
        displayName,
        email,
      });
    }
  }

  // Also check for symlinks
  for (const entry of entries) {
    if (entry.isSymbolicLink() && entry.name.startsWith(".claude")) {
      const dirPath = path.join(homeDir, entry.name);
      try {
        const stat = await fs.stat(dirPath);
        if (stat.isDirectory() && !accounts.find((a) => a.dirPath === dirPath)) {
          const { displayName, email } = await readClaudeJson(dirPath);
          accounts.push({ name: entry.name, dirPath, displayName, email });
        }
      } catch {
        // skip broken symlinks
      }
    }
  }

  return accounts;
}
