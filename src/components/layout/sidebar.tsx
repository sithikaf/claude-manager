"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import { toast } from "sonner";

const navItems = [
  { href: "/", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/accounts", label: "Workspaces", icon: "Users" },
  { href: "/agents", label: "Agents", icon: "Bot" },
  { href: "/skills", label: "Skills", icon: "Zap" },
  { href: "/commands", label: "Commands", icon: "Terminal" },
  { href: "/plugins", label: "Plugins", icon: "Puzzle" },
  { href: "/mcp-servers", label: "MCP Servers", icon: "Server" },
  { href: "/marketplace", label: "Marketplace", icon: "Store" },
  { href: "/deploy", label: "Deploy", icon: "Rocket" },
];

const icons: Record<string, string> = {
  LayoutDashboard: "DB",
  Users: "WS",
  Bot: "AG",
  Zap: "SK",
  Terminal: "CM",
  Puzzle: "PL",
  Server: "MP",
  Store: "MK",
  Rocket: "DP",
};

export function Sidebar() {
  const pathname = usePathname();
  const utils = api.useUtils();
  const scanMutation = api.scanner.scan.useMutation({
    onSuccess: (data) => {
      toast.success(`Scan complete: ${data.totalItems} items found across ${data.accounts} workspaces and ${data.projects} projects`);
      void utils.invalidate();
    },
    onError: (err) => {
      toast.error(`Scan failed: ${err.message}`);
    },
  });

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="border-b p-4">
        <h1 className="text-lg font-bold">Claude + Codex Manager</h1>
        <p className="text-xs text-muted-foreground">Workspaces, skills, commands, and MCP</p>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <span>{icons[item.icon]}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="border-t p-3">
        <Button
          className="w-full"
          onClick={() => scanMutation.mutate()}
          disabled={scanMutation.isPending}
        >
          {scanMutation.isPending ? "Scanning..." : "Scan Now"}
        </Button>
      </div>
    </aside>
  );
}
