import fs from "fs/promises";
import path from "path";

const MARKETPLACE_BASE = path.join(
  process.env.HOME ?? "/home/fernando-server",
  ".claude",
  "plugins",
  "marketplaces",
  "claude-plugins-official",
);

export async function installPlugin(pluginName: string, targetAccountDir: string) {
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
