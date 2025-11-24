import type { NextRequest } from "next/server";
import {
  findNextGregorianLeapYear,
  isGregorianLeapYear,
} from "@/utils/leap-year";
import { successResponse } from "@/utils/response";

export const GET = async (_request: NextRequest) => {
  const year = new Date().getFullYear();

  const isLeapYear = isGregorianLeapYear(year);
  const nextLeapYear = isLeapYear ? year + 4 : findNextGregorianLeapYear(year);

  return successResponse({
    isLeapYear,
    daysInFebruary: isLeapYear ? 29 : 28,
    nextLeapYear,
    yearChecked: year,
  });
};
