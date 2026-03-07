import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { runFullScan } from "~/lib/scanner";

export const scannerRouter = createTRPCRouter({
  scan: publicProcedure.mutation(async () => {
    return await runFullScan();
  }),

  status: publicProcedure.query(async ({ ctx }) => {
    const status = await ctx.db.scanStatus.findUnique({ where: { id: "singleton" } });
    return status;
  }),
});
