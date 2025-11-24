import type { NextRequest } from "next/server";
import { successResponse } from "@/utils/api-response";
import {
  findNextGregorianLeapYear,
  isGregorianLeapYear,
} from "@/utils/leap-year";

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
