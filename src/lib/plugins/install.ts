import fs from "fs/promises";
import path from "path";
import { getHomeDir } from "~/lib/home-dir";
import { isClaudeWorkspace } from "~/lib/workspaces";

const MARKETPLACE_BASE = path.join(
  getHomeDir(),
  ".claude",
  "plugins",
  "marketplaces",
  "claude-plugins-official",
);

export async function installPlugin(pluginName: string, targetAccountDir: string) {
  if (!isClaudeWorkspace(targetAccountDir)) {
    throw new Error("Plugin installation currently supports Claude homes only");
  }

  const sourceDir = path.join(MARKETPLACE_BASE, "plugins", pluginName);
  const targetDir = path.join(
    targetAccountDir,
    "plugins",
    "marketplaces",
    "claude-plugins-official",
    "plugins",
    pluginName,
  );

  await fs.access(sourceDir); // ensure source exists
  await fs.mkdir(targetDir, { recursive: true });
  await fs.cp(sourceDir, targetDir, { recursive: true });
  return targetDir;
}

export async function uninstallPlugin(pluginName: string, accountDir: string) {
  if (!isClaudeWorkspace(accountDir)) {
    throw new Error("Plugin removal currently supports Claude homes only");
  }

  const pluginDir = path.join(
    accountDir,
    "plugins",
    "marketplaces",
    "claude-plugins-official",
    "plugins",
    pluginName,
  );
  await fs.rm(pluginDir, { recursive: true, force: true });
}

export async function copyPluginToAccount(pluginName: string, sourceAccountDir: string, targetAccountDir: string) {
  if (!isClaudeWorkspace(sourceAccountDir) || !isClaudeWorkspace(targetAccountDir)) {
    throw new Error("Plugin copy currently supports Claude homes only");
  }

  const sourceDir = path.join(
    sourceAccountDir,
    "plugins",
    "marketplaces",
    "claude-plugins-official",
    "plugins",
    pluginName,
  );
  const targetDir = path.join(
    targetAccountDir,
    "plugins",
    "marketplaces",
    "claude-plugins-official",
    "plugins",
    pluginName,
  );

  await fs.access(sourceDir);
  await fs.mkdir(targetDir, { recursive: true });
  await fs.cp(sourceDir, targetDir, { recursive: true });
  return targetDir;
}
