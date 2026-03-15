import fs from "fs/promises";
import path from "path";
import { getHomeDir } from "~/lib/home-dir";
import { type WorkspaceProvider, getWorkspaceProvider } from "~/lib/workspaces";

export interface AccountInfo {
  name: string;
  dirPath: string;
  provider: WorkspaceProvider;
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

async function readCodexAuth(dirPath: string): Promise<{ displayName?: string; email?: string }> {
  try {
    await fs.access(path.join(dirPath, "auth.json"));
    return { displayName: "Codex Home" };
  } catch {
    return { displayName: "Codex Home" };
  }
}

export async function scanAccounts(): Promise<AccountInfo[]> {
  const homeDir = getHomeDir();
  const entries = await fs.readdir(homeDir, { withFileTypes: true });
  const accounts: AccountInfo[] = [];

  const addAccount = async (entryName: string, dirPath: string) => {
    if (accounts.find((account) => account.dirPath === dirPath)) return;

    const provider = getWorkspaceProvider(dirPath);
    if (provider === "claude") {
      const { displayName, email } = await readClaudeJson(dirPath);
      accounts.push({
        name: entryName,
        dirPath,
        provider,
        displayName,
        email,
      });
      return;
    }

    if (provider === "codex") {
      const { displayName, email } = await readCodexAuth(dirPath);
      accounts.push({
        name: entryName,
        dirPath,
        provider,
        displayName,
        email,
      });
    }
  };

  for (const entry of entries) {
    if (
      entry.isDirectory() &&
      (entry.name.startsWith(".claude") || entry.name === ".codex")
    ) {
      const dirPath = path.join(homeDir, entry.name);
      await addAccount(entry.name, dirPath);
    }
  }

  // Also check for symlinks
  for (const entry of entries) {
    if (
      entry.isSymbolicLink() &&
      (entry.name.startsWith(".claude") || entry.name === ".codex")
    ) {
      const dirPath = path.join(homeDir, entry.name);
      try {
        const stat = await fs.stat(dirPath);
        if (stat.isDirectory()) {
          await addAccount(entry.name, dirPath);
        }
      } catch {
        // skip broken symlinks
      }
    }
  }

  return accounts;
}
