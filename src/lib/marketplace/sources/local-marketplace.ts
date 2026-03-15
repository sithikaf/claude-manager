import type { SourceFetcher, MarketplaceItemInput } from "../types";
import { getMarketplaceCatalog } from "~/lib/plugins/marketplace";
import { db } from "~/server/db";

export const localMarketplaceFetcher: SourceFetcher = {
  source: "local-marketplace",
  category: "plugin",

  async fetch(): Promise<MarketplaceItemInput[]> {
    const accounts = await db.account.findMany();
    const accountDirs = accounts.map((a) => a.dirPath);

    try {
      const plugins = await getMarketplaceCatalog(accountDirs);
      return plugins.map((p) => ({
        externalId: p.name,
        category: "plugin" as const,
        source: "local-marketplace",
        name: p.name,
        description: p.description,
        author: p.author,
        version: p.version,
        tags: p.category ? [p.category] : undefined,
        supportedProviders: ["claude"],
      }));
    } catch {
      return [];
    }
  },
};
