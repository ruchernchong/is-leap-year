import {
  findNextGregorianLeapYear,
  isGregorianLeapYear,
} from "@/utils/leap-year";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ year?: string }> },
) => {
  const { year: yearParam } = await params;
  let year: number;

  if (yearParam) {
    // Handle case with year parameter
    year = Number.parseInt(yearParam, 10);

    if (Number.isNaN(year) || year < 1582 || year > 9999) {
      return NextResponse.json(
        "The Gregorian calendar was introduced in 1582, so we don't support earlier years.",
      );
    }
  } else {
    // Handle case without year parameter (current year)
    year = new Date().getFullYear();
  }

  const isLeapYear = isGregorianLeapYear(year);
  const nextLeapYear = isLeapYear ? year + 4 : findNextGregorianLeapYear(year);

  return NextResponse.json({
    isLeapYear,
    daysInFebruary: isLeapYear ? 29 : 28,
    nextLeapYear,
    yearChecked: year,
  });
};
