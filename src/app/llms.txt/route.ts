import { NextResponse } from "next/server";
import { BRAND_NAME, DOMAIN_NAME } from "@/constants";

export const GET = () => {
  const content = `# ${BRAND_NAME}

> A satirical high-performance leap year detection API

## Description

${BRAND_NAME} is a Next.js-based web application that provides a humorous take on over-engineered solutions for simple problems. While presented with tongue-in-cheek marketing (Quantum LeapCore™, military-grade encryption), it's a fully functional API for determining leap years across multiple calendar systems.

## Base URL

https://${DOMAIN_NAME}

## Key Features

- **Quantum-Powered**: Proprietary Quantum LeapCore™ Engine (satirical marketing)
- **Multi-Calendar Support**: Gregorian, Julian, Hebrew, and Chinese calendars
- **RESTful API**: Clean, documented endpoints with standardized responses
- **Batch Processing**: Check multiple years in a single request
- **Statistical Analysis**: Leap year distribution and range statistics
- **No Authentication Required**: Public API endpoints

## API Endpoints

### Check Current Year
GET /api/check

Returns leap year information for the current year.

### Check Specific Year
GET /api/check/{year}

Parameters:
- year: Integer (1582-9999 for Gregorian calendar)

### Batch Check Multiple Years
POST /api/check/batch

Request body:
{
  "years": [2024, 2025, 2026]  // max 100 years
}

### Multi-Calendar Support
GET /api/calendar/{type}/check/{year}

Parameters:
- type: gregorian | julian | hebrew | chinese
- year: Integer (range depends on calendar system)

### Statistics - Range
GET /api/stats/range?start={year}&end={year}

Query parameters:
- start: Start year (min: 1582)
- end: End year (max: 9999)

Returns leap year count and list within the specified range.

### Statistics - Distribution
GET /api/stats/distribution?start={year}&end={year}

Query parameters:
- start: Start year (optional, default: 1900)
- end: End year (optional, default: 2100)

Returns decade-by-decade breakdown of leap years.

## Example Response Format

{
  "status": 200,
  "data": {
    "isLeapYear": true,
    "daysInFebruary": 29,
    "nextLeapYear": 2028,
    "yearChecked": 2024
  },
  "meta": {
    "timestamp": "2025-01-15T10:30:00.000Z"
  }
}

## Core Leap Year Logic

Gregorian Calendar:
- Divisible by 4: Leap year
- BUT if divisible by 100: Not a leap year
- EXCEPT if divisible by 400: Leap year

JavaScript implementation:
\`\`\`javascript
function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
\`\`\`

## Rate Limits

- Default: 100 requests per day
- Burst: 5 requests per second

## Technology Stack

- Next.js 16.0.3 (App Router)
- React 19.2.0
- TypeScript 5 (strict mode)
- Tailwind CSS 4.1.6
- DaisyUI 5.0.35
- Bun package manager
- Vercel deployment (Singapore region)

## Common Use Cases

1. **Date Validation**: Validate February dates in form inputs
2. **Calendar Applications**: Display correct days in February
3. **Historical Analysis**: Study leap year patterns over time
4. **Educational Tools**: Teach calendar systems and leap year rules
5. **Satirical Reference**: Example of over-engineering simple problems

## Error Handling

- 400: Invalid parameters (e.g., year out of range)
- 429: Rate limit exceeded
- 500: Internal server error (quantum computer overheating 😄)

## Additional Resources

- Full Documentation: https://${DOMAIN_NAME}/docs
- Interactive Tools: https://${DOMAIN_NAME}/tools
- Contact: https://${DOMAIN_NAME}/contact

## Note on Satirical Nature

This project intentionally over-engineers a simple problem for humorous effect. The actual leap year calculation is trivial and can be implemented in a single line of code. The "Quantum LeapCore™" and "military-grade encryption" are satirical marketing terms.

---

For the actual simple solution, just use:
((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)

But where's the fun in that? 🚀
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
