import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { DOMAIN_NAME } from "@/constants";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "Complete documentation for the IsLeapYear API. Learn how to integrate our high-performance leap year detection service into your applications.",
  openGraph: {
    title: "API Documentation for IsLeapYear",
    description:
      "Complete documentation for the IsLeapYear API. Learn how to integrate our high-performance leap year detection service into your applications.",
    url: "/docs",
  },
  alternates: {
    canonical: "/docs",
  },
};

const Docs = () => (
  <>
    {/* API Documentation Content */}
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 font-bold text-4xl">API Documentation</h1>

      <div className="mb-12 rounded-lg border border-gray-800 p-6">
        <h2 className="mb-4 font-bold text-2xl">Overview</h2>
        <p className="mb-4 text-gray-600">
          The IsLeapYear API provides a simple and reliable way to determine if
          a given year is a leap year. Our sophisticated algorithms take into
          account all nuances of the Gregorian calendar system.
        </p>
        <p className="text-gray-600">
          Base URL:{" "}
          <code className="rounded bg-gray-100 px-2 py-1 text-red-500">
            https://{DOMAIN_NAME}/api
          </code>
        </p>
      </div>
      <div className="mb-12 rounded-lg border border-gray-800 p-6">
        <h2 className="mb-4 font-bold text-2xl">Authentication</h2>
        <p className="mb-4 text-gray-600">
          No authentication is required for public API endpoints.
        </p>
      </div>
      <div className="mb-12 rounded-lg border border-gray-800 p-6">
        <h2 className="mb-4 font-bold text-2xl">Endpoints</h2>
        <div className="mb-8">
          <h3 className="mb-2 font-bold text-xl">GET /check</h3>
          <p className="mb-4 text-gray-600">
            Returns information about the current year's leap year status.
          </p>
          <h4 className="mb-2 font-bold">Example Request</h4>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://isleapyear.app/api/check"`}
          />
          <h4 className="mt-4 mb-2 font-bold">Example Response</h4>
          <CodeBlock
            language="json"
            code={`{
  "isLeapYear": false,
  "daysInFebruary": 28,
  "nextLeapYear": 2028,
  "yearChecked": 2025,
}`}
          />
        </div>
        <div className="mb-8">
          <h3 className="mb-2 font-bold text-xl">GET /check/{"{year}"}</h3>
          <p className="mb-4 text-gray-600">
            Returns information about a specific year's leap year status.
          </p>
          <h4 className="mb-2 font-bold">Parameters</h4>
          <div className="mb-4 rounded bg-gray-200 p-4">
            <div className="font-bold">Path Parameters</div>
            <div className="mt-2 ml-4">
              <div className="mb-2">
                <span className="font-mono text-red-500">year</span>
                <span className="ml-4 text-gray-600">
                  Required - The year to check (1582-9999)
                </span>
              </div>
            </div>
          </div>
          <h4 className="mb-2 font-bold">Example Request</h4>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://isleapyear.app/api/check/2024"`}
          />
          <h4 className="mt-4 mb-2 font-bold">Example Response</h4>
          <CodeBlock
            language="json"
            code={`{
  "isLeapYear": true,
  "daysInFebruary": 29,
  "nextLeapYear": 2028,
  "yearChecked": 2024,
}`}
          />
        </div>
        <div className="mb-8">
          <h3 className="mb-2 font-bold text-xl">POST /check/batch</h3>
          <p className="mb-4 text-gray-600">
            Checks multiple years at once for more efficient processing.
          </p>
          <h4 className="mb-2 font-bold">Request Body</h4>
          <div className="mb-4 rounded bg-gray-200 p-4">
            <div className="mb-2">
              <span className="font-mono text-red-500">years</span>
              <span className="ml-4 text-gray-600">
                Required - Array of years to check (max 100 years per request)
              </span>
            </div>
          </div>
          <h4 className="mb-2 font-bold">Example Request</h4>
          <CodeBlock
            language="bash"
            code={`curl -X POST "https://isleapyear.app/api/check/batch" \\
  -H "Content-Type: application/json" \\
  -d '{"years": [2023, 2024, 2025, 2100]}'`}
          />
          <h4 className="mt-4 mb-2 font-bold">Example Response</h4>
          <CodeBlock
            language="json"
            code={`{
  "results": [
    {
      "yearChecked": 2023,
      "isLeapYear": false,
      "daysInFebruary": 28,
      "nextLeapYear": 2024
    },
    {
      "yearChecked": 2024,
      "isLeapYear": true,
      "daysInFebruary": 29,
      "nextLeapYear": 2028
    },
    {
      "yearChecked": 2025,
      "isLeapYear": false,
      "daysInFebruary": 28,
      "nextLeapYear": 2028
    },
    {
      "yearChecked": 2100,
      "isLeapYear": false,
      "daysInFebruary": 28,
      "nextLeapYear": 2104
    }
  ],
  "count": 4,
}`}
          />
        </div>
        <div className="mb-8">
          <h3 className="mb-2 font-bold text-xl">GET /stats/range</h3>
          <p className="mb-4 text-gray-600">
            Returns statistics about leap years within a specified date range.
          </p>
          <h4 className="mb-2 font-bold">Query Parameters</h4>
          <div className="mb-4 rounded bg-gray-200 p-4">
            <div className="ml-4">
              <div className="mb-2">
                <span className="font-mono text-red-500">start</span>
                <span className="ml-4 text-gray-600">
                  Required - Start year for the range (min: 1582)
                </span>
              </div>
              <div className="mb-2">
                <span className="font-mono text-red-500">end</span>
                <span className="ml-4 text-gray-600">
                  Required - End year for the range (max: 9999)
                </span>
              </div>
            </div>
          </div>
          <h4 className="mb-2 font-bold">Example Request</h4>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://isleapyear.app/api/stats/range?start=2000&end=2050"`}
          />
          <h4 className="mt-4 mb-2 font-bold">Example Response</h4>
          <CodeBlock
            language="json"
            code={`{
  "startYear": 2000,
  "endYear": 2050,
  "totalYears": 51,
  "leapYearCount": 13,
  "leapYearPercentage": 25.49,
  "leapYears": [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048],
}`}
          />
        </div>
        <div className="mb-8">
          <h3 className="mb-2 font-bold text-xl">GET /stats/distribution</h3>
          <p className="mb-4 text-gray-600">
            Returns detailed statistics about leap years by decade within a
            specified date range.
          </p>
          <h4 className="mb-2 font-bold">Query Parameters</h4>
          <div className="mb-4 rounded bg-gray-200 p-4">
            <div className="ml-4">
              <div className="mb-2">
                <span className="font-mono text-red-500">start</span>
                <span className="ml-4 text-gray-600">
                  Optional - Start year for the range (min: 1582, default: 1900)
                </span>
              </div>
              <div className="mb-2">
                <span className="font-mono text-red-500">end</span>
                <span className="ml-4 text-gray-600">
                  Optional - End year for the range (max: 9999, default: 2100)
                </span>
              </div>
            </div>
          </div>
          <h4 className="mb-2 font-bold">Example Request</h4>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://isleapyear.app/api/stats/distribution?start=2000&end=2050"`}
          />
          <h4 className="mt-4 mb-2 font-bold">Example Response</h4>
          <CodeBlock
            language="json"
            code={`{
  "startYear": 2000,
  "endYear": 2050,
  "totalYears": 51,
  "totalLeapYears": 13,
  "overallLeapYearPercentage": 25.49,
  "distribution": [
    {
      "decade": "2000s",
      "totalYears": 10,
      "leapYears": 3,
      "leapYearPercentage": 30.0,
      "leapYearsList": [2000, 2004, 2008]
    },
    {
      "decade": "2010s",
      "totalYears": 10,
      "leapYears": 2,
      "leapYearPercentage": 20.0,
      "leapYearsList": [2012, 2016]
    },
    {
      "decade": "2020s",
      "totalYears": 10,
      "leapYears": 3,
      "leapYearPercentage": 30.0,
      "leapYearsList": [2020, 2024, 2028]
    },
    {
      "decade": "2030s",
      "totalYears": 10,
      "leapYears": 2,
      "leapYearPercentage": 20.0,
      "leapYearsList": [2032, 2036]
    },
    {
      "decade": "2040s",
      "totalYears": 10,
      "leapYears": 3,
      "leapYearPercentage": 30.0,
      "leapYearsList": [2040, 2044, 2048]
    },
    {
      "decade": "2050s",
      "totalYears": 1,
      "leapYears": 0,
      "leapYearPercentage": 0.0,
      "leapYearsList": []
    }
  ],
}`}
          />
        </div>

        <div className="mb-8">
          <h3 className="mb-2 font-bold text-xl">
            GET /calendar/{"{type}"}/check/{"{year}"}
          </h3>
          <p className="mb-4 text-gray-600">
            Returns information about a specific year's leap year status in
            different calendar systems.
          </p>

          <h4 className="mb-2 font-bold">Parameters</h4>
          <div className="mb-4 rounded bg-gray-200 p-4">
            <div className="font-bold">Path Parameters</div>
            <div className="mt-2 ml-4">
              <div className="mb-2">
                <span className="font-mono text-red-500">type</span>
                <span className="ml-4 text-gray-600">
                  Required - Calendar type (gregorian, julian, hebrew, chinese)
                </span>
              </div>
              <div className="mb-2">
                <span className="font-mono text-red-500">year</span>
                <span className="ml-4 text-gray-600">
                  Required - The year to check
                </span>
              </div>
            </div>
          </div>

          <h4 className="mb-2 font-bold">Example Request</h4>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://isleapyear.app/api/calendar/julian/check/2024"`}
          />
        </div>
      </div>

      <div className="mb-12 rounded-lg border border-gray-800 p-6">
        <h2 className="mb-4 font-bold text-2xl">Response Format</h2>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-gray-800 border-b">
              <th className="px-4 py-2 font-bold">Field</th>
              <th className="px-4 py-2 font-bold">Type</th>
              <th className="px-4 py-2 font-bold">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-gray-800 border-b">
              <td className="px-4 py-2 font-mono">isLeapYear</td>
              <td className="px-4 py-2">Boolean</td>
              <td className="px-4 py-2">
                Whether the specified year is a leap year
              </td>
            </tr>
            <tr className="border-gray-800 border-b">
              <td className="px-4 py-2 font-mono">daysInFebruary</td>
              <td className="px-4 py-2">Integer</td>
              <td className="px-4 py-2">
                Number of days in February for the specified year
              </td>
            </tr>
            <tr className="border-gray-800 border-b">
              <td className="px-4 py-2 font-mono">nextLeapYear</td>
              <td className="px-4 py-2">Integer</td>
              <td className="px-4 py-2">
                The next leap year after the specified year
              </td>
            </tr>
            <tr className="border-gray-800 border-b">
              <td className="px-4 py-2 font-mono">yearChecked</td>
              <td className="px-4 py-2">Integer</td>
              <td className="px-4 py-2">The year that was checked</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-12 rounded-lg border border-gray-800 p-6">
        <h2 className="mb-4 font-bold text-2xl">Rate Limits</h2>

        <p className="mb-4 text-gray-600">
          To ensure service stability, the API has a default rate limit of 100
          requests per day with a burst limit of 5 requests per second.
        </p>
      </div>

      <div className="rounded-lg border border-gray-800 p-6">
        <h2 className="mb-4 font-bold text-2xl">Error Codes</h2>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-gray-800 border-b">
              <th className="px-4 py-2 font-bold">Status Code</th>
              <th className="px-4 py-2 font-bold">Error</th>
              <th className="px-4 py-2 font-bold">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-gray-800 border-b">
              <td className="px-4 py-2">400</td>
              <td className="px-4 py-2">Bad Request</td>
              <td className="px-4 py-2">Invalid request parameters</td>
            </tr>

            <tr className="border-gray-800 border-b">
              <td className="px-4 py-2">429</td>
              <td className="px-4 py-2">Too Many Requests</td>
              <td className="px-4 py-2">Rate limit exceeded</td>
            </tr>
            <tr>
              <td className="px-4 py-2">500</td>
              <td className="px-4 py-2">Internal Server Error</td>
              <td className="px-4 py-2">Our quantum computer is overheating</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Libraries Section */}
      <div className="mt-12">
        <h2 className="mb-6 font-bold text-2xl">Client Libraries</h2>

        <div className="rounded-lg border border-gray-800 p-6">
          <h3 className="mb-4 font-bold text-xl">JavaScript</h3>
          <CodeBlock
            language="javascript"
            title="Usage"
            code={`import { IsLeapYearClient } from 'is-leap-year-client'; 

// Initialize the client
const client = new IsLeapYearClient();

// Check current year
const result = await client.check();
console.log(result.isLeapYear);

// Check specific year
const result2024 = await client.check(2024);
console.log(result2024.isLeapYear); // true`}
          />
        </div>
      </div>
    </div>
  </>
);

export default Docs;
