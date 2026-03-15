import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const instructionsRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        accountId: z.string().optional(),
        projectId: z.string().optional(),
        kind: z.enum(["rule", "project-instruction"]).optional(),
        provider: z.enum(["claude", "codex"]).optional(),
      }).optional(),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.instruction.findMany({
        where: {
          ...(input?.accountId ? { accountId: input.accountId } : {}),
          ...(input?.projectId ? { projectId: input.projectId } : {}),
          ...(input?.kind ? { kind: input.kind } : {}),
          ...(input?.provider
            ? {
                OR: [
                  { account: { provider: input.provider } },
                  { project: { provider: input.provider } },
                ],
              }
            : {}),
        },
        include: {
          account: true,
          project: true,
        },
      });
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.instruction.findUnique({
        where: { id: input.id },
        include: {
          account: true,
          project: true,
        },
      });
    }),
});
