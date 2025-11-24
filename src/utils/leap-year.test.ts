import { describe, expect, it } from "bun:test";
import {
  findNextGregorianLeapYear,
  getDaysInFebruary,
  getLeapYearFacts,
  isChineseLeapYear,
  isGregorianLeapYear,
  isHebrewLeapYear,
  isJulianLeapYear,
} from "./leap-year";

describe("isGregorianLeapYear", () => {
  it("should return true for leap years divisible by 4 but not 100", () => {
    expect(isGregorianLeapYear(2024)).toBe(true);
    expect(isGregorianLeapYear(2020)).toBe(true);
    expect(isGregorianLeapYear(2016)).toBe(true);
    expect(isGregorianLeapYear(1996)).toBe(true);
  });

  it("should return false for non-leap years", () => {
    expect(isGregorianLeapYear(2023)).toBe(false);
    expect(isGregorianLeapYear(2021)).toBe(false);
    expect(isGregorianLeapYear(2019)).toBe(false);
    expect(isGregorianLeapYear(1999)).toBe(false);
  });

  it("should return false for years divisible by 100 but not 400", () => {
    expect(isGregorianLeapYear(1900)).toBe(false);
    expect(isGregorianLeapYear(1800)).toBe(false);
    expect(isGregorianLeapYear(1700)).toBe(false);
    expect(isGregorianLeapYear(2100)).toBe(false);
  });

  it("should return true for years divisible by 400", () => {
    expect(isGregorianLeapYear(2000)).toBe(true);
    expect(isGregorianLeapYear(1600)).toBe(true);
    expect(isGregorianLeapYear(2400)).toBe(true);
  });
});

describe("isJulianLeapYear", () => {
  it("should return true for years divisible by 4", () => {
    expect(isJulianLeapYear(2024)).toBe(true);
    expect(isJulianLeapYear(2020)).toBe(true);
    expect(isJulianLeapYear(1900)).toBe(true); // Unlike Gregorian
    expect(isJulianLeapYear(2100)).toBe(true); // Unlike Gregorian
  });

  it("should return false for years not divisible by 4", () => {
    expect(isJulianLeapYear(2023)).toBe(false);
    expect(isJulianLeapYear(2021)).toBe(false);
    expect(isJulianLeapYear(1999)).toBe(false);
  });
});

describe("isHebrewLeapYear", () => {
  it("should return true for years in the Metonic cycle pattern", () => {
    expect(isHebrewLeapYear(3)).toBe(true);
    expect(isHebrewLeapYear(6)).toBe(true);
    expect(isHebrewLeapYear(8)).toBe(true);
    expect(isHebrewLeapYear(11)).toBe(true);
    expect(isHebrewLeapYear(14)).toBe(true);
    expect(isHebrewLeapYear(17)).toBe(true);
    expect(isHebrewLeapYear(22)).toBe(true); // 22 % 19 = 3
  });

  it("should return false for years not in the Metonic cycle pattern", () => {
    expect(isHebrewLeapYear(1)).toBe(false);
    expect(isHebrewLeapYear(2)).toBe(false);
    expect(isHebrewLeapYear(4)).toBe(false);
    expect(isHebrewLeapYear(5)).toBe(false);
  });

  it("should follow the 19-year cycle", () => {
    expect(isHebrewLeapYear(22)).toBe(isHebrewLeapYear(3)); // 22 % 19 = 3
    expect(isHebrewLeapYear(25)).toBe(isHebrewLeapYear(6)); // 25 % 19 = 6
  });
});

describe("isChineseLeapYear", () => {
  it("should return true for years in the Chinese calendar pattern", () => {
    expect(isChineseLeapYear(3)).toBe(true);
    expect(isChineseLeapYear(6)).toBe(true);
    expect(isChineseLeapYear(9)).toBe(true);
    expect(isChineseLeapYear(11)).toBe(true);
    expect(isChineseLeapYear(14)).toBe(true);
    expect(isChineseLeapYear(17)).toBe(true);
  });

  it("should return false for years not in the pattern", () => {
    expect(isChineseLeapYear(1)).toBe(false);
    expect(isChineseLeapYear(2)).toBe(false);
    expect(isChineseLeapYear(4)).toBe(false);
  });

  it("should follow the 19-year cycle", () => {
    expect(isChineseLeapYear(22)).toBe(isChineseLeapYear(3)); // 22 % 19 = 3
    expect(isChineseLeapYear(25)).toBe(isChineseLeapYear(6)); // 25 % 19 = 6
  });
});

