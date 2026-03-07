import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accountsRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.account.findMany({
      include: {
        _count: { select: { agents: true, skills: true, commands: true, plugins: true } },
      },
    });
  }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.account.findUnique({
      where: { id: input.id },
      include: { agents: true, skills: true, commands: true, plugins: true },
    });
  }),
});
