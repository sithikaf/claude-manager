import fs from "fs/promises";
import path from "path";
import { type WorkspaceProvider } from "~/lib/workspaces";

export interface InstructionInfo {
  name: string;
  kind: "rule" | "project-instruction";
  filePath: string;
  content: string;
}

export async function scanAccountInstructions(
  accountPath: string,
  provider: WorkspaceProvider,
): Promise<InstructionInfo[]> {
  if (provider !== "codex") return [];

  const rulesDir = path.join(accountPath, "rules");
  const instructions: InstructionInfo[] = [];

  try {
    const entries = await fs.readdir(rulesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".rules")) continue;
      const filePath = path.join(rulesDir, entry.name);
      const content = await fs.readFile(filePath, "utf-8");
      instructions.push({
        name: path.basename(entry.name, ".rules"),
        kind: "rule",
        filePath,
        content,
      });
    }
  } catch {
    // no rules dir
  }

  return instructions;
}

export async function scanProjectInstructions(
  projectToolDir: string,
  provider: WorkspaceProvider,
): Promise<InstructionInfo[]> {
  if (provider !== "codex") return [];

  const agentsPath = path.join(path.dirname(projectToolDir), "AGENTS.md");

  try {
    const content = await fs.readFile(agentsPath, "utf-8");
    return [
      {
        name: "AGENTS",
        kind: "project-instruction",
        filePath: agentsPath,
        content,
      },
    ];
  } catch {
    return [];
  }
}