describe("findNextGregorianLeapYear", () => {
  it("should find the next leap year when current year is not a leap year", () => {
    expect(findNextGregorianLeapYear(2023)).toBe(2024);
    expect(findNextGregorianLeapYear(2021)).toBe(2024);
    expect(findNextGregorianLeapYear(2019)).toBe(2020);
  });

  it("should find the next leap year when current year is a leap year", () => {
    expect(findNextGregorianLeapYear(2024)).toBe(2028);
    expect(findNextGregorianLeapYear(2020)).toBe(2024);
    expect(findNextGregorianLeapYear(2000)).toBe(2004);
  });

  it("should skip century years that are not divisible by 400", () => {
    expect(findNextGregorianLeapYear(1897)).toBe(1904); // Skips 1900
    expect(findNextGregorianLeapYear(2097)).toBe(2104); // Skips 2100
  });

  it("should handle years divisible by 400", () => {
    expect(findNextGregorianLeapYear(1996)).toBe(2000);
    expect(findNextGregorianLeapYear(2396)).toBe(2400);
  });
});

describe("getDaysInFebruary", () => {
  it("should return 29 for Gregorian leap years", () => {
    expect(getDaysInFebruary("gregorian", 2024)).toBe(29);
    expect(getDaysInFebruary("gregorian", 2000)).toBe(29);
    expect(getDaysInFebruary("Gregorian", 2024)).toBe(29); // Case insensitive
  });

  it("should return 28 for Gregorian non-leap years", () => {
    expect(getDaysInFebruary("gregorian", 2023)).toBe(28);
    expect(getDaysInFebruary("gregorian", 1900)).toBe(28);
  });

  it("should return 29 for Julian leap years", () => {
    expect(getDaysInFebruary("julian", 2024)).toBe(29);
    expect(getDaysInFebruary("julian", 1900)).toBe(29); // Unlike Gregorian
  });

  it("should return 28 for Julian non-leap years", () => {
    expect(getDaysInFebruary("julian", 2023)).toBe(28);
    expect(getDaysInFebruary("julian", 2021)).toBe(28);
  });

  it("should return 0 for Hebrew calendar (no February)", () => {
    expect(getDaysInFebruary("hebrew", 5784)).toBe(0);
  });

  it("should return 0 for Chinese calendar (no February)", () => {
    expect(getDaysInFebruary("chinese", 4722)).toBe(0);
  });

  it("should return 0 for unknown calendar types", () => {
    expect(getDaysInFebruary("unknown", 2024)).toBe(0);
    expect(getDaysInFebruary("", 2024)).toBe(0);
  });
});

describe("getLeapYearFacts", () => {
  it("should return facts for leap years", () => {
    const facts = getLeapYearFacts(2024);
    expect(facts.length).toBeGreaterThan(0);
    expect(facts[0]).toContain("2024 falls on a leap year");
  });

  it("should return facts for non-leap years", () => {
    const facts = getLeapYearFacts(2023);
    expect(facts.length).toBeGreaterThan(0);
    expect(facts[0]).toContain("2023 is not a leap year");
    expect(facts.some((fact) => fact.includes("next leap year"))).toBe(true);
  });

  it("should include special facts for 400-year leap years", () => {
    const facts = getLeapYearFacts(2000);
    expect(facts.some((fact) => fact.includes("once every 400 years"))).toBe(
      true,
    );
  });

  it("should include historical events for notable years", () => {
    const facts2000 = getLeapYearFacts(2000);
    expect(facts2000.some((fact) => fact.includes("Y2K"))).toBe(true);

    const facts2020 = getLeapYearFacts(2020);
    expect(facts2020.some((fact) => fact.includes("COVID-19"))).toBe(true);
  });

  it("should explain century year exceptions", () => {
    const facts = getLeapYearFacts(1900);
    expect(
      facts.some((fact) => fact.includes("divisible by 100 but not by 400")),
    ).toBe(true);
  });

  it("should include next leap year information for non-leap years", () => {
    const facts = getLeapYearFacts(2023);
    expect(facts.some((fact) => fact.includes("next leap year"))).toBe(true);
    expect(facts.some((fact) => fact.includes("2024"))).toBe(true);
  });

  it("should mention first Gregorian leap year", () => {
    const facts = getLeapYearFacts(1584);
    expect(facts.some((fact) => fact.includes("first leap year"))).toBe(true);
  });

  it("should include future year information for years beyond 2025", () => {
    const facts = getLeapYearFacts(2028);
    expect(facts.some((fact) => fact.includes("years in the future"))).toBe(
      true,
    );
  });
});
