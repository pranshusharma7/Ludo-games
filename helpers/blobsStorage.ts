import { getStore } from '@netlify/blobs';
import { GameState } from '../shared/src/types';

export interface StorageResult<T> {
  data: T | null;
  etag?: string;
}

export interface SetResult {
  modified: boolean;
  etag?: string;
}

export interface SetOptions {
  onlyIfNew?: boolean;
  onlyIfMatch?: string;
}

/**
 * In-Memory fallback store providing identical strong consistency
 * and conditional write (ETag / onlyIfNew / onlyIfMatch) semantics
 * for local development and unit tests where Netlify Blobs environment is absent.
 */
class MemoryFallbackStore {
  private data = new Map<string, { value: GameState; etag: string; updatedAt: number }>();

  async getWithMetadata(key: string): Promise<StorageResult<GameState>> {
    const entry = this.data.get(key);
    if (!entry) return { data: null };
    // Return cloned object to prevent external mutation
    return {
      data: JSON.parse(JSON.stringify(entry.value)),
      etag: entry.etag
    };
  }

  async setJSON(key: string, value: GameState, options?: SetOptions): Promise<SetResult> {
    const existing = this.data.get(key);

    if (options?.onlyIfNew && existing) {
      return { modified: false };
    }

    if (options?.onlyIfMatch) {
      if (!existing || existing.etag !== options.onlyIfMatch) {
        return { modified: false };
      }
    }

    const newEtag = `etag_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    this.data.set(key, {
      value: JSON.parse(JSON.stringify(value)),
      etag: newEtag,
      updatedAt: Date.now()
    });

    return { modified: true, etag: newEtag };
  }

  async delete(key: string): Promise<void> {
    this.data.delete(key);
  }

  clear(): void {
    this.data.clear();
  }
}

const memoryFallback = new MemoryFallbackStore();

export class BlobsRoomStore {
  private storeName: string;

  constructor(storeName: string = 'ludo_rooms') {
    this.storeName = storeName;
  }

  private getNetlifyStore() {
    try {
      return getStore(this.storeName, { consistency: 'strong' });
    } catch {
      return null;
    }
  }

  /**
   * Strongly-consistent fetch with ETag metadata
   */
  async getRoom(roomCode: string): Promise<StorageResult<GameState>> {
    const store = this.getNetlifyStore();
    if (store) {
      try {
        const result = await store.getWithMetadata(roomCode, {
          consistency: 'strong',
          type: 'json'
        });
        if (!result || !result.data) {
          return { data: null };
        }
        return {
          data: result.data as GameState,
          etag: result.etag
        };
      } catch (err: any) {
        // Fallback to memory store if blobs context fails at runtime
        return memoryFallback.getWithMetadata(roomCode);
      }
    }
    return memoryFallback.getWithMetadata(roomCode);
  }

  /**
   * Strongly-consistent conditional write:
   * - onlyIfNew: true (creating new room)
   * - onlyIfMatch: etag (atomic state update)
   */
  async setRoom(
    roomCode: string,
    gameState: GameState,
    options?: SetOptions
  ): Promise<SetResult> {
    const store = this.getNetlifyStore();
    gameState.updatedAt = Date.now();
    gameState.version = (gameState.version || 0) + 1;

    if (store) {
      try {
        const setOpts: any = {
          metadata: { version: gameState.version, updatedAt: gameState.updatedAt }
        };

        if (options?.onlyIfNew) {
          setOpts.onlyIfNew = true;
        } else if (options?.onlyIfMatch) {
          setOpts.onlyIfMatch = options.onlyIfMatch;
        }

        const res = await store.setJSON(roomCode, gameState, setOpts);
        return {
          modified: res.modified,
          etag: res.etag
        };
      } catch (err: any) {
        return memoryFallback.setJSON(roomCode, gameState, options);
      }
    }
    return memoryFallback.setJSON(roomCode, gameState, options);
  }

  async deleteRoom(roomCode: string): Promise<void> {
    const store = this.getNetlifyStore();
    if (store) {
      try {
        await store.delete(roomCode);
        return;
      } catch {
        // fallback
      }
    }
    await memoryFallback.delete(roomCode);
  }

  clearMemoryFallback(): void {
    memoryFallback.clear();
  }
}

export const blobsRoomStore = new BlobsRoomStore('ludo_rooms');

