"use client";

import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface MarketplaceFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  source: string;
  onSourceChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  sources: { id: string; itemCount: number }[];
}

const sourceLabels: Record<string, string> = {
  "mcp-registry": "MCP Registry",
  glama: "Glama.ai",
  "awesome-mcp-servers": "Awesome MCP Servers",
  "awesome-skills": "Awesome Skills",
  "awesome-plugins": "Awesome Plugins",
  "local-marketplace": "Local Marketplace",
  curated: "Curated",
  custom: "Custom",
};

export function MarketplaceFilters({
  search,
  onSearchChange,
  source,
  onSourceChange,
  sort,
  onSortChange,
  sources,
}: MarketplaceFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Input
        placeholder="Search marketplace..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-64"
      />

      <Select value={source} onValueChange={(v) => onSourceChange(v ?? "all")}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="All sources" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All sources</SelectItem>
          {sources.map((s) => (
            <SelectItem key={s.id} value={s.id}>
              {sourceLabels[s.id] ?? s.id} ({s.itemCount})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sort} onValueChange={(v) => onSortChange(v ?? "name")}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="stars">Stars</SelectItem>
          <SelectItem value="downloads">Downloads</SelectItem>
          <SelectItem value="recent">Recent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
