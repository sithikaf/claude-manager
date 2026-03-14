"use client";

import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export default function AccountsPage() {
  const accounts = api.accounts.list.useQuery();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Accounts</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.data?.map((account) => (
          <Card key={account.id}>
            <CardHeader>
              <CardTitle className="text-base">
                {account.displayName ?? account.name}
              </CardTitle>
              {account.email && (
                <p className="text-sm text-muted-foreground">{account.email}</p>
              )}
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
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
          No accounts found. Click &quot;Scan Now&quot; to discover accounts.
        </p>
      )}
    </div>
  );
}
