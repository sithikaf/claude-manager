import type { SourceFetcher, MarketplaceItemInput } from "../types";
import { parseAwesomeList } from "./parse-utils";

export const awesomeMcpServersFetcher: SourceFetcher = {
  source: "awesome-mcp-servers",
  category: "mcp-server",

  async fetch(): Promise<MarketplaceItemInput[]> {
    const res = await fetch(
      "https://raw.githubusercontent.com/punkpeye/awesome-mcp-servers/main/README.md",
      { signal: AbortSignal.timeout(15000) },
    );
    if (!res.ok) return [];

    const markdown = await res.text();
    return parseAwesomeList(markdown, "mcp-server", "awesome-mcp-servers");
  },
};
