import {
  findNextGregorianLeapYear,
  isGregorianLeapYear,
} from "@/utils/leap-year";
import { type NextRequest, NextResponse } from "next/server";

// Handler for batch checking multiple years
export const POST = async (request: NextRequest) => {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate input
    if (!body.years || !Array.isArray(body.years)) {
      return NextResponse.json("Request body must include a 'years' array.");
    }

    // Limit the number of years that can be checked at once
    if (body.years.length > 100) {
      return NextResponse.json(
        "You can check a maximum of 100 years in a single request.",
      );
    }

    // Process each year
    const results = body.years.map((yearInput: string) => {
      const year = Number.parseInt(yearInput, 10);

      // Validate each year
      if (Number.isNaN(year) || year < 1582 || year > 9999) {
        return {
          yearChecked: yearInput,
          error: "Invalid year. Must be a number between 1582 and 9999.",
        };
      }

      const isLeapYear = isGregorianLeapYear(year);

      return {
        yearChecked: year,
        isLeapYear,
        daysInFebruary: isLeapYear ? 29 : 28,
        nextLeapYear: isLeapYear ? year + 4 : findNextGregorianLeapYear(year),
      };
    });

    return NextResponse.json({
      results,
      count: results.length,
    });
  } catch (error) {
    return NextResponse.json(
      "The request body must be valid JSON with a 'years' array.",
    );
  }
};
