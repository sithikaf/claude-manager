"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { toast } from "sonner";
import { MarketplaceCard } from "~/components/marketplace/marketplace-card";
import { MarketplaceDetail } from "~/components/marketplace/marketplace-detail";
import { InstallDialog } from "~/components/marketplace/install-dialog";
import { MarketplaceFilters } from "~/components/marketplace/marketplace-filters";
import { SyncStatus } from "~/components/marketplace/sync-status";
import { AddCustomDialog } from "~/components/marketplace/add-custom-dialog";
import { Button } from "~/components/ui/button";
import { isClaudeWorkspace } from "~/lib/workspaces";

type SortType = "name" | "stars" | "downloads" | "recent";

export default function MarketplacePage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("all");
  const [sort, setSort] = useState<SortType>("name");
  const [page, setPage] = useState(1);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [installItemId, setInstallItemId] = useState<string | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showAddCustom, setShowAddCustom] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [category, source, sort]);

  const utils = api.useUtils();

  const browse = api.marketplace.browse.useQuery({
    category: category !== "all" ? category : undefined,
    search: debouncedSearch || undefined,
    source: source !== "all" ? source : undefined,
    sort,
    page,
    pageSize: 24,
  });

  const sources = api.marketplace.sources.useQuery();
  const accounts = api.accounts.list.useQuery();
  const claudeAccounts = (accounts.data ?? []).filter((account) => isClaudeWorkspace(account.dirPath));

  const selectedItem = api.marketplace.getItem.useQuery(
    { id: selectedItemId! },
    { enabled: !!selectedItemId },
  );

  const installItem = api.marketplace.getItem.useQuery(
    { id: installItemId! },
    { enabled: !!installItemId },
  );

  const syncMutation = api.marketplace.sync.useMutation({
    onSuccess: (data) => {
      const total = Object.values(data).reduce((sum, n) => sum + (n > 0 ? n : 0), 0);
      toast.success(`Synced ${total.toLocaleString()} items from ${Object.keys(data).length} sources`);
      void utils.marketplace.invalidate();
    },
    onError: (err) => toast.error(`Sync failed: ${err.message}`),
  });

  const installMcpMutation = api.marketplace.installMcpServer.useMutation({
    onSuccess: (data) => {
      toast.success(`Installed ${data.name} to ${data.settingsPath}`);
      setInstallItemId(null);
      void utils.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const installPluginMutation = api.marketplace.installPlugin.useMutation({
    onSuccess: (data) => {
      if (typeof data === "object" && data && "manual" in data) {
        toast.info((data as { message: string }).message);
      } else {
        toast.success("Plugin installed successfully");
      }
      setInstallItemId(null);
      void utils.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const addCustomMutation = api.marketplace.addCustomItem.useMutation({
    onSuccess: () => {
      toast.success("Custom item added to marketplace");
      setShowAddCustom(false);
      void utils.marketplace.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const totalItems = browse.data?.total ?? 0;
  const items = browse.data?.items ?? [];
  const totalPages = browse.data?.totalPages ?? 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Marketplace</h2>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => setShowAddCustom(true)}>
            + Add Custom
          </Button>
          <SyncStatus
          sources={(sources.data ?? []).map((s) => ({
            ...s,
            error: s.error ?? null,
          }))}
          totalItems={totalItems}
          onRefresh={() => syncMutation.mutate({})}
          isSyncing={syncMutation.isPending}
        />
        </div>
      </div>

      <Tabs value={category} onValueChange={setCategory}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="skill">Skills</TabsTrigger>
          <TabsTrigger value="agent">Agents</TabsTrigger>
          <TabsTrigger value="mcp-server">MCP Servers</TabsTrigger>
          <TabsTrigger value="plugin">Plugins</TabsTrigger>
        </TabsList>
      </Tabs>

      <MarketplaceFilters
        search={search}
        onSearchChange={setSearch}
        source={source}
        onSourceChange={setSource}
        sort={sort}
        onSortChange={(v) => setSort(v as SortType)}
        sources={(sources.data ?? []).map((s) => ({ id: s.id, itemCount: s.itemCount }))}
      />

      {browse.isLoading && (
        <div className="py-12 text-center text-muted-foreground">Loading...</div>
      )}

      {!browse.isLoading && items.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            {totalItems === 0 && !debouncedSearch
              ? "No items yet. Click Refresh to sync from all sources."
              : "No items match your filters."}
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MarketplaceCard
            key={item.id}
            name={item.name}
            description={item.description}
            category={item.category}
            source={item.source}
            author={item.author}
            stars={item.stars}
            downloadCount={item.downloadCount}
            transportType={item.transportType}
            tags={item.tags}
            onDetails={() => setSelectedItemId(item.id)}
            onInstall={() => setInstallItemId(item.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            className="rounded px-3 py-1 text-sm text-muted-foreground hover:bg-accent disabled:opacity-50"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <button
            className="rounded px-3 py-1 text-sm text-muted-foreground hover:bg-accent disabled:opacity-50"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}

      {/* Detail Dialog */}
      {selectedItem.data && (
        <MarketplaceDetail
          open={!!selectedItemId}
          onOpenChange={(open) => !open && setSelectedItemId(null)}
          item={selectedItem.data}
          onInstall={() => {
            setInstallItemId(selectedItem.data!.id);
            setSelectedItemId(null);
          }}
        />
      )}

      {/* Install Dialog */}
      {installItem.data && (
        <InstallDialog
          open={!!installItemId}
          onOpenChange={(open) => !open && setInstallItemId(null)}
          item={installItem.data}
          accounts={claudeAccounts}
          onInstallMcp={(itemId, accountId, envVars) =>
            installMcpMutation.mutate({ itemId, accountId, envVars })
          }
          onInstallPlugin={(itemId, targetAccountDir) =>
            installPluginMutation.mutate({ itemId, targetAccountDir })
          }
          isPending={installMcpMutation.isPending || installPluginMutation.isPending}
        />
      )}
      {/* Add Custom Dialog */}
      <AddCustomDialog
        open={showAddCustom}
        onOpenChange={setShowAddCustom}
        onSubmit={(data) => addCustomMutation.mutate(data)}
        isPending={addCustomMutation.isPending}
      />
    </div>
  );
}
