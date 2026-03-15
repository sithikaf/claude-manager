"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ProviderSelect } from "~/components/filters/provider-select";
import { getWorkspaceDisplayName, getWorkspaceProviderLabel } from "~/lib/workspaces";

export default function AccountsPage() {
  const [providerFilter, setProviderFilter] = useState<string>("all");
  const accounts = api.accounts.list.useQuery({
    provider: providerFilter !== "all" ? providerFilter as "claude" | "codex" : undefined,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Workspaces</h2>
        <ProviderSelect value={providerFilter} onValueChange={setProviderFilter} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {accounts.data?.length === 0 && (
        <p className="text-center text-muted-foreground">
          No workspaces found. Click &quot;Scan Now&quot; to discover Claude and Codex homes.
        </p>
      )}
    </div>
  );
}
