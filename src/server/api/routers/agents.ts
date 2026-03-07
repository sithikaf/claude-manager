import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const agentsRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ accountId: z.string().optional(), source: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      return await ctx.db.agent.findMany({
        where: {
          ...(input?.accountId ? { accountId: input.accountId } : {}),
          ...(input?.source ? { source: input.source } : {}),
        },
        include: { account: true, plugin: true },
      });
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.agent.findUnique({
      where: { id: input.id },
      include: { account: true, plugin: true },
    });
  }),
});
