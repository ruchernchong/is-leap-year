import { afterEach, beforeEach, describe, expect, it, mock } from "bun:test";
import { getTotalRequests, incrementRequests } from "./requests";

// Mock the redis module
const mockIncr = mock(() => Promise.resolve(1));
const mockGet = mock(() => Promise.resolve(100));

mock.module("@/lib/redis", () => ({
  redis: {
    incr: mockIncr,
    get: mockGet,
  },
}));

// Mock the realtime module
const mockEmit = mock(() => Promise.resolve());

mock.module("@/lib/realtime", () => ({
  realtime: {
    emit: mockEmit,
  },
}));

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
      // Give it a moment for the fire-and-forget promise
      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(mockIncr).toHaveBeenCalledWith("requests:total");
      expect(mockEmit).toHaveBeenCalledWith("requests.count", 42);
    });

    it("should not throw error if redis fails", async () => {
      mockIncr.mockRejectedValueOnce(new Error("Redis error"));
      // The function catches errors internally and doesn't throw
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
