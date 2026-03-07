"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface ItemCardProps {
  title: string;
  description?: string | null;
  badges?: { label: string; variant?: "default" | "secondary" | "outline" | "destructive" }[];
  meta?: { label: string; value: string }[];
  onClick?: () => void;
}

export function ItemCard({ title, description, badges, meta, onClick }: ItemCardProps) {
  return (
    <Card
      className={onClick ? "cursor-pointer transition-shadow hover:shadow-md" : ""}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">{title}</CardTitle>
          <div className="flex flex-wrap gap-1">
            {badges?.map((b, i) => (
              <Badge key={i} variant={b.variant ?? "secondary"} className="text-xs">
                {b.label}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {description && (
          <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">{description}</p>
        )}
        {meta && meta.length > 0 && (
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            {meta.map((m, i) => (
              <span key={i}>
                <span className="font-medium">{m.label}:</span> {m.value}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
