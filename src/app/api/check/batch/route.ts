import type { NextRequest } from "next/server";
import {
  findNextGregorianLeapYear,
  isGregorianLeapYear,
} from "@/utils/leap-year";
import { errorResponse, successResponse } from "@/utils/response";

// Handler for batch checking multiple years
export const POST = async (request: NextRequest) => {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate input
    if (!body.years || !Array.isArray(body.years)) {
      return errorResponse("Request body must include a 'years' array.");
    }

    // Limit the number of years that can be checked at once
    if (body.years.length > 100) {
      return errorResponse(
        "You can check a maximum of 100 years in a single request.",
      );
    }

    // Process each year
    const results = body.years.map((yearInput: string) => {
      const year = Number.parseInt(yearInput, 10);

      // Validate each year
      if (Number.isNaN(year) || year < 1582 || year > 9999) {
        throw new Error(
          `Invalid year ${yearInput}. Must be a number between 1582 and 9999.`,
        );
      }

      const isLeapYear = isGregorianLeapYear(year);

      return {
        yearChecked: year,
        isLeapYear,
        daysInFebruary: isLeapYear ? 29 : 28,
        nextLeapYear: isLeapYear ? year + 4 : findNextGregorianLeapYear(year),
      };
    });

    return successResponse({
      results,
      count: results.length,
    });
  } catch (error) {
    if (error instanceof Error) {
      return errorResponse(error.message);
    }
  }
};
