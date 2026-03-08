"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface MarketplaceCardProps {
  name: string;
  description?: string | null;
  category: string;
  source: string;
  author?: string | null;
  stars?: number | null;
  downloadCount?: number | null;
  transportType?: string | null;
  tags?: string | null;
  onDetails: () => void;
  onInstall: () => void;
}

const categoryColors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "mcp-server": "default",
  skill: "secondary",
  agent: "destructive",
  plugin: "outline",
};

const sourceLabels: Record<string, string> = {
  "mcp-registry": "MCP Registry",
  glama: "Glama.ai",
  "awesome-mcp-servers": "Awesome MCP",
  "awesome-skills": "Awesome Skills",
  "awesome-claude-code": "Awesome Claude",
  "awesome-plugins": "Awesome Plugins",
  "local-marketplace": "Local",
  curated: "Curated",
  custom: "Custom",
};

export function MarketplaceCard({
  name,
  description,
  category,
  source,
  author,
  stars,
  downloadCount,
  transportType,
  tags,
  onDetails,
  onInstall,
}: MarketplaceCardProps) {
  const parsedTags = tags ? (JSON.parse(tags) as string[]).slice(0, 3) : [];

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1 text-base">{name}</CardTitle>
          <Badge variant={categoryColors[category] ?? "secondary"} className="shrink-0 text-xs">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2">
        {description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        )}

        <div className="flex flex-wrap gap-1">
          <Badge variant="outline" className="text-xs">
            {sourceLabels[source] ?? source}
          </Badge>
          {transportType && (
            <Badge variant="outline" className="text-xs">{transportType}</Badge>
          )}
          {parsedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          {author && <span>by {author}</span>}
          {stars != null && stars > 0 && <span>★ {stars.toLocaleString()}</span>}
          {downloadCount != null && downloadCount > 0 && (
            <span>↓ {downloadCount.toLocaleString()}</span>
          )}
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <Button size="sm" variant="outline" onClick={onDetails}>
            Details
          </Button>
          <Button size="sm" onClick={onInstall}>
            Install
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
