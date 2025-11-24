import { realtime } from "@/lib/realtime";
import { redis } from "@/lib/redis";

const REQUESTS_KEY = "requests:total";

/**
 * Increment the total request counter and emit realtime event
 * Fire-and-forget operation that doesn't block on Redis
 */
export const incrementRequests = async (): Promise<void> => {
  // Fire-and-forget: don't await to avoid blocking responses
  try {
    const count = await redis.incr(REQUESTS_KEY);

    await realtime.emit("requests.count", count);
  } catch (error) {
    console.error("Failed to increment request counter:", error);
  }
};

/**
 * Get the total request count
 * Returns 0 if Redis is unavailable or counter doesn't exist
 */
export const getTotalRequests = async (): Promise<number> => {
  try {
    const count = await redis.get<number>(REQUESTS_KEY);
    return count ?? 0;
  } catch (error) {
    console.error("Failed to get request count:", error);
    return 0;
  }
};
