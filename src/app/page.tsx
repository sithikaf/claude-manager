"use client";

import { api } from "~/trpc/react";
import { StatsCards } from "~/components/dashboard/stats-cards";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { getWorkspaceDisplayName, getWorkspaceProviderLabel } from "~/lib/workspaces";

export default function DashboardPage() {
  const accounts = api.accounts.list.useQuery();
  const agents = api.agents.list.useQuery();
  const skills = api.skills.list.useQuery();
  const commands = api.commands.list.useQuery();
  const plugins = api.plugins.list.useQuery();
  const scanStatus = api.scanner.status.useQuery();

  const stats = [
    { label: "Workspaces", value: accounts.data?.length ?? 0, icon: "WS" },
    { label: "Agents", value: agents.data?.length ?? 0, icon: "AG" },
    { label: "Skills", value: skills.data?.length ?? 0, icon: "SK" },
    { label: "Commands", value: commands.data?.length ?? 0, icon: "CM" },
    { label: "Plugins", value: plugins.data?.length ?? 0, icon: "PL" },
    {
      label: "Total Items",
      value: scanStatus.data?.itemCount ?? 0,
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
        <h2 className="text-2xl font-bold">Dashboard</h2>
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
                <Badge variant="secondary">{getWorkspaceProviderLabel(account.dirPath)}</Badge>
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
