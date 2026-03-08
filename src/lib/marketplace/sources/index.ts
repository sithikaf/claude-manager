import type { SourceFetcher } from "../types";
import { mcpRegistryFetcher } from "./mcp-registry";
import { glamaFetcher } from "./glama";
import { awesomeMcpServersFetcher } from "./awesome-mcp-servers";
import { awesomeSkillsFetcher } from "./awesome-skills";
import { awesomePluginsFetcher } from "./awesome-plugins";
import { localMarketplaceFetcher } from "./local-marketplace";

export const allFetchers: SourceFetcher[] = [
  mcpRegistryFetcher,
  glamaFetcher,
  awesomeMcpServersFetcher,
  awesomeSkillsFetcher,
  awesomePluginsFetcher,
  localMarketplaceFetcher,
];
