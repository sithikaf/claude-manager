import type { SourceFetcher, MarketplaceItemInput } from "../types";

export const mcpRegistryFetcher: SourceFetcher = {
  source: "mcp-registry",
  category: "mcp-server",

  async fetch(): Promise<MarketplaceItemInput[]> {
    const items: MarketplaceItemInput[] = [];
    let cursor: string | undefined;

    for (let page = 0; page < 20; page++) {
      const url = new URL("https://registry.modelcontextprotocol.io/v0.1/servers");
      if (cursor) url.searchParams.set("cursor", cursor);
      url.searchParams.set("count", "100");

      const res = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) break;

      const data = (await res.json()) as {
        servers?: Array<Record<string, unknown>>;
        next_cursor?: string;
      };

      for (const server of data.servers ?? []) {
        const name = (server.name as string) ?? "";
        if (!name) continue;

        const packages = server.packages as Array<Record<string, unknown>> | undefined;
        const firstPkg = packages?.[0];
        const registryName = firstPkg?.registry_name as string | undefined;

        items.push({
          externalId: name,
          category: "mcp-server",
          source: "mcp-registry",
          name,
          description: server.description as string | undefined,
          author: server.vendor as string | undefined,
          version: firstPkg?.version as string | undefined,
          repositoryUrl: server.source_url as string | undefined,
          homepage: server.homepage as string | undefined,
          transportType: (server.transport as string[])?.join(", "),
          packageName: registryName,
          installCommand: registryName ? `npx ${registryName}` : undefined,
          installConfig: firstPkg
            ? {
                command: "npx",
                args: ["-y", registryName ?? name],
                env: {},
              }
            : undefined,
          rawData: server as Record<string, unknown>,
        });
      }

      cursor = data.next_cursor as string | undefined;
      if (!cursor) break;
    }

    return items;
  },
};
