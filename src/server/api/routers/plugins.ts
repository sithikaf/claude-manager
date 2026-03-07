import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getMarketplaceCatalog } from "~/lib/plugins/marketplace";
import { installPlugin, uninstallPlugin, copyPluginToAccount } from "~/lib/plugins/install";

export const pluginsRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ accountId: z.string().optional(), category: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      return await ctx.db.plugin.findMany({
        where: {
          ...(input?.accountId ? { accountId: input.accountId } : {}),
          ...(input?.category ? { category: input.category } : {}),
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
    const accounts = await ctx.db.account.findMany();
    const accountDirs = accounts.map((a) => a.dirPath);
    return await getMarketplaceCatalog(accountDirs);
  }),

  install: publicProcedure
    .input(z.object({ pluginName: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ input }) => {
      return await installPlugin(input.pluginName, input.targetAccountDir);
    }),

  uninstall: publicProcedure
    .input(z.object({ pluginName: z.string(), accountDir: z.string() }))
    .mutation(async ({ input }) => {
      await uninstallPlugin(input.pluginName, input.accountDir);
      return { success: true };
    }),

  copyToAccount: publicProcedure
    .input(z.object({ pluginName: z.string(), sourceAccountDir: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ input }) => {
      return await copyPluginToAccount(input.pluginName, input.sourceAccountDir, input.targetAccountDir);
    }),
});
