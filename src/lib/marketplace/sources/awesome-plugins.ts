import type { SourceFetcher, MarketplaceItemInput } from "../types";
import { parseAwesomeList } from "./parse-utils";

export const awesomePluginsFetcher: SourceFetcher = {
  source: "awesome-plugins",
  category: "plugin",

  async fetch(): Promise<MarketplaceItemInput[]> {
    const res = await fetch(
      "https://raw.githubusercontent.com/ComposioHQ/awesome-claude-plugins/main/README.md",
      { signal: AbortSignal.timeout(15000) },
    );
    if (!res.ok) return [];

    const markdown = await res.text();
    return parseAwesomeList(markdown, "plugin", "awesome-plugins");
  },
};
