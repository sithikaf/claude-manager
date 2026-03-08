import type { SourceFetcher, MarketplaceItemInput } from "../types";
import { parseAwesomeList } from "./parse-utils";

export const awesomeSkillsFetcher: SourceFetcher = {
  source: "awesome-skills",
  category: "skill",

  async fetch(): Promise<MarketplaceItemInput[]> {
    const urls = [
      "https://raw.githubusercontent.com/ComposioHQ/awesome-claude-skills/main/README.md",
      "https://raw.githubusercontent.com/hesreallyhim/awesome-claude-code/main/README.md",
    ];

    const allItems: MarketplaceItemInput[] = [];

    for (const url of urls) {
      try {
        const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
        if (!res.ok) continue;
        const markdown = await res.text();
        const subSource = url.includes("ComposioHQ") ? "awesome-skills" : "awesome-claude-code";
        const items = parseAwesomeList(markdown, "skill", subSource);
        allItems.push(...items);
      } catch {
        // skip on error
      }
    }

    return allItems;
  },
};
