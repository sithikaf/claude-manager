import type { SourceFetcher, MarketplaceItemInput } from "../types";

/**
 * Curated list of well-known MCP servers, skills, and plugins
 * that aren't covered by the automated fetchers.
 */
const curatedItems: MarketplaceItemInput[] = [
  {
    externalId: "upstash/context7",
    category: "mcp-server",
    source: "curated",
    name: "Context7 MCP",
    description:
      "Pulls up-to-date, version-specific documentation and code examples straight from the source and places them directly into your prompt. Prevents hallucinated APIs and outdated code.",
    author: "Upstash",
    repositoryUrl: "https://github.com/upstash/context7",
    homepage: "https://context7.com",
    transportType: "stdio, http",
    packageName: "@upstash/context7-mcp",
    installCommand: "npx -y @upstash/context7-mcp",
    installConfig: {
      command: "npx",
      args: ["-y", "@upstash/context7-mcp"],
      env: {},
    },
    tags: ["documentation", "context", "ai"],
  },
];

export const curatedFetcher: SourceFetcher = {
  source: "curated",
  category: "mcp-server",

  async fetch(): Promise<MarketplaceItemInput[]> {
    return curatedItems;
  },
};
