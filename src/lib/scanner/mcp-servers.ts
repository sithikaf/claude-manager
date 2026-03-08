import fs from "fs/promises";
import path from "path";

export interface McpServerInfo {
  name: string;
  type: string;
  command?: string;
  args?: string;
  url?: string;
  envVars?: string;
  filePath: string;
  config: string;
  scope: string;
}

export async function scanMcpServers(
  accountPath: string,
  scope: "account" | "plugin",
  pluginDir?: string,
): Promise<McpServerInfo[]> {
  const servers: McpServerInfo[] = [];

  if (scope === "account") {
    // Read account-level MCP servers from settings.local.json
    const settingsPath = path.join(accountPath, "settings.local.json");
    try {
      const raw = await fs.readFile(settingsPath, "utf-8");
      const settings = JSON.parse(raw) as Record<string, unknown>;
      const mcpServers = settings.mcpServers as Record<string, Record<string, unknown>> | undefined;
      if (mcpServers && typeof mcpServers === "object") {
        for (const [name, serverConfig] of Object.entries(mcpServers)) {
          const type = (serverConfig.type as string) ?? (serverConfig.url ? "http" : "stdio");
          servers.push({
            name,
            type,
            command: serverConfig.command as string | undefined,
            args: serverConfig.args ? JSON.stringify(serverConfig.args) : undefined,
            url: serverConfig.url as string | undefined,
            envVars: serverConfig.env ? JSON.stringify(serverConfig.env) : undefined,
            filePath: settingsPath,
            config: JSON.stringify(serverConfig, null, 2),
            scope: "account",
          });
        }
      }
    } catch {
      // no settings.local.json or no mcpServers key
    }
  } else if (scope === "plugin" && pluginDir) {
    // Read plugin-level MCP servers from .mcp.json
    const mcpJsonPath = path.join(pluginDir, ".mcp.json");
    try {
      const raw = await fs.readFile(mcpJsonPath, "utf-8");
      const mcpConfig = JSON.parse(raw) as Record<string, unknown>;
      // .mcp.json can have mcpServers key or be a flat map
      const mcpServers = (mcpConfig.mcpServers ?? mcpConfig) as Record<string, Record<string, unknown>>;
      if (mcpServers && typeof mcpServers === "object") {
        for (const [name, serverConfig] of Object.entries(mcpServers)) {
          if (typeof serverConfig !== "object" || serverConfig === null) continue;
          const type = (serverConfig.type as string) ?? (serverConfig.url ? "http" : "stdio");
          servers.push({
            name,
            type,
            command: serverConfig.command as string | undefined,
            args: serverConfig.args ? JSON.stringify(serverConfig.args) : undefined,
            url: serverConfig.url as string | undefined,
            envVars: serverConfig.env ? JSON.stringify(serverConfig.env) : undefined,
            filePath: mcpJsonPath,
            config: JSON.stringify(serverConfig, null, 2),
            scope: "plugin",
          });
        }
      }
    } catch {
      // no .mcp.json
    }
  }

  return servers;
}
