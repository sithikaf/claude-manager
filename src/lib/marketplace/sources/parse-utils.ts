import type { MarketplaceItemInput } from "../types";

/**
 * Parses awesome-list style markdown into marketplace items.
 * Handles patterns like:
 *   - [Name](url) - Description
 *   - **[Name](url)** - Description
 *   - [Name](url): Description
 */
export function parseAwesomeList(
  markdown: string,
  category: MarketplaceItemInput["category"],
  source: string,
): MarketplaceItemInput[] {
  const items: MarketplaceItemInput[] = [];
  const seen = new Set<string>();

  // Match lines with [Name](url) pattern
  const lineRegex = /^[-*]\s+\*{0,2}\[([^\]]+)\]\(([^)]+)\)\*{0,2}\s*[-:–]\s*(.+)/gm;
  let match;

  while ((match = lineRegex.exec(markdown)) !== null) {
    const name = match[1]!.trim();
    const url = match[2]!.trim();
    const description = match[3]!.trim();

    // Skip non-GitHub/non-http links and duplicates
    if (!url.startsWith("http")) continue;
    const key = `${source}:${url}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const isGitHub = url.includes("github.com");
    const repoMatch = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    const author = repoMatch ? repoMatch[1] : undefined;

    items.push({
      externalId: url,
      category,
      source,
      name,
      description,
      author,
      repositoryUrl: isGitHub ? url : undefined,
      homepage: !isGitHub ? url : undefined,
    });
  }

  return items;
}
