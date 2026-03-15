export type WorkspaceProvider = "claude" | "codex" | "unknown";
export type SupportedProvider = Exclude<WorkspaceProvider, "unknown">;
export const SUPPORTED_PROVIDERS: SupportedProvider[] = ["claude", "codex"];

export function getWorkspaceProvider(dirPath: string): WorkspaceProvider {
  const normalized = dirPath.replace(/\\/g, "/").toLowerCase();
  const segments = normalized.split("/").filter(Boolean);
  const lastSegment = segments.length > 0 ? segments[segments.length - 1]! : "";

  if (lastSegment === ".codex") return "codex";
  if (lastSegment.startsWith(".claude")) return "claude";

  if (normalized.includes("/.codex/")) return "codex";
  if (normalized.includes("/.claude/")) return "claude";

  return "unknown";
}

export function isClaudeWorkspace(dirPath: string) {
  return getWorkspaceProvider(dirPath) === "claude";
}

export function isCodexWorkspace(dirPath: string) {
  return getWorkspaceProvider(dirPath) === "codex";
}

export function getWorkspaceProviderLabel(dirPath: string) {
  const provider = dirPath === "claude" || dirPath === "codex"
    ? dirPath
    : getWorkspaceProvider(dirPath);
  if (provider === "claude") return "Claude";
  if (provider === "codex") return "Codex";
  return "Unknown";
}

export function getWorkspaceDisplayName(name: string, displayName?: string | null) {
  return displayName?.trim() || name;
}

export function parseSupportedProviders(
  raw: string | null | undefined,
): SupportedProvider[] {
  if (!raw) return ["claude"];

  try {
    const parsed = JSON.parse(raw) as string[];
    const providers = parsed.filter(
      (value): value is SupportedProvider =>
        value === "claude" || value === "codex",
    );
    return providers.length > 0 ? providers : ["claude"];
  } catch {
    return ["claude"];
  }
}

export function stringifySupportedProviders(
  providers: SupportedProvider[],
) {
  return JSON.stringify(
    providers.filter(
      (provider, index, all) =>
        SUPPORTED_PROVIDERS.includes(provider) && all.indexOf(provider) === index,
    ),
  );
}
