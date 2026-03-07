"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { ItemCard } from "~/components/items/item-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { ScrollArea } from "~/components/ui/scroll-area";
import { toast } from "sonner";

export default function PluginsPage() {
  const [selectedPlugin, setSelectedPlugin] = useState<string | null>(null);
  const [accountFilter, setAccountFilter] = useState<string>("all");
  const [installTarget, setInstallTarget] = useState<string>("");
  const [installPluginName, setInstallPluginName] = useState<string | null>(null);
  const [copyTarget, setCopyTarget] = useState<string>("");
  const [copyPlugin, setCopyPluginState] = useState<{ name: string; sourceDir: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const setAccount = (v: string | null) => setAccountFilter(v ?? "all");
  const setInstall = (v: string | null) => setInstallTarget(v ?? "");
  const setCopy = (v: string | null) => setCopyTarget(v ?? "");

  const accounts = api.accounts.list.useQuery();
  const plugins = api.plugins.list.useQuery({
    accountId: accountFilter !== "all" ? accountFilter : undefined,
  });
  const marketplace = api.plugins.marketplace.useQuery();
  const pluginDetail = api.plugins.getById.useQuery(
    { id: selectedPlugin! },
    { enabled: !!selectedPlugin },
  );

  const utils = api.useUtils();

  const installMutation = api.plugins.install.useMutation({
    onSuccess: () => {
      toast.success("Plugin installed successfully");
      setInstallPluginName(null);
      void utils.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const uninstallMutation = api.plugins.uninstall.useMutation({
    onSuccess: () => {
      toast.success("Plugin uninstalled");
      void utils.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const copyMutation = api.plugins.copyToAccount.useMutation({
    onSuccess: () => {
      toast.success("Plugin copied to account");
      setCopyPluginState(null);
      void utils.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const filteredMarketplace = marketplace.data?.filter((p) =>
    !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Plugins</h2>

      <Tabs defaultValue="installed">
        <TabsList>
          <TabsTrigger value="installed">
            Installed ({plugins.data?.length ?? 0})
          </TabsTrigger>
          <TabsTrigger value="marketplace">
            Marketplace ({marketplace.data?.length ?? 0})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="installed" className="space-y-4">
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
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plugins.data?.map((plugin) => (
              <Card key={plugin.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{plugin.name}</CardTitle>
                    <Badge variant="outline">{plugin.account.name}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {plugin.description && (
                    <p className="line-clamp-2 text-sm text-muted-foreground">{plugin.description}</p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {plugin.category && <Badge variant="secondary">{plugin.category}</Badge>}
                    {plugin._count.agents > 0 && <Badge variant="outline">{plugin._count.agents} agents</Badge>}
                    {plugin._count.skills > 0 && <Badge variant="outline">{plugin._count.skills} skills</Badge>}
                    {plugin._count.commands > 0 && <Badge variant="outline">{plugin._count.commands} cmds</Badge>}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button size="sm" variant="outline" onClick={() => setSelectedPlugin(plugin.id)}>
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setCopyPluginState({ name: plugin.name, sourceDir: plugin.account.dirPath })}
                    >
                      Copy to...
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (confirm(`Uninstall ${plugin.name} from ${plugin.account.name}?`)) {
                          uninstallMutation.mutate({ pluginName: plugin.name, accountDir: plugin.account.dirPath });
                        }
                      }}
                    >
                      Uninstall
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-4">
          <input
            type="text"
            placeholder="Search plugins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-sm rounded-md border bg-background px-3 py-2 text-sm"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMarketplace?.map((plugin) => (
              <Card key={plugin.name}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{plugin.name}</CardTitle>
                    {plugin.installedIn.length > 0 && (
                      <Badge variant="default">Installed</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {plugin.description && (
                    <p className="line-clamp-2 text-sm text-muted-foreground">{plugin.description}</p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {plugin.category && <Badge variant="secondary">{plugin.category}</Badge>}
                    {plugin.author && (
                      <span className="text-xs text-muted-foreground">by {plugin.author}</span>
                    )}
                  </div>
                  {plugin.installedIn.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {plugin.installedIn.map((dir) => {
                        const accName = accounts.data?.find((a) => a.dirPath === dir)?.name ?? dir;
                        return <Badge key={dir} variant="outline" className="text-xs">{accName}</Badge>;
                      })}
                    </div>
                  )}
                  <Button
                    size="sm"
                    onClick={() => setInstallPluginName(plugin.name)}
                    disabled={installMutation.isPending}
                  >
                    Install
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Plugin detail dialog */}
      {pluginDetail.data && (
        <Dialog open={!!selectedPlugin} onOpenChange={(open) => !open && setSelectedPlugin(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{pluginDetail.data.name}</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">{pluginDetail.data.description}</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline">{pluginDetail.data.account.name}</Badge>
              {pluginDetail.data.category && <Badge variant="secondary">{pluginDetail.data.category}</Badge>}
            </div>
            <ScrollArea className="max-h-[40vh]">
              <div className="space-y-2">
                {pluginDetail.data.agents.length > 0 && (
                  <div>
                    <h4 className="font-medium">Agents ({pluginDetail.data.agents.length})</h4>
                    {pluginDetail.data.agents.map((a) => (
                      <p key={a.id} className="text-sm text-muted-foreground">- {a.name}</p>
                    ))}
                  </div>
                )}
                {pluginDetail.data.skills.length > 0 && (
                  <div>
                    <h4 className="font-medium">Skills ({pluginDetail.data.skills.length})</h4>
                    {pluginDetail.data.skills.map((s) => (
                      <p key={s.id} className="text-sm text-muted-foreground">- {s.name}</p>
                    ))}
                  </div>
                )}
                {pluginDetail.data.commands.length > 0 && (
                  <div>
                    <h4 className="font-medium">Commands ({pluginDetail.data.commands.length})</h4>
                    {pluginDetail.data.commands.map((c) => (
                      <p key={c.id} className="text-sm text-muted-foreground">- {c.name}</p>
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>
            <p className="text-xs text-muted-foreground">{pluginDetail.data.dirPath}</p>
          </DialogContent>
        </Dialog>
      )}

      {/* Install dialog */}
      <Dialog open={!!installPluginName} onOpenChange={(open) => !open && setInstallPluginName(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Install {installPluginName}</DialogTitle>
          </DialogHeader>
          <Select value={installTarget} onValueChange={setInstall}>
            <SelectTrigger>
              <SelectValue placeholder="Select target account..." />
            </SelectTrigger>
            <SelectContent>
              {accounts.data?.map((acc) => (
                <SelectItem key={acc.dirPath} value={acc.dirPath}>{acc.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            disabled={!installTarget || installMutation.isPending}
            onClick={() => {
              if (installPluginName && installTarget) {
                installMutation.mutate({ pluginName: installPluginName, targetAccountDir: installTarget });
              }
            }}
          >
            {installMutation.isPending ? "Installing..." : "Install"}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Copy dialog */}
      <Dialog open={!!copyPlugin} onOpenChange={(open) => !open && setCopyPluginState(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Copy {copyPlugin?.name} to account</DialogTitle>
          </DialogHeader>
          <Select value={copyTarget} onValueChange={setCopy}>
            <SelectTrigger>
              <SelectValue placeholder="Select target account..." />
            </SelectTrigger>
            <SelectContent>
              {accounts.data
                ?.filter((acc) => acc.dirPath !== copyPlugin?.sourceDir)
                .map((acc) => (
                  <SelectItem key={acc.dirPath} value={acc.dirPath}>{acc.name}</SelectItem>
                ))}
            </SelectContent>
          </Select>
          <Button
            disabled={!copyTarget || copyMutation.isPending}
            onClick={() => {
              if (copyPlugin && copyTarget) {
                copyMutation.mutate({
                  pluginName: copyPlugin.name,
                  sourceAccountDir: copyPlugin.sourceDir,
                  targetAccountDir: copyTarget,
                });
              }
            }}
          >
            {copyMutation.isPending ? "Copying..." : "Copy"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
