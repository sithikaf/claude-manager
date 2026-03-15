import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const accountsRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ provider: z.enum(["claude", "codex"]).optional() }).optional())
    .query(async ({ ctx, input }) => {
    return await ctx.db.account.findMany({
      where: {
        ...(input?.provider ? { provider: input.provider } : {}),
      },
      include: {
        _count: { select: { agents: true, skills: true, commands: true, plugins: true, instructions: true } },
      },
    });
    }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.db.account.findUnique({
      where: { id: input.id },
      include: { agents: true, skills: true, commands: true, plugins: true, instructions: true },
    });
  }),
});
