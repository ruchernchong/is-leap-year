import { describe, expect, it } from "vitest";
import { errorResponse, successResponse } from "./response";

describe("successResponse", () => {
  it("should return a NextResponse with status 200", async () => {
    const data = { result: true, year: 2024 };
    const response = successResponse(data);

    expect(response.status).toBe(200);
  });

  it("should include the provided data in the response", async () => {
    const data = { result: true, year: 2024 };
    const response = successResponse(data);
    const json = await response.json();

    expect(json.data).toEqual(data);
  });

  it("should include status field in the response body", async () => {
    const data = { result: true };
    const response = successResponse(data);
    const json = await response.json();

    expect(json.status).toBe(200);
  });

  it("should include meta object with timestamp", async () => {
    const data = { result: true };
    const response = successResponse(data);
    const json = await response.json();

    expect(json.meta).toBeDefined();
    expect(json.meta.timestamp).toBeDefined();
    expect(typeof json.meta.timestamp).toBe("string");
  });

  it("should generate a valid ISO 8601 timestamp", async () => {
    const data = { result: true };
    const response = successResponse(data);
    const json = await response.json();

    const timestamp = new Date(json.meta.timestamp);
    expect(timestamp.toISOString()).toBe(json.meta.timestamp);
  });

  it("should handle different data types", async () => {
    const stringData = "test";
    const arrayData = [1, 2, 3];
    const objectData = { key: "value" };
    const numberData = 42;

    const stringResponse = await successResponse(stringData).json();
    const arrayResponse = await successResponse(arrayData).json();
    const objectResponse = await successResponse(objectData).json();
    const numberResponse = await successResponse(numberData).json();

    expect(stringResponse.data).toBe(stringData);
    expect(arrayResponse.data).toEqual(arrayData);
    expect(objectResponse.data).toEqual(objectData);
    expect(numberResponse.data).toBe(numberData);
  });
});

describe("errorResponse", () => {
  it("should return a NextResponse with status 400 by default", async () => {
    const response = errorResponse("Test error");

    expect(response.status).toBe(400);
  });

  it("should return a NextResponse with custom status code", async () => {
    const response = errorResponse("Not found", 404);

    expect(response.status).toBe(404);
  });

  it("should include error object in the response", async () => {
    const message = "Test error message";
    const response = errorResponse(message);
    const json = await response.json();

    expect(json.error).toBeDefined();
    expect(json.error.message).toBe(message);
  });

  it("should include error code matching the status", async () => {
    const response = errorResponse("Server error", 500);
    const json = await response.json();

    expect(json.error.code).toBe("500");
  });

  it("should include status field in the response body", async () => {
    const response = errorResponse("Test error", 404);
    const json = await response.json();

    expect(json.status).toBe(404);
  });

  it("should include meta object with timestamp", async () => {
    const response = errorResponse("Test error");
    const json = await response.json();

    expect(json.meta).toBeDefined();
    expect(json.meta.timestamp).toBeDefined();
    expect(typeof json.meta.timestamp).toBe("string");
  });

  it("should generate a valid ISO 8601 timestamp", async () => {
    const response = errorResponse("Test error");
    const json = await response.json();

    const timestamp = new Date(json.meta.timestamp);
    expect(timestamp.toISOString()).toBe(json.meta.timestamp);
  });

  it("should not include data field in error responses", async () => {
    const response = errorResponse("Test error");
    const json = await response.json();

    expect(json.data).toBeUndefined();
  });

  it("should handle common HTTP status codes", async () => {
    const codes = [
      { status: 400, message: "Bad Request" },
      { status: 401, message: "Unauthorized" },
      { status: 403, message: "Forbidden" },
      { status: 404, message: "Not Found" },
      { status: 500, message: "Internal Server Error" },
    ];

    for (const { status, message } of codes) {
      const response = errorResponse(message, status);
      const json = await response.json();

      expect(response.status).toBe(status);
      expect(json.status).toBe(status);
      expect(json.error.code).toBe(status.toString());
      expect(json.error.message).toBe(message);
    }
  });
});
