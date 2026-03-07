import fs from "fs/promises";
import path from "path";
import { scanAgents, type AgentInfo } from "./agents";
import { scanSkills, type SkillInfo } from "./skills";
import { scanCommands, type CommandInfo } from "./commands";

export interface PluginInfo {
  name: string;
  description?: string;
  author?: string;
  category?: string;
  dirPath: string;
  agents: AgentInfo[];
  skills: SkillInfo[];
  commands: CommandInfo[];
}

export async function scanPlugins(accountPath: string): Promise<PluginInfo[]> {
  const pluginsBaseDir = path.join(accountPath, "plugins", "marketplaces");
  const plugins: PluginInfo[] = [];

  try {
    const marketplaces = await fs.readdir(pluginsBaseDir);
    for (const marketplace of marketplaces) {
      const pluginsDir = path.join(pluginsBaseDir, marketplace, "plugins");
      try {
        const pluginDirs = await fs.readdir(pluginsDir, { withFileTypes: true });
        for (const entry of pluginDirs) {
          if (!entry.isDirectory() && !entry.isSymbolicLink()) continue;
          const pluginDir = path.join(pluginsDir, entry.name);

          let name = entry.name;
          let description: string | undefined;
          let author: string | undefined;
          let category: string | undefined;

          // Try to read plugin.json
          try {
            const pluginJsonPath = path.join(pluginDir, ".claude-plugin", "plugin.json");
            const pluginJson = JSON.parse(await fs.readFile(pluginJsonPath, "utf-8"));
            name = pluginJson.name ?? name;
            description = pluginJson.description;
            author = typeof pluginJson.author === "object" ? pluginJson.author?.name : pluginJson.author;
            category = pluginJson.category;
          } catch {
            // no plugin.json
          }

          const agents = await scanAgents(pluginDir, "plugin", pluginDir);
          const skills = await scanSkills(pluginDir, "plugin", pluginDir);
          const commands = await scanCommands(pluginDir, "plugin", pluginDir);

          plugins.push({ name, description, author, category, dirPath: pluginDir, agents, skills, commands });
        }
      } catch {
        // no plugins dir for this marketplace
      }
    }
  } catch {
    // no plugins/marketplaces dir
  }

  return plugins;
}
