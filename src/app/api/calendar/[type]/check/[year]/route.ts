import {
  getDaysInFebruary,
  isChineseLeapYear,
  isGregorianLeapYear,
  isHebrewLeapYear,
  isJulianLeapYear,
} from "@/utils/leap-year";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ type: string; year: string }> },
) => {
  const { type, year: yearParam } = await params;
  const supportedCalendars = ["gregorian", "julian", "hebrew", "chinese"];

  if (!supportedCalendars.includes(type.toLowerCase())) {
    return NextResponse.json(
      {
        error: `Unsupported calendar type. Supported types are: ${supportedCalendars.join(", ")}`,
      },
      { status: 400 },
    );
  }

  const year = Number.parseInt(yearParam, 10);
  if (Number.isNaN(year) || year < 1 || year > 9999) {
    return NextResponse.json(
      {
        error: "Year must be a number between 1 and 9999.",
      },
      { status: 400 },
    );
  }

  let isLeapYear: boolean;
  switch (type.toLowerCase()) {
    case "gregorian":
      isLeapYear = isGregorianLeapYear(year);
      break;
    case "julian":
      isLeapYear = isJulianLeapYear(year);
      break;
    case "hebrew":
      isLeapYear = isHebrewLeapYear(year);
      break;
    case "chinese":
      isLeapYear = isChineseLeapYear(year);
      break;
    default:
      isLeapYear = false;
  }

  const calendarInfo: Record<string, unknown> = {};

  if (type.toLowerCase() === "hebrew") {
    calendarInfo.hebrew_months = isLeapYear ? 13 : 12;
    calendarInfo.current_metonic_cycle_year = year % 19;
  } else if (type.toLowerCase() === "chinese") {
    calendarInfo.lunar_months = isLeapYear ? 13 : 12;
    calendarInfo.zodiac_animal = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ][year % 12];
  }

  return NextResponse.json({
    calendar_type: type.toLowerCase(),
    isLeapYear,
    daysInFebruary: getDaysInFebruary(type, year),
    yearChecked: year,
    ...calendarInfo,
  });
};
