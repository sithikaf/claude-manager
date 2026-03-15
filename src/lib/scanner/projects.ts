import fs from "fs/promises";
import path from "path";
import { getHomeDir } from "~/lib/home-dir";

export interface ProjectInfo {
  name: string;
  dirPath: string;
}

export async function scanProjects(): Promise<ProjectInfo[]> {
  const homeDir = getHomeDir();
  const entries = await fs.readdir(homeDir, { withFileTypes: true });
  const projects: ProjectInfo[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;

    const markers = [
      { dirName: ".claude", label: "Claude" },
      { dirName: ".codex", label: "Codex" },
    ];
    const found: { dirPath: string; label: string }[] = [];

    for (const marker of markers) {
      const projectDir = path.join(homeDir, entry.name, marker.dirName);
      try {
        const stat = await fs.stat(projectDir);
        if (stat.isDirectory()) {
          found.push({ dirPath: projectDir, label: marker.label });
        }
      } catch {
        // no matching tool dir in this project
      }
    }

    const needsQualifier = found.length > 1;
    for (const project of found) {
      projects.push({
        name: needsQualifier ? `${entry.name} (${project.label})` : entry.name,
        dirPath: project.dirPath,
      });
    }
  }

  return projects;
}
