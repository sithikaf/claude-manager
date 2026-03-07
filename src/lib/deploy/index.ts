import fs from "fs/promises";
import path from "path";

export async function copyAgent(filePath: string, targetAccountDir: string) {
  const targetDir = path.join(targetAccountDir, "agents");
  await fs.mkdir(targetDir, { recursive: true });
  const fileName = path.basename(filePath);
  const targetPath = path.join(targetDir, fileName);
  await fs.copyFile(await fs.realpath(filePath), targetPath);
  return targetPath;
}

export async function copySkill(dirPath: string, targetAccountDir: string) {
  const skillName = path.basename(dirPath);
  const targetDir = path.join(targetAccountDir, "skills", skillName);
  await fs.mkdir(targetDir, { recursive: true });
  const realPath = await fs.realpath(dirPath);
  await fs.cp(realPath, targetDir, { recursive: true });
  return targetDir;
}

export async function copyCommand(filePath: string, targetDir: string) {
  // targetDir can be an account dir or a project .claude dir
  const commandsDir = path.join(targetDir, "commands");
  await fs.mkdir(commandsDir, { recursive: true });
  const fileName = path.basename(filePath);
  const targetPath = path.join(commandsDir, fileName);
  await fs.copyFile(await fs.realpath(filePath), targetPath);
  return targetPath;
}

export async function copyPlugin(dirPath: string, targetAccountDir: string) {
  const pluginName = path.basename(dirPath);
  const targetDir = path.join(
    targetAccountDir,
    "plugins",
    "marketplaces",
    "claude-plugins-official",
    "plugins",
    pluginName,
  );
  await fs.mkdir(targetDir, { recursive: true });
  const realPath = await fs.realpath(dirPath);
  await fs.cp(realPath, targetDir, { recursive: true });
  return targetDir;
}
