import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { copyAgent, copySkill, copyCommand, copyPlugin } from "~/lib/deploy";
import { runFullScan } from "~/lib/scanner";

export const deployRouter = createTRPCRouter({
  copyAgent: publicProcedure
    .input(z.object({ filePath: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ input }) => {
      const result = await copyAgent(input.filePath, input.targetAccountDir);
      await runFullScan();
      return { targetPath: result };
    }),

  copySkill: publicProcedure
    .input(z.object({ dirPath: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ input }) => {
      const result = await copySkill(input.dirPath, input.targetAccountDir);
      await runFullScan();
      return { targetPath: result };
    }),

  copyCommand: publicProcedure
    .input(z.object({ filePath: z.string(), targetDir: z.string() }))
    .mutation(async ({ input }) => {
      const result = await copyCommand(input.filePath, input.targetDir);
      await runFullScan();
      return { targetPath: result };
    }),

  copyPlugin: publicProcedure
    .input(z.object({ dirPath: z.string(), targetAccountDir: z.string() }))
    .mutation(async ({ input }) => {
      const result = await copyPlugin(input.dirPath, input.targetAccountDir);
      await runFullScan();
      return { targetPath: result };
    }),
});
