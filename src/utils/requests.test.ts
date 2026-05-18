import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockIncr = vi.fn();
const mockGet = vi.fn();
const mockEmit = vi.fn();

vi.mock("@/lib/redis", () => ({
  redis: {
    incr: (...args: unknown[]) => mockIncr(...args),
    get: (...args: unknown[]) => mockGet(...args),
  },
}));

vi.mock("@/lib/realtime", () => ({
  realtime: {
    emit: (...args: unknown[]) => mockEmit(...args),
  },
}));

import { getTotalRequests, incrementRequests } from "./requests";

describe("Request Tracking", () => {
  beforeEach(() => {
    mockIncr.mockClear();
    mockGet.mockClear();
    mockEmit.mockClear();
  });

  afterEach(() => {
    mockIncr.mockClear();
    mockGet.mockClear();
    mockEmit.mockClear();
  });

  describe("incrementRequests", () => {
    it("should call redis.incr with the correct key", async () => {
      mockIncr.mockResolvedValueOnce(42);
      await incrementRequests();
      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(mockIncr).toHaveBeenCalledWith("requests:total");
      expect(mockEmit).toHaveBeenCalledWith("requests.count", 42);
    });

    it("should not throw error if redis fails", async () => {
      mockIncr.mockRejectedValueOnce(new Error("Redis error"));
      await expect(incrementRequests()).resolves.toBeUndefined();
    });
  });

  describe("getTotalRequests", () => {
    it("should return the count from redis", async () => {
      mockGet.mockResolvedValueOnce(12345);
      const result = await getTotalRequests();
      expect(result).toBe(12345);
      expect(mockGet).toHaveBeenCalledWith("requests:total");
    });

    it("should return 0 if redis returns null", async () => {
      mockGet.mockResolvedValueOnce(null);
      const result = await getTotalRequests();
      expect(result).toBe(0);
    });

    it("should return 0 if redis fails", async () => {
      mockGet.mockRejectedValueOnce(new Error("Redis error"));
      const result = await getTotalRequests();
      expect(result).toBe(0);
    });
  });
});
