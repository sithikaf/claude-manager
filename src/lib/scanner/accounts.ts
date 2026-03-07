import fs from "fs/promises";
import path from "path";

export interface AccountInfo {
  name: string;
  dirPath: string;
}

export async function scanAccounts(): Promise<AccountInfo[]> {
  const homeDir = process.env.HOME ?? "/home/fernando-server";
  const entries = await fs.readdir(homeDir, { withFileTypes: true });
  const accounts: AccountInfo[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name.startsWith(".claude")) {
      const dirPath = path.join(homeDir, entry.name);
      accounts.push({
        name: entry.name,
        dirPath,
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
          accounts.push({ name: entry.name, dirPath });
        }
      } catch {
        // skip broken symlinks
      }
    }
  }

  return accounts;
}
