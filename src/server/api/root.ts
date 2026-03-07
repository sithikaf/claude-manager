import { scannerRouter } from "~/server/api/routers/scanner";
import { accountsRouter } from "~/server/api/routers/accounts";
import { agentsRouter } from "~/server/api/routers/agents";
import { skillsRouter } from "~/server/api/routers/skills";
import { commandsRouter } from "~/server/api/routers/commands";
import { pluginsRouter } from "~/server/api/routers/plugins";
import { deployRouter } from "~/server/api/routers/deploy";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  scanner: scannerRouter,
  accounts: accountsRouter,
  agents: agentsRouter,
  skills: skillsRouter,
  commands: commandsRouter,
  plugins: pluginsRouter,
  deploy: deployRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
