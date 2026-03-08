import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface AgentInfo {
  name: string;
  description?: string;
  tools?: string;
  model?: string;
  color?: string;
  filePath: string;
  content: string;
  source: string;
  pluginDirPath?: string;
}

export async function scanAgents(basePath: string, source: string, pluginDirPath?: string): Promise<AgentInfo[]> {
  const agentsDir = path.join(basePath, "agents");
  const agents: AgentInfo[] = [];

  try {
    const files = await fs.readdir(agentsDir);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const filePath = path.join(agentsDir, file);
      const raw = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(raw);
      agents.push({
        name: (data.name as string) ?? path.basename(file, ".md"),
        description: data.description ? String(data.description).slice(0, 2000) : undefined,
        tools: Array.isArray(data.tools) ? data.tools.join(", ") : (data.tools as string | undefined),
        model: data.model as string | undefined,
        color: data.color as string | undefined,
        filePath,
        content: raw,
        source,
        pluginDirPath,
      });
    }
  } catch {
    // no agents dir
  }

  return agents;
}
