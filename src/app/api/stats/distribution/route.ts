import { errorResponse, successResponse } from "@/utils/api-response";
import { isGregorianLeapYear } from "@/utils/leap-year";
import type { NextRequest } from "next/server";

interface DecadeData {
  decade: string;
  totalYears: number;
  leapYears: number;
  leapYearPercentage: number;
  leapYearsList: number[];
}

// Get the distribution of leap years by decade
export const GET = async (request: NextRequest) => {
  // Get query parameters
  const url = new URL(request.url);
  const startParam = url.searchParams.get("start");
  const endParam = url.searchParams.get("end");

  // Default values if not provided
  const startYear = startParam ? Number.parseInt(startParam, 10) : 1900;
  const endYear = endParam ? Number.parseInt(endParam, 10) : 2100;

  // Validate parameters
  if (Number.isNaN(startYear) || Number.isNaN(endYear)) {
    return errorResponse(
      "Both 'start' and 'end' parameters must be valid integers.",
    );
  }

  if (startYear < 1582 || endYear < 1582) {
    return errorResponse(
      "Years must be 1582 or later (Gregorian calendar introduction).",
    );
  }

  if (startYear > endYear) {
    return errorResponse("Start year must be less than or equal to end year.");
  }

  if (endYear - startYear > 1000) {
    return errorResponse("Range cannot exceed 1000 years for this endpoint.");
  }

  // Calculate the first decade start year (round down to nearest decade)
  const firstDecadeStart = Math.floor(startYear / 10) * 10;
  const lastDecadeStart = Math.floor(endYear / 10) * 10;

  // Create distribution data by decade
  const decadesData: DecadeData[] = [];

  for (
    let decadeStart = firstDecadeStart;
    decadeStart <= lastDecadeStart;
    decadeStart += 10
  ) {
    const decadeEnd = decadeStart + 9;

    // Skip decades that don't overlap with the requested range
    if (decadeEnd < startYear || decadeStart > endYear) {
      continue;
    }

    // Adjust range to stay within requested bounds
    const effectiveStart = Math.max(decadeStart, startYear);
    const effectiveEnd = Math.min(decadeEnd, endYear);

    let leapYearsCount = 0;
    const leapYearsList: number[] = [];

    for (let year = effectiveStart; year <= effectiveEnd; year++) {
      if (isGregorianLeapYear(year)) {
        leapYearsCount++;
        leapYearsList.push(year);
      }
    }

    const totalYears = effectiveEnd - effectiveStart + 1;
    const leapYearPercentage = (leapYearsCount / totalYears) * 100;

    decadesData.push({
      decade: `${decadeStart}s`,
      totalYears,
      leapYears: leapYearsCount,
      leapYearPercentage: Number.parseFloat(leapYearPercentage.toFixed(2)),
      leapYearsList,
    });
  }

  // Calculate overall statistics
  const totalYears = endYear - startYear + 1;
  let totalLeapYears = 0;

  for (const { leapYears } of decadesData) {
    totalLeapYears += leapYears;
  }

  const overallLeapYearPercentage = (totalLeapYears / totalYears) * 100;

  return successResponse({
    startYear,
    endYear,
    totalYears,
    totalLeapYears,
    overallLeapYearPercentage: Number.parseFloat(
      overallLeapYearPercentage.toFixed(2),
    ),
    distribution: decadesData,
  });
};
