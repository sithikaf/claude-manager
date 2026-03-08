"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Checkbox } from "~/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { toast } from "sonner";

type ItemType = "agent" | "skill" | "command" | "plugin";

interface DeployItem {
  id: string;
  name: string;
  type: ItemType;
  path: string; // filePath or dirPath
}

export default function DeployPage() {
  const [sourceAccount, setSourceAccount] = useState<string>("");
  const [targetAccount, setTargetAccount] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [deploying, setDeploying] = useState(false);

  const accounts = api.accounts.list.useQuery();
  const projects = api.commands.list.useQuery({ source: "project" });

  const sourceAccountData = api.accounts.getById.useQuery(
    { id: sourceAccount },
    { enabled: !!sourceAccount },
  );

  const deployAgent = api.deploy.copyAgent.useMutation();
  const deploySkill = api.deploy.copySkill.useMutation();
  const deployCommand = api.deploy.copyCommand.useMutation();
  const deployPlugin = api.deploy.copyPlugin.useMutation();

  const allItems: DeployItem[] = [];
  if (sourceAccountData.data) {
    for (const a of sourceAccountData.data.agents) {
      allItems.push({ id: a.id, name: a.name, type: "agent", path: a.filePath });
    }
    for (const s of sourceAccountData.data.skills) {
      allItems.push({ id: s.id, name: s.name, type: "skill", path: s.dirPath });
    }
    for (const c of sourceAccountData.data.commands) {
      allItems.push({ id: c.id, name: c.name, type: "command", path: c.filePath });
    }
    for (const p of sourceAccountData.data.plugins) {
      allItems.push({ id: p.id, name: p.name, type: "plugin", path: p.dirPath });
    }
  }

  const targetAccountDir = accounts.data?.find((a) => a.id === targetAccount)?.dirPath;

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAllOfType = (type: ItemType) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      const items = allItems.filter((i) => i.type === type);
      const allSelected = items.every((i) => next.has(i.id));
      for (const item of items) {
        if (allSelected) next.delete(item.id);
        else next.add(item.id);
      }
      return next;
    });
  };

  const handleDeploy = async () => {
    if (!targetAccountDir || selectedItems.size === 0) return;
    setDeploying(true);

    try {
      const items = allItems.filter((i) => selectedItems.has(i.id));
      for (const item of items) {
        switch (item.type) {
          case "agent":
            await deployAgent.mutateAsync({ filePath: item.path, targetAccountDir });
            break;
          case "skill":
            await deploySkill.mutateAsync({ dirPath: item.path, targetAccountDir });
            break;
          case "command":
            await deployCommand.mutateAsync({ filePath: item.path, targetDir: targetAccountDir });
            break;
          case "plugin":
            await deployPlugin.mutateAsync({ dirPath: item.path, targetAccountDir });
            break;
        }
      }
      toast.success(`Deployed ${items.length} items successfully`);
      setSelectedItems(new Set());
    } catch (err) {
      toast.error(`Deploy failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setDeploying(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Deploy</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Source */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">1. Source Account</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={sourceAccount} onValueChange={(v: string | null) => { setSourceAccount(v ?? ""); setSelectedItems(new Set()); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select source..." />
              </SelectTrigger>
              <SelectContent>
                {accounts.data?.map((acc) => (
                  <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Items */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">2. Select Items ({selectedItems.size})</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              {(["agent", "skill", "command", "plugin"] as ItemType[]).map((type) => {
                const items = allItems.filter((i) => i.type === type);
                if (items.length === 0) return null;
                return (
                  <div key={type} className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium capitalize">{type}s ({items.length})</span>
                      <Button size="sm" variant="ghost" onClick={() => selectAllOfType(type)}>
                        Toggle all
                      </Button>
                    </div>
                    {items.map((item) => (
                      <label
                        key={item.id}
                        className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 hover:bg-accent"
                      >
                        <Checkbox
                          checked={selectedItems.has(item.id)}
                          onCheckedChange={() => toggleItem(item.id)}
                        />
                        <span className="text-sm">{item.name}</span>
                      </label>
                    ))}
                    <Separator className="mt-2" />
                  </div>
                );
              })}
              {allItems.length === 0 && sourceAccount && (
                <p className="text-sm text-muted-foreground">No items in this account.</p>
              )}
              {!sourceAccount && (
                <p className="text-sm text-muted-foreground">Select a source account first.</p>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Target */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">3. Target Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={targetAccount} onValueChange={(v: string | null) => setTargetAccount(v ?? "")}>
              <SelectTrigger>
                <SelectValue placeholder="Select target..." />
              </SelectTrigger>
              <SelectContent>
                {accounts.data
                  ?.filter((acc) => acc.id !== sourceAccount)
                  .map((acc) => (
                    <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                  ))}
              </SelectContent>
            </Select>

            {selectedItems.size > 0 && targetAccountDir && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Preview:</h4>
                <div className="rounded-md bg-muted p-3 text-xs">
                  {allItems
                    .filter((i) => selectedItems.has(i.id))
                    .map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                        <span>{item.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <Button
              className="w-full"
              disabled={selectedItems.size === 0 || !targetAccountDir || deploying}
              onClick={handleDeploy}
            >
              {deploying
                ? "Deploying..."
                : `Deploy ${selectedItems.size} item${selectedItems.size !== 1 ? "s" : ""}`}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
