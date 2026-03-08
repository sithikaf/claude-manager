export interface MarketplaceItemInput {
  externalId: string;
  category: "skill" | "agent" | "mcp-server" | "plugin";
  source: string;
  name: string;
  description?: string;
  author?: string;
  version?: string;
  tags?: string[];
  repositoryUrl?: string;
  homepage?: string;
  downloadCount?: number;
  stars?: number;
  transportType?: string;
  packageName?: string;
  installCommand?: string;
  installConfig?: Record<string, unknown>;
  rawData?: Record<string, unknown>;
}

export interface SourceFetcher {
  source: string;
  category: string;
  fetch(): Promise<MarketplaceItemInput[]>;
}
