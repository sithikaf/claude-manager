import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface CommandInfo {
  name: string;
  description?: string;
  filePath: string;
  content: string;
  source: string;
  pluginDirPath?: string;
}

export async function scanCommands(basePath: string, source: string, pluginDirPath?: string): Promise<CommandInfo[]> {
  const commandsDir = path.join(basePath, "commands");
  const commands: CommandInfo[] = [];

  try {
    const files = await fs.readdir(commandsDir);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const filePath = path.join(commandsDir, file);
      const raw = await fs.readFile(filePath, "utf-8");
      const { data } = matter(raw);
      commands.push({
        name: (data.name as string) ?? path.basename(file, ".md"),
        description: data.description as string | undefined,
        filePath,
        content: raw,
        source,
        pluginDirPath,
      });
    }
  } catch {
    // no commands dir
  }

  return commands;
}
