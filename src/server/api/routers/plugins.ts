import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getMarketplaceCatalog } from "~/lib/plugins/marketplace";
import { installPlugin, uninstallPlugin, copyPluginToAccount } from "~/lib/plugins/install";
import { isClaudeWorkspace } from "~/lib/workspaces";

export const pluginsRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({
      accountId: z.string().optional(),
      category: z.string().optional(),
      provider: z.enum(["claude", "codex"]).optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      return await ctx.db.plugin.findMany({
        where: {
          ...(input?.accountId ? { accountId: input.accountId } : {}),
          ...(input?.category ? { category: input.category } : {}),
          ...(input?.provider ? { account: { provider: input.provider } } : {}),
        },
        include: {
          account: true,
          _count: { select: { agents: true, skills: true, commands: true } },
        },
      });
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.plugin.findUnique({
      where: { id: input.id },
      include: { account: true, agents: true, skills: true, commands: true },
    });
  }),

  marketplace: publicProcedure.query(async ({ ctx }) => {
    const accounts = await ctx.db.account.findMany({
      where: { provider: "claude" },
    });
    const accountDirs = accounts.map((a) => a.dirPath);
    return await getMarketplaceCatalog(accountDirs);
  }),

  install: publicProcedure
    .input(z.object({ pluginName: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const account = await ctx.db.account.findFirst({
        where: { dirPath: input.targetAccountDir },
      });
      if (account?.provider !== "claude" && !isClaudeWorkspace(input.targetAccountDir)) {
        throw new Error("Plugin installation currently supports Claude homes only");
      }
      return await installPlugin(input.pluginName, input.targetAccountDir);
    }),

  uninstall: publicProcedure
    .input(z.object({ pluginName: z.string(), accountDir: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const account = await ctx.db.account.findFirst({
        where: { dirPath: input.accountDir },
      });
      if (account?.provider !== "claude" && !isClaudeWorkspace(input.accountDir)) {
        throw new Error("Plugin removal currently supports Claude homes only");
      }
      await uninstallPlugin(input.pluginName, input.accountDir);
      return { success: true };
    }),

  copyToAccount: publicProcedure
    .input(z.object({ pluginName: z.string(), sourceAccountDir: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const accounts = await ctx.db.account.findMany({
        where: { dirPath: { in: [input.sourceAccountDir, input.targetAccountDir] } },
      });
      const isClaudeSource = accounts.find((account) => account.dirPath === input.sourceAccountDir)?.provider === "claude"
        || isClaudeWorkspace(input.sourceAccountDir);
      const isClaudeTarget = accounts.find((account) => account.dirPath === input.targetAccountDir)?.provider === "claude"
        || isClaudeWorkspace(input.targetAccountDir);
      if (!isClaudeSource || !isClaudeTarget) {
        throw new Error("Plugin copy currently supports Claude homes only");
      }
      return await copyPluginToAccount(input.pluginName, input.sourceAccountDir, input.targetAccountDir);
    }),
});
