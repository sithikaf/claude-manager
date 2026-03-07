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

export async function scanSkills(basePath: string, source: string, pluginDirPath?: string): Promise<SkillInfo[]> {
  const skillsDir = path.join(basePath, "skills");
  const skills: SkillInfo[] = [];

  try {
    const entries = await fs.readdir(skillsDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory() && !entry.isSymbolicLink()) continue;
      const skillDir = path.join(skillsDir, entry.name);
      const skillFile = path.join(skillDir, "SKILL.md");
      try {
        const raw = await fs.readFile(skillFile, "utf-8");
        const { data } = matter(raw);

        let hasExamples = false;
        let hasScripts = false;
        try { await fs.access(path.join(skillDir, "examples")); hasExamples = true; } catch {}
        try { await fs.access(path.join(skillDir, "scripts")); hasScripts = true; } catch {}

        skills.push({
          name: (data.name as string) ?? entry.name,
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
