"use client";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

interface SyncStatusProps {
  sources: { id: string; lastSync: Date; itemCount: number; status: string; error?: string | null }[];
  totalItems: number;
  onRefresh: () => void;
  isSyncing: boolean;
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export function SyncStatus({ sources, totalItems, onRefresh, isSyncing }: SyncStatusProps) {
  const lastSync = sources.length > 0
    ? new Date(Math.max(...sources.map((s) => new Date(s.lastSync).getTime())))
    : null;

  const hasErrors = sources.some((s) => s.status === "error");

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">
        {totalItems.toLocaleString()} items
      </span>
      {lastSync && (
        <span className="text-sm text-muted-foreground">
          Synced {timeAgo(lastSync)}
        </span>
      )}
      {hasErrors && (
        <Badge variant="destructive" className="text-xs">
          Sync errors
        </Badge>
      )}
      <Button
        size="sm"
        variant="outline"
        onClick={onRefresh}
        disabled={isSyncing}
      >
        {isSyncing ? "Syncing..." : "Refresh"}
      </Button>
    </div>
  );
}
