import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { syncSource, syncAllSources } from "~/lib/marketplace/sync";
import { installPlugin } from "~/lib/plugins/install";

export const marketplaceRouter = createTRPCRouter({
  browse: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        search: z.string().optional(),
        source: z.string().optional(),
        sort: z.enum(["name", "stars", "downloads", "recent"]).optional(),
        page: z.number().min(1).default(1),
        pageSize: z.number().min(1).max(100).default(24),
      }).optional(),
    )
    .query(async ({ ctx, input }) => {
      const page = input?.page ?? 1;
      const pageSize = input?.pageSize ?? 24;

      const where: Record<string, unknown> = {};
      if (input?.category) where.category = input.category;
      if (input?.source) where.source = input.source;
      if (input?.search) {
        where.OR = [
          { name: { contains: input.search, mode: "insensitive" } },
          { description: { contains: input.search, mode: "insensitive" } },
          { author: { contains: input.search, mode: "insensitive" } },
        ];
      }

      const orderBy: Record<string, string> = {};
      switch (input?.sort) {
        case "stars":
          orderBy.stars = "desc";
          break;
        case "downloads":
          orderBy.downloadCount = "desc";
          break;
        case "recent":
          orderBy.fetchedAt = "desc";
          break;
        default:
          orderBy.name = "asc";
      }

      const [items, total] = await Promise.all([
        ctx.db.marketplaceItem.findMany({
          where,
          orderBy,
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        ctx.db.marketplaceItem.count({ where }),
      ]);

      return { items, total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
    }),

  getItem: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.marketplaceItem.findUnique({
        where: { id: input.id },
      });
    }),

  sources: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.marketplaceSyncStatus.findMany();
  }),

  sync: publicProcedure
    .input(z.object({ source: z.string().optional() }).optional())
    .mutation(async ({ input }) => {
      if (input?.source) {
        const count = await syncSource(input.source, true);
        return { [input.source]: count };
      }
      return await syncAllSources(true);
    }),

  installMcpServer: publicProcedure
    .input(
      z.object({
        itemId: z.string(),
        accountId: z.string(),
        envVars: z.record(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.db.marketplaceItem.findUnique({
        where: { id: input.itemId },
      });
      if (!item) throw new Error("Item not found");
      if (item.category !== "mcp-server") throw new Error("Item is not an MCP server");

      const account = await ctx.db.account.findUnique({
        where: { id: input.accountId },
      });
      if (!account) throw new Error("Account not found");

      // Build server config from installConfig or defaults
      let serverConfig: Record<string, unknown>;
      if (item.installConfig) {
        serverConfig = JSON.parse(item.installConfig) as Record<string, unknown>;
        if (input.envVars) {
          serverConfig.env = { ...(serverConfig.env as Record<string, string> ?? {}), ...input.envVars };
        }
      } else if (item.installCommand) {
        const parts = item.installCommand.split(" ");
        serverConfig = {
          command: parts[0],
          args: parts.slice(1),
          env: input.envVars ?? {},
        };
      } else {
        throw new Error("No install configuration available for this server");
      }

      // Read existing settings.local.json
      const settingsPath = path.join(account.dirPath, "settings.local.json");
      let settings: Record<string, unknown> = {};
      try {
        const raw = await fs.readFile(settingsPath, "utf-8");
        settings = JSON.parse(raw) as Record<string, unknown>;
      } catch {
        // File doesn't exist yet
      }

      // Merge in the new MCP server
      const mcpServers = (settings.mcpServers ?? {}) as Record<string, unknown>;
      mcpServers[item.name] = serverConfig;
      settings.mcpServers = mcpServers;

      await fs.writeFile(settingsPath, JSON.stringify(settings, null, 2));

      return { success: true, name: item.name, settingsPath };
    }),

  installPlugin: publicProcedure
    .input(
      z.object({
        itemId: z.string(),
        targetAccountDir: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const item = await ctx.db.marketplaceItem.findUnique({
        where: { id: input.itemId },
      });
      if (!item) throw new Error("Item not found");

      if (item.source === "local-marketplace") {
        return await installPlugin(item.name, input.targetAccountDir);
      }

      // For remote plugins, return the repo URL for manual install
      return {
        manual: true,
        repositoryUrl: item.repositoryUrl,
        message: `Clone from ${item.repositoryUrl ?? "the source repository"} into your plugins directory`,
      };
    }),
});
