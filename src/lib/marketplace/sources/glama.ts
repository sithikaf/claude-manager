import type { SourceFetcher, MarketplaceItemInput } from "../types";

export const glamaFetcher: SourceFetcher = {
  source: "glama",
  category: "mcp-server",

  async fetch(): Promise<MarketplaceItemInput[]> {
    const items: MarketplaceItemInput[] = [];

    const res = await fetch("https://glama.ai/api/mcp/v1/servers/", {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return items;

    const data = (await res.json()) as {
      servers?: Array<Record<string, unknown>>;
    };

    for (const server of data.servers ?? []) {
      const name = (server.name as string) ?? (server.id as string) ?? "";
      if (!name) continue;

      items.push({
        externalId: (server.id as string) ?? name,
        category: "mcp-server",
        source: "glama",
        name,
        description: server.description as string | undefined,
        author: server.author as string | undefined,
        repositoryUrl: server.repository as string | undefined,
        homepage: server.homepage as string | undefined,
        downloadCount: server.usage_count as number | undefined,
        stars: server.stars as number | undefined,
        transportType: server.transport as string | undefined,
        rawData: server as Record<string, unknown>,
      });
    }

    return items;
  },
};
