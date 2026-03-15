import { db } from "~/server/db";
import { scanAccounts } from "./accounts";
import { scanProjects } from "./projects";
import { scanAgents } from "./agents";
import { scanSkills } from "./skills";
import { scanCommands } from "./commands";
import { scanPlugins } from "./plugins";
import { scanMcpServers } from "./mcp-servers";
import { scanAccountInstructions, scanProjectInstructions } from "./instructions";

export async function runFullScan() {
  const accounts = await scanAccounts();
  const projects = await scanProjects();

  // Clear stale data
  await db.mcpServer.deleteMany();
  await db.agent.deleteMany();
  await db.skill.deleteMany();
  await db.command.deleteMany();
  await db.plugin.deleteMany();
  await db.instruction.deleteMany();
  await db.project.deleteMany();
  await db.account.deleteMany();

  let totalItems = 0;

  // Upsert accounts
  let firstAccount = true;
  for (const acc of accounts) {
    const account = await db.account.create({
      data: {
        name: acc.name,
        dirPath: acc.dirPath,
        provider: acc.provider,
        displayName: acc.displayName,
        email: acc.email,
      },
    });

    // Scan account-level agents, skills, commands
    const agents = await scanAgents(acc.dirPath, "account");
    for (const agent of agents) {
      await db.agent.create({
        data: {
          name: agent.name,
          description: agent.description,
          tools: agent.tools,
          model: agent.model,
          color: agent.color,
          filePath: agent.filePath,
          content: agent.content,
          source: "account",
          accountId: account.id,
        },
      });
      totalItems++;
    }

    const skills = await scanSkills(acc.dirPath, "account");
    for (const skill of skills) {
      await db.skill.create({
        data: {
          name: skill.name,
          description: skill.description,
          author: skill.author,
          version: skill.version,
          dirPath: skill.dirPath,
          content: skill.content,
          source: "account",
          hasExamples: skill.hasExamples,
          hasScripts: skill.hasScripts,
          accountId: account.id,
        },
      });
      totalItems++;
    }

    const commands = await scanCommands(acc.dirPath, "account");
    for (const cmd of commands) {
      await db.command.create({
        data: {
          name: cmd.name,
          description: cmd.description,
          filePath: cmd.filePath,
          content: cmd.content,
          source: "account",
          accountId: account.id,
        },
      });
      totalItems++;
    }

    const instructions = await scanAccountInstructions(acc.dirPath, acc.provider);
    for (const instruction of instructions) {
      await db.instruction.create({
        data: {
          name: instruction.name,
          kind: instruction.kind,
          filePath: instruction.filePath,
          content: instruction.content,
          accountId: account.id,
        },
      });
      totalItems++;
    }

    // Scan account-level MCP servers (include global ~/.mcp.json only for first account)
    const mcpServers = await scanMcpServers(acc.dirPath, "account", undefined, firstAccount);
    firstAccount = false;
    for (const mcp of mcpServers) {
      await db.mcpServer.create({
        data: {
          name: mcp.name,
          type: mcp.type,
          command: mcp.command,
          args: mcp.args,
          url: mcp.url,
          envVars: mcp.envVars,
          scope: "account",
          filePath: mcp.filePath,
          config: mcp.config,
          accountId: account.id,
        },
      });
      totalItems++;
    }

    // Scan plugins
    const plugins = await scanPlugins(acc.dirPath);
    for (const plug of plugins) {
      const plugin = await db.plugin.create({
        data: {
          name: plug.name,
          description: plug.description,
          author: plug.author,
          category: plug.category,
          dirPath: plug.dirPath,
          accountId: account.id,
        },
      });
      totalItems++;

      for (const agent of plug.agents) {
        await db.agent.create({
          data: {
            name: agent.name,
            description: agent.description,
            tools: agent.tools,
            model: agent.model,
            color: agent.color,
            filePath: agent.filePath,
            content: agent.content,
            source: "plugin",
            accountId: account.id,
            pluginId: plugin.id,
          },
        });
        totalItems++;
      }

      for (const skill of plug.skills) {
        await db.skill.create({
          data: {
            name: skill.name,
            description: skill.description,
            author: skill.author,
            version: skill.version,
            dirPath: skill.dirPath,
            content: skill.content,
            source: "plugin",
            hasExamples: skill.hasExamples,
            hasScripts: skill.hasScripts,
            accountId: account.id,
            pluginId: plugin.id,
          },
        });
        totalItems++;
      }

      for (const cmd of plug.commands) {
        await db.command.create({
          data: {
            name: cmd.name,
            description: cmd.description,
            filePath: cmd.filePath,
            content: cmd.content,
            source: "plugin",
            accountId: account.id,
            pluginId: plugin.id,
          },
        });
        totalItems++;
      }

      // Scan plugin-level MCP servers
      const pluginMcps = await scanMcpServers(acc.dirPath, "plugin", plug.dirPath);
      for (const mcp of pluginMcps) {
        await db.mcpServer.create({
          data: {
            name: mcp.name,
            type: mcp.type,
            command: mcp.command,
            args: mcp.args,
            url: mcp.url,
            envVars: mcp.envVars,
            scope: "plugin",
            filePath: mcp.filePath,
            config: mcp.config,
            accountId: account.id,
            pluginId: plugin.id,
          },
        });
        totalItems++;
      }
    }
  }

  // Upsert projects and their commands
  for (const proj of projects) {
    const project = await db.project.create({
      data: { name: proj.name, dirPath: proj.dirPath, provider: proj.provider },
    });

    const commands = await scanCommands(proj.dirPath, "project");
    for (const cmd of commands) {
      await db.command.create({
        data: {
          name: cmd.name,
          description: cmd.description,
          filePath: cmd.filePath,
          content: cmd.content,
          source: "project",
          projectId: project.id,
        },
      });
      totalItems++;
    }

    const instructions = await scanProjectInstructions(proj.dirPath, proj.provider);
    for (const instruction of instructions) {
      await db.instruction.create({
        data: {
          name: instruction.name,
          kind: instruction.kind,
          filePath: instruction.filePath,
          content: instruction.content,
          projectId: project.id,
        },
      });
      totalItems++;
    }
  }

  // Update scan status
  await db.scanStatus.upsert({
    where: { id: "singleton" },
    create: { id: "singleton", lastScan: new Date(), itemCount: totalItems },
    update: { lastScan: new Date(), itemCount: totalItems },
  });

  return { accounts: accounts.length, projects: projects.length, totalItems };
}
