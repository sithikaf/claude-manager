import fs from "fs/promises";
import path from "path";

export interface MarketplacePlugin {
  name: string;
  description?: string;
  version?: string;
  author?: string;
  category?: string;
  source: string;
  installedIn: string[]; // account dirPaths where installed
}

const MARKETPLACE_JSON_PATH = path.join(
  process.env.HOME ?? "/home/fernando-server",
  ".claude",
  "plugins",
  "marketplaces",
  "claude-plugins-official",
  ".claude-plugin",
  "marketplace.json",
);

export async function getMarketplaceCatalog(accountDirs: string[]): Promise<MarketplacePlugin[]> {
  const raw = await fs.readFile(MARKETPLACE_JSON_PATH, "utf-8");
  const data = JSON.parse(raw);
  const plugins: MarketplacePlugin[] = [];

  for (const p of data.plugins ?? []) {
    const authorName = typeof p.author === "object" ? p.author?.name : p.author;
    const installedIn: string[] = [];

    for (const accDir of accountDirs) {
      const pluginDir = path.join(
        accDir,
        "plugins",
        "marketplaces",
        "claude-plugins-official",
        "plugins",
        p.name,
      );
      try {
        await fs.access(pluginDir);
        installedIn.push(accDir);
      } catch {
        // not installed
      }
    }

    plugins.push({
      name: p.name,
      description: p.description,
      version: p.version,
      author: authorName,
      category: p.category,
      source: p.source,
      installedIn,
    });
  }

  return plugins;
}
