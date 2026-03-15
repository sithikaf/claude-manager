import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface SkillInfo {
  name: string;
  description?: string;
  author?: string;
  version?: string;
  dirPath: string;
  content: string;
  source: string;
  hasExamples: boolean;
  hasScripts: boolean;
  pluginDirPath?: string;
}

async function discoverSkillDirs(rootDir: string, depth = 2): Promise<string[]> {
  const skillDirs: string[] = [];

  try {
    const entries = await fs.readdir(rootDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory() && !entry.isSymbolicLink()) continue;

      const candidateDir = path.join(rootDir, entry.name);
      const skillFile = path.join(candidateDir, "SKILL.md");

      try {
        await fs.access(skillFile);
        skillDirs.push(candidateDir);
        continue;
      } catch {
        // recurse into grouped skill folders such as .system/openai-docs
      }

      if (depth > 0 && entry.isDirectory()) {
        skillDirs.push(...(await discoverSkillDirs(candidateDir, depth - 1)));
      }
    }
  } catch {
    // no readable skills directory
  }

  return skillDirs;
}

export async function scanSkills(basePath: string, source: string, pluginDirPath?: string): Promise<SkillInfo[]> {
  const skillsDir = path.join(basePath, "skills");
  const skills: SkillInfo[] = [];

  try {
    const skillDirs = await discoverSkillDirs(skillsDir);
    for (const skillDir of skillDirs) {
      const skillFile = path.join(skillDir, "SKILL.md");
      try {
        const raw = await fs.readFile(skillFile, "utf-8");
        const { data } = matter(raw);

        let hasExamples = false;
        let hasScripts = false;
        try { await fs.access(path.join(skillDir, "examples")); hasExamples = true; } catch {}
        try { await fs.access(path.join(skillDir, "scripts")); hasScripts = true; } catch {}

        skills.push({
          name: (data.name as string) ?? path.basename(skillDir),
          description: data.description as string | undefined,
          author: data.author as string | undefined,
          version: data.version as string | undefined,
          dirPath: skillDir,
          content: raw,
          source,
          hasExamples,
          hasScripts,
          pluginDirPath,
        });
      } catch {
        // no SKILL.md
      }
    }
  } catch {
    // no skills dir
  }

  return skills;
}
