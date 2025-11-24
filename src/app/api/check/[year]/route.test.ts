import { describe, expect, it } from "bun:test";
import { NextRequest } from "next/server";
import { GET } from "./route";

describe("GET /api/check/[year]", () => {
  it("should return true for a leap year", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/2024");
    const params = Promise.resolve({ year: "2024" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data.isLeapYear).toBe(true);
    expect(json.data.yearChecked).toBe(2024);
    expect(json.data.daysInFebruary).toBe(29);
  });

  it("should return false for a non-leap year", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/2023");
    const params = Promise.resolve({ year: "2023" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data.isLeapYear).toBe(false);
    expect(json.data.yearChecked).toBe(2023);
    expect(json.data.daysInFebruary).toBe(28);
  });

  it("should return false for century years not divisible by 400", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/1900");
    const params = Promise.resolve({ year: "1900" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(json.data.isLeapYear).toBe(false);
    expect(json.data.daysInFebruary).toBe(28);
  });

  it("should return true for years divisible by 400", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/2000");
    const params = Promise.resolve({ year: "2000" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(json.data.isLeapYear).toBe(true);
    expect(json.data.daysInFebruary).toBe(29);
  });

  it("should return error for invalid year parameter", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/abc");
    const params = Promise.resolve({ year: "abc" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toBeDefined();
    expect(json.error.message).toContain("Gregorian calendar");
  });

  it("should return error for years before 1582", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/1500");
    const params = Promise.resolve({ year: "1500" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toBeDefined();
    expect(json.error.message).toContain("1582");
  });

  it("should return error for years after 9999", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/10000");
    const params = Promise.resolve({ year: "10000" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.error).toBeDefined();
  });

  it("should calculate next leap year correctly for leap years", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/2024");
    const params = Promise.resolve({ year: "2024" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(json.data.nextLeapYear).toBe(2028);
  });

  it("should calculate next leap year correctly for non-leap years", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/2023");
    const params = Promise.resolve({ year: "2023" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(json.data.nextLeapYear).toBe(2024);
  });

  it("should include metadata with timestamp", async () => {
    const request = new NextRequest("http://localhost:3000/api/check/2024");
    const params = Promise.resolve({ year: "2024" });
    const response = await GET(request, { params });
    const json = await response.json();

    expect(json.meta).toBeDefined();
    expect(json.meta.timestamp).toBeDefined();
  });
});
