"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { ItemCard } from "~/components/items/item-card";
import { ItemDetailDialog } from "~/components/items/item-detail-dialog";
import { ProviderSelect } from "~/components/filters/provider-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { getWorkspaceDisplayName, getWorkspaceProviderLabel } from "~/lib/workspaces";

export default function CommandsPage() {
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [providerFilter, setProviderFilter] = useState<string>("all");
  const setSource = (v: string | null) => setSourceFilter(v ?? "all");

  const commands = api.commands.list.useQuery({
    source: sourceFilter !== "all" ? sourceFilter : undefined,
    provider: providerFilter !== "all" ? providerFilter as "claude" | "codex" : undefined,
  });
  const commandDetail = api.commands.getById.useQuery(
    { id: selectedCommand! },
    { enabled: !!selectedCommand },
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Commands</h2>
        <div className="flex gap-2">
          <ProviderSelect value={providerFilter} onValueChange={setProviderFilter} />
          <Select value={sourceFilter} onValueChange={setSource}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All sources" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All sources</SelectItem>
              <SelectItem value="account">Account</SelectItem>
              <SelectItem value="project">Project</SelectItem>
              <SelectItem value="plugin">Plugin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commands.data?.map((cmd) => (
          <ItemCard
            key={cmd.id}
            title={cmd.name}
            description={cmd.description}
            badges={[
              { label: cmd.source },
              ...(cmd.account ? [
                { label: getWorkspaceDisplayName(cmd.account.name, cmd.account.displayName), variant: "outline" as const },
                { label: getWorkspaceProviderLabel(cmd.account.provider), variant: "secondary" as const },
              ] : []),
              ...(cmd.project ? [
                { label: cmd.project.name, variant: "secondary" as const },
                { label: getWorkspaceProviderLabel(cmd.project.provider), variant: "outline" as const },
              ] : []),
              ...(cmd.plugin ? [{ label: cmd.plugin.name, variant: "secondary" as const }] : []),
            ]}
            onClick={() => setSelectedCommand(cmd.id)}
          />
        ))}
      </div>

      {commands.data?.length === 0 && (
        <p className="text-center text-muted-foreground">No commands found. Click &quot;Scan Now&quot; to discover commands.</p>
      )}

      {commandDetail.data && (
        <ItemDetailDialog
          open={!!selectedCommand}
          onOpenChange={(open) => !open && setSelectedCommand(null)}
          title={commandDetail.data.name}
          badges={[{ label: commandDetail.data.source }]}
          content={commandDetail.data.content}
          meta={[
            { label: "File", value: commandDetail.data.filePath },
          ]}
        />
      )}
    </div>
  );
}
