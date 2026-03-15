"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { getWorkspaceProviderLabel, parseSupportedProviders } from "~/lib/workspaces";

interface MarketplaceDetailProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    id: string;
    name: string;
    description?: string | null;
    category: string;
    source: string;
    author?: string | null;
    version?: string | null;
    repositoryUrl?: string | null;
    homepage?: string | null;
    stars?: number | null;
    downloadCount?: number | null;
    transportType?: string | null;
    packageName?: string | null;
    installCommand?: string | null;
    installConfig?: string | null;
    tags?: string | null;
    supportedProviders?: string | null;
  };
  onInstall: () => void;
}

export function MarketplaceDetail({ open, onOpenChange, item, onInstall }: MarketplaceDetailProps) {
  const parsedTags = item.tags ? (JSON.parse(item.tags) as string[]) : [];
  const providers = parseSupportedProviders(item.supportedProviders);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap gap-1">
          <Badge>{item.category}</Badge>
          <Badge variant="outline">{item.source}</Badge>
          {providers.map((provider) => (
            <Badge key={provider} variant="secondary">{getWorkspaceProviderLabel(provider)}</Badge>
          ))}
          {item.version && <Badge variant="secondary">v{item.version}</Badge>}
          {item.transportType && <Badge variant="outline">{item.transportType}</Badge>}
          {parsedTags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>

        <ScrollArea className="max-h-[50vh]">
          <div className="space-y-4">
            {item.description && (
              <p className="text-sm text-muted-foreground">{item.description}</p>
            )}

            <div className="space-y-2 text-sm">
              {item.author && (
                <div><span className="font-medium">Author:</span> {item.author}</div>
              )}
              {item.packageName && (
                <div><span className="font-medium">Package:</span> {item.packageName}</div>
              )}
              {item.stars != null && item.stars > 0 && (
                <div><span className="font-medium">Stars:</span> {item.stars.toLocaleString()}</div>
              )}
              {item.downloadCount != null && item.downloadCount > 0 && (
                <div><span className="font-medium">Downloads:</span> {item.downloadCount.toLocaleString()}</div>
              )}
              {item.repositoryUrl && (
                <div>
                  <span className="font-medium">Repository:</span>{" "}
                  <a
                    href={item.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    {item.repositoryUrl}
                  </a>
                </div>
              )}
              {item.homepage && (
                <div>
                  <span className="font-medium">Homepage:</span>{" "}
                  <a
                    href={item.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    {item.homepage}
                  </a>
                </div>
              )}
            </div>

            {item.installCommand && (
              <div>
                <span className="text-sm font-medium">Install command:</span>
                <pre className="mt-1 rounded-md bg-muted p-3 text-sm">{item.installCommand}</pre>
              </div>
            )}

            {item.installConfig && (
              <div>
                <span className="text-sm font-medium">Configuration:</span>
                <pre className="mt-1 rounded-md bg-muted p-3 text-sm">
                  {JSON.stringify(JSON.parse(item.installConfig), null, 2)}
                </pre>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={onInstall}>Install</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
