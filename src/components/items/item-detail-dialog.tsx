"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Badge } from "~/components/ui/badge";
import { ScrollArea } from "~/components/ui/scroll-area";

interface ItemDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  badges?: { label: string; variant?: "default" | "secondary" | "outline" | "destructive" }[];
  content: string;
  meta?: { label: string; value: string }[];
}

export function ItemDetailDialog({ open, onOpenChange, title, badges, content, meta }: ItemDetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {title}
            {badges?.map((b, i) => (
              <Badge key={i} variant={b.variant ?? "secondary"} className="text-xs">
                {b.label}
              </Badge>
            ))}
          </DialogTitle>
        </DialogHeader>
        {meta && meta.length > 0 && (
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {meta.map((m, i) => (
              <span key={i}>
                <span className="font-medium">{m.label}:</span> {m.value}
              </span>
            ))}
          </div>
        )}
        <ScrollArea className="max-h-[60vh]">
          <pre className="whitespace-pre-wrap rounded-md bg-muted p-4 text-sm">{content}</pre>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
