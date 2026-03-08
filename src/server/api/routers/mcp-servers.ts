import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mcpServersRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ accountId: z.string().optional(), scope: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      return await ctx.db.mcpServer.findMany({
        where: {
          ...(input?.accountId ? { accountId: input.accountId } : {}),
          ...(input?.scope ? { scope: input.scope } : {}),
        },
        include: { account: true, plugin: true },
      });
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.mcpServer.findUnique({
      where: { id: input.id },
      include: { account: true, plugin: true },
    });
  }),
});
