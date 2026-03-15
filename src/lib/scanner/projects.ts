import fs from "fs/promises";
import path from "path";
import { getHomeDir } from "~/lib/home-dir";
import { type WorkspaceProvider } from "~/lib/workspaces";

export interface ProjectInfo {
  name: string;
  dirPath: string;
  provider: WorkspaceProvider;
}

export async function scanProjects(): Promise<ProjectInfo[]> {
  const homeDir = getHomeDir();
  const entries = await fs.readdir(homeDir, { withFileTypes: true });
  const projects: ProjectInfo[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;

    const markers = [
      { dirName: ".claude", label: "Claude", provider: "claude" as const },
      { dirName: ".codex", label: "Codex", provider: "codex" as const },
    ];
    const found: { dirPath: string; label: string; provider: WorkspaceProvider }[] = [];

    for (const marker of markers) {
      const projectDir = path.join(homeDir, entry.name, marker.dirName);
      try {
        const stat = await fs.stat(projectDir);
        if (stat.isDirectory()) {
          found.push({ dirPath: projectDir, label: marker.label, provider: marker.provider });
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
        provider: project.provider,
      });
    }
  }

  return projects;
}
