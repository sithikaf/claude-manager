"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { ItemCard } from "~/components/items/item-card";
import { ItemDetailDialog } from "~/components/items/item-detail-dialog";
import { ProviderSelect } from "~/components/filters/provider-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { getWorkspaceDisplayName, getWorkspaceProviderLabel } from "~/lib/workspaces";

export default function InstructionsPage() {
  const [selectedInstruction, setSelectedInstruction] = useState<string | null>(null);
  const [providerFilter, setProviderFilter] = useState<string>("all");
  const [kindFilter, setKindFilter] = useState<string>("all");

  const instructions = api.instructions.list.useQuery({
    provider: providerFilter !== "all" ? providerFilter as "claude" | "codex" : undefined,
    kind: kindFilter !== "all" ? kindFilter as "rule" | "project-instruction" : undefined,
  });
  const instructionDetail = api.instructions.getById.useQuery(
    { id: selectedInstruction! },
    { enabled: !!selectedInstruction },
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Instructions</h2>
        <div className="flex gap-2">
          <ProviderSelect value={providerFilter} onValueChange={setProviderFilter} />
          <Select value={kindFilter} onValueChange={(value) => setKindFilter(value ?? "all")}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="All kinds" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All kinds</SelectItem>
              <SelectItem value="rule">Rules</SelectItem>
              <SelectItem value="project-instruction">Project instructions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {instructions.data?.map((instruction) => {
          const ownerLabel = instruction.account
            ? getWorkspaceDisplayName(instruction.account.name, instruction.account.displayName)
            : instruction.project?.name;
          const provider = instruction.account?.provider ?? instruction.project?.provider ?? "unknown";

          return (
            <ItemCard
              key={instruction.id}
              title={instruction.name}
              description={instruction.kind === "rule" ? "Workspace rule" : "Project instruction"}
              badges={[
                { label: getWorkspaceProviderLabel(provider), variant: "secondary" },
                { label: instruction.kind },
              ]}
              meta={[
                ...(ownerLabel ? [{ label: "Owner", value: ownerLabel }] : []),
                { label: "File", value: instruction.filePath },
              ]}
              onClick={() => setSelectedInstruction(instruction.id)}
            />
          );
        })}
      </div>

      {instructions.data?.length === 0 && (
        <p className="text-center text-muted-foreground">
          No instructions found for the current filters.
        </p>
      )}

      {instructionDetail.data && (
        <ItemDetailDialog
          open={!!selectedInstruction}
          onOpenChange={(open) => !open && setSelectedInstruction(null)}
          title={instructionDetail.data.name}
          badges={[
            {
              label: getWorkspaceProviderLabel(
                instructionDetail.data.account?.provider ?? instructionDetail.data.project?.provider ?? "unknown",
              ),
              variant: "secondary",
            },
            { label: instructionDetail.data.kind, variant: "outline" },
          ]}
          content={instructionDetail.data.content}
          meta={[
            { label: "File", value: instructionDetail.data.filePath },
            ...(instructionDetail.data.account
              ? [{ label: "Workspace", value: getWorkspaceDisplayName(instructionDetail.data.account.name, instructionDetail.data.account.displayName) }]
              : []),
            ...(instructionDetail.data.project
              ? [{ label: "Project", value: instructionDetail.data.project.name }]
              : []),
          ]}
        />
      )}
    </div>
  );
}
