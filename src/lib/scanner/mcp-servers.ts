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
  includeGlobal = true,
): Promise<McpServerInfo[]> {
  const servers: McpServerInfo[] = [];

  if (scope === "account") {
    // Read MCP servers from multiple config files
    const configFiles = [
      path.join(accountPath, "settings.local.json"),
      path.join(accountPath, "settings.json"),
      path.join(accountPath, ".mcp.json"),
    ];

    // Also check the global ~/.mcp.json
    if (includeGlobal) {
      const homeDir = process.env.HOME ?? "/home/fernando-server";
      const globalMcpPath = path.join(homeDir, ".mcp.json");
      if (!configFiles.includes(globalMcpPath)) {
        configFiles.push(globalMcpPath);
      }
    }

    const seen = new Set<string>();
    for (const configPath of configFiles) {
      try {
        const raw = await fs.readFile(configPath, "utf-8");
        const parsed = JSON.parse(raw) as Record<string, unknown>;
        const mcpServers = (parsed.mcpServers ?? parsed) as Record<string, Record<string, unknown>>;
        if (mcpServers && typeof mcpServers === "object") {
          for (const [name, serverConfig] of Object.entries(mcpServers)) {
            if (typeof serverConfig !== "object" || serverConfig === null) continue;
            if (seen.has(name)) continue;
            seen.add(name);
            const type = (serverConfig.type as string) ?? (serverConfig.url ? "http" : "stdio");
            servers.push({
              name,
              type,
              command: serverConfig.command as string | undefined,
              args: serverConfig.args ? JSON.stringify(serverConfig.args) : undefined,
              url: serverConfig.url as string | undefined,
              envVars: serverConfig.env ? JSON.stringify(serverConfig.env) : undefined,
              filePath: configPath,
              config: JSON.stringify(serverConfig, null, 2),
              scope: "account",
            });
          }
        }
      } catch {
        // file doesn't exist or isn't valid JSON
      }
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
