"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { ItemCard } from "~/components/items/item-card";
import { ItemDetailDialog } from "~/components/items/item-detail-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [accountFilter, setAccountFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const setAccount = (v: string | null) => setAccountFilter(v ?? "all");
  const setSource = (v: string | null) => setSourceFilter(v ?? "all");

  const accounts = api.accounts.list.useQuery();
  const agents = api.agents.list.useQuery({
    accountId: accountFilter !== "all" ? accountFilter : undefined,
    source: sourceFilter !== "all" ? sourceFilter : undefined,
  });
  const agentDetail = api.agents.getById.useQuery(
    { id: selectedAgent! },
    { enabled: !!selectedAgent },
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Agents</h2>
        <div className="flex gap-2">
          <Select value={accountFilter} onValueChange={setAccount}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All accounts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All accounts</SelectItem>
              {accounts.data?.map((acc) => (
                <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sourceFilter} onValueChange={setSource}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="All sources" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All sources</SelectItem>
              <SelectItem value="account">Account</SelectItem>
              <SelectItem value="plugin">Plugin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.data?.map((agent) => (
          <ItemCard
            key={agent.id}
            title={agent.name}
            description={agent.description}
            badges={[
              { label: agent.account.name, variant: "outline" },
              { label: agent.source },
              ...(agent.model ? [{ label: agent.model, variant: "secondary" as const }] : []),
              ...(agent.color ? [{ label: agent.color, variant: "outline" as const }] : []),
            ]}
            meta={[
              ...(agent.tools ? [{ label: "Tools", value: agent.tools }] : []),
              ...(agent.plugin ? [{ label: "Plugin", value: agent.plugin.name }] : []),
            ]}
            onClick={() => setSelectedAgent(agent.id)}
          />
        ))}
      </div>

      {agents.data?.length === 0 && (
        <p className="text-center text-muted-foreground">No agents found. Click &quot;Scan Now&quot; to discover agents.</p>
      )}

      {agentDetail.data && (
        <ItemDetailDialog
          open={!!selectedAgent}
          onOpenChange={(open) => !open && setSelectedAgent(null)}
          title={agentDetail.data.name}
          badges={[
            { label: agentDetail.data.account.name, variant: "outline" },
            { label: agentDetail.data.source },
          ]}
          content={agentDetail.data.content}
          meta={[
            { label: "File", value: agentDetail.data.filePath },
            ...(agentDetail.data.model ? [{ label: "Model", value: agentDetail.data.model }] : []),
            ...(agentDetail.data.tools ? [{ label: "Tools", value: agentDetail.data.tools }] : []),
          ]}
        />
      )}
    </div>
  );
}
