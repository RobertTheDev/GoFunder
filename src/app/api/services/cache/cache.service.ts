import redisClient from "../../db/redis/redisClient";

// This handler deletes an item from the cache using a unique key.
export async function deleteFromCache(key: string): Promise<number> {
    return redisClient.del(key);
}

// This handler gets an item from the cache using a unique key.
export async function getFromCache(key: string): Promise<string | null> {
    return redisClient.get(key);
}

// This handler sets an item into the cache with a unique key.
export async function setToCache(params: {
    data: unknown;
    key: string;
}): Promise<string> {
    const { data, key } = params;

    return redisClient.set(key, JSON.stringify(data));
}
