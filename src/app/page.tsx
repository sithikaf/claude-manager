"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { StatsCards } from "~/components/dashboard/stats-cards";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ProviderSelect } from "~/components/filters/provider-select";
import { getWorkspaceDisplayName, getWorkspaceProviderLabel } from "~/lib/workspaces";

export default function DashboardPage() {
  const [providerFilter, setProviderFilter] = useState<string>("all");
  const provider = providerFilter !== "all" ? providerFilter as "claude" | "codex" : undefined;

  const accounts = api.accounts.list.useQuery({ provider });
  const agents = api.agents.list.useQuery({ provider });
  const skills = api.skills.list.useQuery({ provider });
  const commands = api.commands.list.useQuery({ provider });
  const mcpServers = api.mcpServers.list.useQuery({ provider });
  const plugins = api.plugins.list.useQuery({ provider });
  const instructions = api.instructions.list.useQuery({ provider });
  const scanStatus = api.scanner.status.useQuery();
  const totalItems = provider
    ? (agents.data?.length ?? 0)
      + (skills.data?.length ?? 0)
      + (commands.data?.length ?? 0)
      + (mcpServers.data?.length ?? 0)
      + (plugins.data?.length ?? 0)
      + (instructions.data?.length ?? 0)
    : (scanStatus.data?.itemCount ?? 0);

  const stats = [
    { label: "Workspaces", value: accounts.data?.length ?? 0, icon: "WS" },
    { label: "Instructions", value: instructions.data?.length ?? 0, icon: "IN" },
    { label: "Agents", value: agents.data?.length ?? 0, icon: "AG" },
    { label: "Skills", value: skills.data?.length ?? 0, icon: "SK" },
    { label: "Commands", value: commands.data?.length ?? 0, icon: "CM" },
    { label: "Plugins", value: plugins.data?.length ?? 0, icon: "PL" },
    {
      label: "Total Items",
      value: totalItems,
      icon: "TL",
    },
  ];

  if (accounts.isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Loading... Click &quot;Scan Now&quot; if this is your first time.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <ProviderSelect value={providerFilter} onValueChange={setProviderFilter} />
        </div>
        {scanStatus.data && (
          <p className="text-sm text-muted-foreground">
            Last scan: {new Date(scanStatus.data.lastScan).toLocaleString()}
          </p>
        )}
      </div>

      <StatsCards stats={stats} />

      <div className="grid gap-4 lg:grid-cols-3">
        {accounts.data?.map((account) => (
          <Card key={account.id}>
            <CardHeader>
              <CardTitle className="text-base">
                {getWorkspaceDisplayName(account.name, account.displayName)}
              </CardTitle>
              {account.email && (
                <p className="text-sm text-muted-foreground">{account.email}</p>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{getWorkspaceProviderLabel(account.provider)}</Badge>
                <Badge variant="outline">{account._count.instructions} instructions</Badge>
                <Badge variant="outline">{account._count.agents} agents</Badge>
                <Badge variant="outline">{account._count.skills} skills</Badge>
                <Badge variant="outline">{account._count.commands} commands</Badge>
                <Badge variant="outline">{account._count.plugins} plugins</Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{account.dirPath}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
