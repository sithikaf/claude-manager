"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface ProviderSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  includeAll?: boolean;
  className?: string;
}

export function ProviderSelect({
  value,
  onValueChange,
  includeAll = true,
  className = "w-36",
}: ProviderSelectProps) {
  return (
    <Select value={value} onValueChange={(next) => onValueChange(next ?? "all")}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Provider" />
      </SelectTrigger>
      <SelectContent>
        {includeAll && <SelectItem value="all">All providers</SelectItem>}
        <SelectItem value="claude">Claude</SelectItem>
        <SelectItem value="codex">Codex</SelectItem>
      </SelectContent>
    </Select>
  );
}
