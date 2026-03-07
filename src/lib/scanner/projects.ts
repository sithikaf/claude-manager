import fs from "fs/promises";
import path from "path";

export interface ProjectInfo {
  name: string;
  dirPath: string;
}

export async function scanProjects(): Promise<ProjectInfo[]> {
  const homeDir = process.env.HOME ?? "/home/fernando-server";
  const entries = await fs.readdir(homeDir, { withFileTypes: true });
  const projects: ProjectInfo[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
    const claudeDir = path.join(homeDir, entry.name, ".claude");
    try {
      const stat = await fs.stat(claudeDir);
      if (stat.isDirectory()) {
        projects.push({
          name: entry.name,
          dirPath: claudeDir,
        });
      }
    } catch {
      // no .claude dir in this project
    }
  }

  return projects;
}
