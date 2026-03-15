"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { ItemCard } from "~/components/items/item-card";
import { ItemDetailDialog } from "~/components/items/item-detail-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import Link from "next/link";
import { getWorkspaceDisplayName, getWorkspaceProviderLabel } from "~/lib/workspaces";

export default function McpServersPage() {
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const [accountFilter, setAccountFilter] = useState<string>("all");
  const [scopeFilter, setScopeFilter] = useState<string>("all");

  const accounts = api.accounts.list.useQuery();
  const servers = api.mcpServers.list.useQuery({
    accountId: accountFilter !== "all" ? accountFilter : undefined,
    scope: scopeFilter !== "all" ? scopeFilter : undefined,
  });
  const serverDetail = api.mcpServers.getById.useQuery(
    { id: selectedServer! },
    { enabled: !!selectedServer },
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">MCP Servers</h2>
          <Link href="/marketplace?category=mcp-server" className="text-sm text-primary hover:underline">Browse Marketplace</Link>
        </div>
        <div className="flex gap-2">
          <Select value={accountFilter} onValueChange={(v) => setAccountFilter(v ?? "all")}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All accounts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All accounts</SelectItem>
              {accounts.data?.map((acc) => (
                <SelectItem key={acc.id} value={acc.id}>{getWorkspaceDisplayName(acc.name, acc.displayName)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={scopeFilter} onValueChange={(v) => setScopeFilter(v ?? "all")}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="All scopes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All scopes</SelectItem>
              <SelectItem value="account">Account</SelectItem>
              <SelectItem value="plugin">Plugin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servers.data?.map((server) => (
          <ItemCard
            key={server.id}
            title={server.name}
            description={server.type === "http" ? server.url : server.command}
            badges={[
              { label: getWorkspaceDisplayName(server.account.name, server.account.displayName), variant: "outline" },
              { label: getWorkspaceProviderLabel(server.account.dirPath), variant: "secondary" as const },
              { label: server.type, variant: server.type === "http" ? "secondary" : "default" },
              { label: server.scope },
              ...(server.plugin ? [{ label: server.plugin.name, variant: "outline" as const }] : []),
            ]}
            meta={[
              ...(server.command ? [{ label: "Command", value: server.command }] : []),
              ...(server.url ? [{ label: "URL", value: server.url }] : []),
              ...(server.args ? [{ label: "Args", value: server.args }] : []),
            ]}
            onClick={() => setSelectedServer(server.id)}
          />
        ))}
      </div>

      {servers.data?.length === 0 && (
        <p className="text-center text-muted-foreground">No MCP servers found. Click &quot;Scan Now&quot; to discover servers.</p>
      )}

      {serverDetail.data && (
        <ItemDetailDialog
          open={!!selectedServer}
          onOpenChange={(open) => !open && setSelectedServer(null)}
          title={serverDetail.data.name}
          badges={[
            { label: getWorkspaceDisplayName(serverDetail.data.account.name, serverDetail.data.account.displayName), variant: "outline" },
            { label: getWorkspaceProviderLabel(serverDetail.data.account.dirPath), variant: "secondary" },
            { label: serverDetail.data.type, variant: "secondary" },
            { label: serverDetail.data.scope },
          ]}
          content={serverDetail.data.config}
          meta={[
            { label: "File", value: serverDetail.data.filePath },
            { label: "Type", value: serverDetail.data.type },
            ...(serverDetail.data.command ? [{ label: "Command", value: serverDetail.data.command }] : []),
            ...(serverDetail.data.url ? [{ label: "URL", value: serverDetail.data.url }] : []),
            ...(serverDetail.data.args ? [{ label: "Args", value: serverDetail.data.args }] : []),
            ...(serverDetail.data.envVars ? [{ label: "Env Vars", value: serverDetail.data.envVars }] : []),
          ]}
        />
      )}
    </div>
  );
}
