/**
 * Utils for leap year calculations across different calendars
 */

// Checks if a year is a leap year in the Gregorian calendar
export function isGregorianLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Checks if a year is a leap year in the Julian calendar
export function isJulianLeapYear(year: number): boolean {
  return year % 4 === 0;
}

// Checks if a year is a leap year in the Hebrew calendar
// This is a simplification - actual Hebrew leap years follow a 19-year Metonic cycle
export function isHebrewLeapYear(year: number): boolean {
  return [3, 6, 8, 11, 14, 17, 19].includes(year % 19);
}

// Checks if a year is a leap year in the Chinese calendar
// This is a simplification - Chinese leap years are more complex
export function isChineseLeapYear(year: number): boolean {
  return [3, 6, 9, 11, 14, 17].includes(year % 19);
}

// Finds the next leap year after the given year (Gregorian calendar)
export function findNextGregorianLeapYear(year: number): number {
  let nextLeapYear: number;

  if (!isGregorianLeapYear(year)) {
    nextLeapYear = year + (4 - (year % 4));
    // Adjust for century years
    if (nextLeapYear % 100 === 0 && nextLeapYear % 400 !== 0) {
      nextLeapYear += 4;
    }
  } else {
    // If the current year is already a leap year, the next one is 4 years later
    nextLeapYear = year + 4;
  }

  return nextLeapYear;
}

// Gets the number of days in February for a given year and calendar type
export function getDaysInFebruary(calendarType: string, year: number): number {
  switch (calendarType.toLowerCase()) {
    case "gregorian":
      return isGregorianLeapYear(year) ? 29 : 28;
    case "julian":
      return isJulianLeapYear(year) ? 29 : 28;
    case "hebrew":
    case "chinese":
      // These calendars don't have February, but we'll return a value for API consistency
      return 0;
    default:
      return 0;
  }
}

// Get interesting facts about a leap year
export function getLeapYearFacts(year: number): string[] {
  const facts: string[] = [];

  if (isGregorianLeapYear(year)) {
    facts.push(`${year} falls on a leap year in the Gregorian calendar.`);

    // Special leap years
    if (year % 400 === 0) {
      facts.push(
        `${year} is a special leap year that occurs only once every 400 years.`,
      );
    }

    // First leap year in Gregorian calendar
    if (year === 1584) {
      facts.push(
        "This was the first leap year in the Gregorian calendar after its introduction in 1582.",
      );
    }

    // Leap years with notable events (just a few examples)
    const historicalEvents: Record<number, string> = {
      1752: "This was the first leap year in England after it adopted the Gregorian calendar.",
      1896: "The first modern Olympic Games were held in Athens, Greece.",
      1904: "The Olympic Games were held in St. Louis, USA.",
      1912: "The Titanic sank in the North Atlantic Ocean.",
      1928: "Women competed in track and field at the Olympics for the first time.",
      1932: "Franklin D. Roosevelt was elected US President.",
      1940: "The first modern McDonald's restaurant was opened.",
      1944: "D-Day: Allied forces landed on the beaches of Normandy.",
      1948: "The State of Israel was established.",
      1952: "Queen Elizabeth II ascended to the throne.",
      1956: "The first transatlantic telephone cable was inaugurated.",
      1960: "John F. Kennedy was elected US President.",
      1968: "Martin Luther King Jr. and Robert F. Kennedy were assassinated.",
      1972: "The Watergate scandal began.",
      1976: "Apple Computer Company was founded.",
      1980: "The Rubik's Cube was released internationally.",
      1984: "Apple introduced the Macintosh computer.",
      1988: "The first Internet computer virus spread worldwide.",
      1992: "The World Wide Web was made available to the public.",
      1996: "The first cloned mammal, Dolly the sheep, was created.",
      2000: "Y2K concerns about computer systems' date handling.",
      2004: "Facebook was launched.",
      2008: "Barack Obama was elected US President.",
      2012: "The Higgs boson was discovered.",
      2016: "The UK voted to leave the European Union (Brexit).",
      2020: "The COVID-19 pandemic began.",
      2024: "Next scheduled Summer Olympic Games.",
    };

    if (year in historicalEvents) {
      facts.push(historicalEvents[year]);
    }

    // Future leap years
    if (year > 2025) {
      const today = new Date();
      const currentYear = today.getFullYear();
      const yearDiff = year - currentYear;
      facts.push(`${year} is ${yearDiff} years in the future from now.`);
    }
  } else {
    facts.push(`${year} is not a leap year in the Gregorian calendar.`);

    if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
      facts.push(
        `Even though ${year} is divisible by 4, it's not a leap year because it's divisible by 100 but not by 400.`,
      );
    }

    const nextLeapYear = findNextGregorianLeapYear(year);
    facts.push(
      `The next leap year after ${year} is ${nextLeapYear}, which is ${nextLeapYear - year} years later.`,
    );
  }

  return facts;
}
