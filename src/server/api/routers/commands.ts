import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const commandsRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        accountId: z.string().optional(),
        projectId: z.string().optional(),
        source: z.string().optional(),
      }).optional(),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.command.findMany({
        where: {
          ...(input?.accountId ? { accountId: input.accountId } : {}),
          ...(input?.projectId ? { projectId: input.projectId } : {}),
          ...(input?.source ? { source: input.source } : {}),
        },
        include: { account: true, project: true, plugin: true },
      });
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.command.findUnique({
      where: { id: input.id },
      include: { account: true, project: true, plugin: true },
    });
  }),
});
