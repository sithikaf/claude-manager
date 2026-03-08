"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { ItemCard } from "~/components/items/item-card";
import { ItemDetailDialog } from "~/components/items/item-detail-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import Link from "next/link";

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [accountFilter, setAccountFilter] = useState<string>("all");
  const setAccount = (v: string | null) => setAccountFilter(v ?? "all");

  const accounts = api.accounts.list.useQuery();
  const skills = api.skills.list.useQuery({
    accountId: accountFilter !== "all" ? accountFilter : undefined,
  });
  const skillDetail = api.skills.getById.useQuery(
    { id: selectedSkill! },
    { enabled: !!selectedSkill },
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Skills</h2>
          <Link href="/marketplace?category=skill" className="text-sm text-primary hover:underline">Browse Marketplace</Link>
        </div>
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.data?.map((skill) => (
          <ItemCard
            key={skill.id}
            title={skill.name}
            description={skill.description}
            badges={[
              { label: skill.account.name, variant: "outline" },
              { label: skill.source },
              ...(skill.hasExamples ? [{ label: "examples", variant: "secondary" as const }] : []),
              ...(skill.hasScripts ? [{ label: "scripts", variant: "secondary" as const }] : []),
            ]}
            meta={[
              ...(skill.author ? [{ label: "Author", value: skill.author }] : []),
              ...(skill.version ? [{ label: "Version", value: skill.version }] : []),
              ...(skill.plugin ? [{ label: "Plugin", value: skill.plugin.name }] : []),
            ]}
            onClick={() => setSelectedSkill(skill.id)}
          />
        ))}
      </div>

      {skills.data?.length === 0 && (
        <p className="text-center text-muted-foreground">No skills found. Click &quot;Scan Now&quot; to discover skills.</p>
      )}

      {skillDetail.data && (
        <ItemDetailDialog
          open={!!selectedSkill}
          onOpenChange={(open) => !open && setSelectedSkill(null)}
          title={skillDetail.data.name}
          badges={[
            { label: skillDetail.data.account.name, variant: "outline" },
            { label: skillDetail.data.source },
          ]}
          content={skillDetail.data.content}
          meta={[
            { label: "Directory", value: skillDetail.data.dirPath },
            ...(skillDetail.data.author ? [{ label: "Author", value: skillDetail.data.author }] : []),
          ]}
        />
      )}
    </div>
  );
}
