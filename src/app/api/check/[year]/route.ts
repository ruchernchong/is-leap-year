import type { NextRequest } from "next/server";
import {
  findNextGregorianLeapYear,
  isGregorianLeapYear,
} from "@/utils/leap-year";
import { errorResponse, successResponse } from "@/utils/response";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ year: string }> },
) => {
  const { year: yearParam } = await params;
  const year = Number.parseInt(yearParam, 10);

  if (Number.isNaN(year) || year < 1582 || year > 9999) {
    return errorResponse(
      "The Gregorian calendar was introduced in 1582, so we don't support earlier years.",
    );
  }

  const isLeapYear = isGregorianLeapYear(year);
  const nextLeapYear = isLeapYear ? year + 4 : findNextGregorianLeapYear(year);

  return successResponse({
    isLeapYear,
    daysInFebruary: isLeapYear ? 29 : 28,
    nextLeapYear,
    yearChecked: year,
  });
};
