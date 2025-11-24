import { describe, expect, it } from "bun:test";
import { NextRequest } from "next/server";
import { GET } from "./route";

describe("GET /api/check", () => {
  it("should return current year leap year status", async () => {
    const request = new NextRequest("http://localhost:3000/api/check");
    const response = await GET(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data).toBeDefined();
    expect(json.data.yearChecked).toBe(new Date().getFullYear());
    expect(typeof json.data.isLeapYear).toBe("boolean");
  });

  it("should return correct days in February", async () => {
    const request = new NextRequest("http://localhost:3000/api/check");
    const response = await GET(request);
    const json = await response.json();

    const expectedDays = json.data.isLeapYear ? 29 : 28;
    expect(json.data.daysInFebruary).toBe(expectedDays);
  });

  it("should return next leap year", async () => {
    const request = new NextRequest("http://localhost:3000/api/check");
    const response = await GET(request);
    const json = await response.json();

    expect(json.data.nextLeapYear).toBeDefined();
    expect(typeof json.data.nextLeapYear).toBe("number");
    expect(json.data.nextLeapYear).toBeGreaterThan(json.data.yearChecked);
  });

  it("should include metadata with timestamp", async () => {
    const request = new NextRequest("http://localhost:3000/api/check");
    const response = await GET(request);
    const json = await response.json();

    expect(json.meta).toBeDefined();
    expect(json.meta.timestamp).toBeDefined();
  });
});
