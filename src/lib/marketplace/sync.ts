import { db } from "~/server/db";
import { allFetchers } from "./sources";
import type { MarketplaceItemInput } from "./types";

const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export async function syncSource(
  sourceName: string,
  force = false,
): Promise<number> {
  const fetcher = allFetchers.find((f) => f.source === sourceName);
  if (!fetcher) throw new Error(`Unknown source: ${sourceName}`);

  // Check cache
  if (!force) {
    const status = await db.marketplaceSyncStatus.findUnique({
      where: { id: sourceName },
    });
    if (
      status &&
      status.status !== "error" &&
      Date.now() - status.lastSync.getTime() < CACHE_DURATION_MS
    ) {
      return status.itemCount;
    }
  }

  // Mark as syncing
  await db.marketplaceSyncStatus.upsert({
    where: { id: sourceName },
    create: { id: sourceName, status: "syncing" },
    update: { status: "syncing", error: null },
  });

  try {
    const items = await fetcher.fetch();
    const externalIds = new Set<string>();

    // Upsert all items
    for (const item of items) {
      externalIds.add(item.externalId);
      await upsertItem(item);
    }

    // Delete stale items from this source
    await db.marketplaceItem.deleteMany({
      where: {
        source: sourceName,
        externalId: { notIn: Array.from(externalIds) },
      },
    });

    // Update sync status
    await db.marketplaceSyncStatus.upsert({
      where: { id: sourceName },
      create: {
        id: sourceName,
        lastSync: new Date(),
        itemCount: items.length,
        status: "idle",
      },
      update: {
        lastSync: new Date(),
        itemCount: items.length,
        status: "idle",
        error: null,
      },
    });

    return items.length;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    await db.marketplaceSyncStatus.upsert({
      where: { id: sourceName },
      create: { id: sourceName, status: "error", error: message },
      update: { status: "error", error: message },
    });
    throw err;
  }
}

export async function syncAllSources(
  force = false,
): Promise<Record<string, number>> {
  const results: Record<string, number> = {};

  for (const fetcher of allFetchers) {
    try {
      results[fetcher.source] = await syncSource(fetcher.source, force);
    } catch {
      results[fetcher.source] = -1;
    }
  }

  return results;
}

async function upsertItem(item: MarketplaceItemInput) {
  const data = {
    externalId: item.externalId,
    category: item.category,
    source: item.source,
    name: item.name,
    description: item.description ?? null,
    author: item.author ?? null,
    version: item.version ?? null,
    tags: item.tags ? JSON.stringify(item.tags) : null,
    repositoryUrl: item.repositoryUrl ?? null,
    homepage: item.homepage ?? null,
    downloadCount: item.downloadCount ?? null,
    stars: item.stars ?? null,
    transportType: item.transportType ?? null,
    packageName: item.packageName ?? null,
    installCommand: item.installCommand ?? null,
    installConfig: item.installConfig ? JSON.stringify(item.installConfig) : null,
    rawData: item.rawData ? JSON.stringify(item.rawData) : null,
    fetchedAt: new Date(),
  };

  await db.marketplaceItem.upsert({
    where: {
      source_externalId: {
        source: item.source,
        externalId: item.externalId,
      },
    },
    create: data,
    update: data,
  });
}
