"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = exports.RedisService = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
class RedisService {
    client = null;
    memoryStore = new Map();
    setStore = new Map();
    isConnected = false;
    constructor() {
        const redisUrl = process.env.REDIS_URL;
        if (redisUrl) {
            try {
                this.client = new ioredis_1.default(redisUrl, {
                    maxRetriesPerRequest: 1,
                    lazyConnect: true,
                    connectTimeout: 2000
                });
                this.client.connect()
                    .then(() => {
                    this.isConnected = true;
                    console.log('✅ Connected to Redis at', redisUrl);
                })
                    .catch(err => {
                    console.warn('⚠️ Redis connection failed, falling back to in-memory store:', err.message);
                    this.client = null;
                });
            }
            catch (err) {
                console.warn('⚠️ Could not initialize Redis client, using in-memory store:', err.message);
                this.client = null;
            }
        }
        else {
            console.log('ℹ️ No REDIS_URL provided. Running with high-performance in-memory room store.');
        }
    }
    async get(key) {
        if (this.client && this.isConnected) {
            try {
                return await this.client.get(key);
            }
            catch (e) {
                // Fallback to memory
            }
        }
        const item = this.memoryStore.get(key);
        if (!item)
            return null;
        if (item.expiresAt && Date.now() > item.expiresAt) {
            this.memoryStore.delete(key);
            return null;
        }
        return item.value;
    }
    async set(key, value, ttlSeconds) {
        if (this.client && this.isConnected) {
            try {
                if (ttlSeconds) {
                    await this.client.set(key, value, 'EX', ttlSeconds);
                }
                else {
                    await this.client.set(key, value);
                }
                return;
            }
            catch (e) {
                // Fallback to memory
            }
        }
        const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined;
        this.memoryStore.set(key, { value, expiresAt });
    }
    async del(key) {
        if (this.client && this.isConnected) {
            try {
                await this.client.del(key);
                return;
            }
            catch (e) { }
        }
        this.memoryStore.delete(key);
        this.setStore.delete(key);
    }
    async sadd(key, member) {
        if (this.client && this.isConnected) {
            try {
                await this.client.sadd(key, member);
                return;
            }
            catch (e) { }
        }
        let s = this.setStore.get(key);
        if (!s) {
            s = new Set();
            this.setStore.set(key, s);
        }
        s.add(member);
    }
    async srem(key, member) {
        if (this.client && this.isConnected) {
            try {
                await this.client.srem(key, member);
                return;
            }
            catch (e) { }
        }
        const s = this.setStore.get(key);
        if (s) {
            s.delete(member);
        }
    }
    async smembers(key) {
        if (this.client && this.isConnected) {
            try {
                return await this.client.smembers(key);
            }
            catch (e) { }
        }
        const s = this.setStore.get(key);
        return s ? Array.from(s) : [];
    }
}
exports.RedisService = RedisService;
exports.redis = new RedisService();
//# sourceMappingURL=redis.js.map