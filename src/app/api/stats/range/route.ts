import { errorResponse, successResponse } from "@/utils/api-response";
import { isGregorianLeapYear } from "@/utils/leap-year";
import type { NextRequest } from "next/server";

// Get the total number of leap years in a date range
export const GET = async (request: NextRequest) => {
  // Get query parameters
  const url = new URL(request.url);
  const startParam = url.searchParams.get("start");
  const endParam = url.searchParams.get("end");

  // Validate parameters
  if (!startParam || !endParam) {
    return errorResponse("Both 'start' and 'end' parameters are required.");
  }

  const start = Number.parseInt(startParam, 10);
  const end = Number.parseInt(endParam, 10);

  if (Number.isNaN(start) || Number.isNaN(end)) {
    return errorResponse(
      "Both 'start' and 'end' parameters must be valid integers.",
    );
  }

  if (start < 1582 || end < 1582) {
    return errorResponse(
      "Years must be 1582 or later (Gregorian calendar introduction).",
    );
  }

  if (start > end) {
    return errorResponse("Start year must be less than or equal to end year.");
  }

  // Calculate leap years in the range
  const leapYears: number[] = [];
  let leapYearCount = 0;

  for (let year = start; year <= end; year++) {
    if (isGregorianLeapYear(year)) {
      leapYearCount++;
      // Only include the actual leap years in the response if the range is reasonable
      if (end - start < 100) {
        leapYears.push(year);
      }
    }
  }

  // Calculate some statistics
  const totalYears = end - start + 1;
  const leapYearPercentage = (leapYearCount / totalYears) * 100;

  return successResponse({
    startYear: start,
    endYear: end,
    totalYears,
    leapYearCount,
    leapYearPercentage: Number.parseFloat(leapYearPercentage.toFixed(2)),
    leapYears:
      end - start < 100
        ? leapYears
        : "Range too large to list individual years",
  });
};
