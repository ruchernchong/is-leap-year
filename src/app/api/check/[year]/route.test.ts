import { describe, expect, it } from "bun:test";
import { NextRequest } from "next/server";
import { GET } from "./route";

const checkYear = async (year: string) => {
  const request = new NextRequest(`http://localhost:3000/api/check/${year}`);
  const params = Promise.resolve({ year });
  const response = await GET(request, { params });
  const json = await response.json();
  return { response, json };
};

describe("GET /api/check/[year]", () => {
  describe("valid leap year calculations", () => {
    const validCases = [
      { year: "2024", isLeap: true, days: 29, nextLeap: 2028 },
      { year: "2023", isLeap: false, days: 28, nextLeap: 2024 },
      { year: "1900", isLeap: false, days: 28, nextLeap: 1904 },
      { year: "2000", isLeap: true, days: 29, nextLeap: 2004 },
    ];

    validCases.forEach(({ year, isLeap, days, nextLeap }) => {
      it(`should correctly identify ${year} as ${isLeap ? "leap" : "non-leap"} year`, async () => {
        const { response, json } = await checkYear(year);

        expect(response.status).toBe(200);
        expect(json.data.isLeapYear).toBe(isLeap);
        expect(json.data.yearChecked).toBe(Number(year));
        expect(json.data.daysInFebruary).toBe(days);
        expect(json.data.nextLeapYear).toBe(nextLeap);
      });
    });
  });

  describe("error handling", () => {
    const errorCases = [
      { year: "abc", errorText: "Gregorian calendar" },
      { year: "1500", errorText: "1582" },
      { year: "10000", errorText: "" },
    ];

    errorCases.forEach(({ year, errorText }) => {
      it(`should return error for invalid year: ${year}`, async () => {
        const { response, json } = await checkYear(year);

        expect(response.status).toBe(400);
        expect(json.error).toBeDefined();
        if (errorText) {
          expect(json.error.message).toContain(errorText);
        }
      });
    });
  });

  it("should include metadata with timestamp", async () => {
    const { json } = await checkYear("2024");

    expect(json.meta).toBeDefined();
    expect(json.meta.timestamp).toBeDefined();
  });
});
