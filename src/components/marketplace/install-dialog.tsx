"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Input } from "~/components/ui/input";
import { getWorkspaceDisplayName, parseSupportedProviders } from "~/lib/workspaces";

interface InstallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    id: string;
    name: string;
    category: string;
    installConfig?: string | null;
    installCommand?: string | null;
    repositoryUrl?: string | null;
    supportedProviders?: string | null;
  };
  provider: "claude" | "codex";
  accounts: { id: string; name: string; dirPath: string; displayName?: string | null }[];
  onInstallMcp: (itemId: string, accountId: string, envVars: Record<string, string>) => void;
  onInstallPlugin: (itemId: string, targetAccountDir: string) => void;
  isPending: boolean;
}

export function InstallDialog({
  open,
  onOpenChange,
  item,
  provider,
  accounts,
  onInstallMcp,
  onInstallPlugin,
  isPending,
}: InstallDialogProps) {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [envVars, setEnvVars] = useState<Record<string, string>>({});

  const isMcp = item.category === "mcp-server";
  const supportsSelectedProvider = parseSupportedProviders(item.supportedProviders).includes(provider);
  const canAutoInstall =
    supportsSelectedProvider &&
    provider === "claude" &&
    (isMcp || item.category === "plugin");

  // Parse env template from installConfig
  const envTemplate: Record<string, string> = {};
  if (isMcp && item.installConfig) {
    try {
      const config = JSON.parse(item.installConfig) as Record<string, unknown>;
      const env = config.env as Record<string, string> | undefined;
      if (env) {
        for (const [key, val] of Object.entries(env)) {
          envTemplate[key] = val;
        }
      }
    } catch {
      // ignore parse errors
    }
  }

  const handleInstall = () => {
    if (!canAutoInstall) return;
    if (!selectedAccount) return;
    if (isMcp) {
      const account = accounts.find((a) => a.id === selectedAccount);
      if (account) onInstallMcp(item.id, account.id, envVars);
    } else {
      const account = accounts.find((a) => a.id === selectedAccount);
      if (account) onInstallPlugin(item.id, account.dirPath);
    }
  };

  const hasNoInstallPath = !canAutoInstall;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install {item.name}</DialogTitle>
        </DialogHeader>

        {hasNoInstallPath ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {!supportsSelectedProvider
                ? `This ${item.category} is not marked as compatible with ${provider}.`
                : `This ${item.category} can be installed manually from its repository:`}
            </p>
            {item.repositoryUrl && (
              <a
                href={item.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md bg-muted p-3 text-sm text-primary underline"
              >
                {item.repositoryUrl}
              </a>
            )}
            {item.installCommand && (
              <pre className="rounded-md bg-muted p-3 text-sm">{item.installCommand}</pre>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <Select value={selectedAccount} onValueChange={(v) => setSelectedAccount(v ?? "")}>
              <SelectTrigger>
                <SelectValue placeholder="Select target Claude account..." />
              </SelectTrigger>
              <SelectContent>
                {accounts.map((acc) => (
                  <SelectItem key={acc.id} value={acc.id}>
                    {getWorkspaceDisplayName(acc.name, acc.displayName)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {isMcp && Object.keys(envTemplate).length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Environment Variables</p>
                {Object.entries(envTemplate).map(([key, defaultVal]) => (
                  <div key={key} className="flex items-center gap-2">
                    <label className="w-40 shrink-0 text-sm font-mono">{key}</label>
                    <Input
                      placeholder={defaultVal || `Enter ${key}...`}
                      value={envVars[key] ?? ""}
                      onChange={(e) =>
                        setEnvVars((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                    />
                  </div>
                ))}
              </div>
            )}

            <Button
              className="w-full"
              disabled={!selectedAccount || isPending}
              onClick={handleInstall}
            >
              {isPending ? "Installing..." : "Install"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
