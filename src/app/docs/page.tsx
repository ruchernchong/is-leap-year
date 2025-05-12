import { CodeBlock } from "@/components/code-block";
import React from "react";

export default function ApiDocs() {
  return (
    <>
      {/* API Documentation Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300 mb-4">
            The IsLeapYear API provides a simple and reliable way to determine
            if a given year is a leap year. Our sophisticated algorithms take
            into account all nuances of the Gregorian calendar system.
          </p>
          <p className="text-gray-300">
            Base URL:{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-yellow-500">
              https://isleapyear.com/api
            </code>
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="text-gray-300 mb-4">
            No authentication is required for public API endpoints.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Endpoints</h2>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">GET /check</h3>
            <p className="text-gray-300 mb-4">
              Returns information about the current year's leap year status.
            </p>
            <h4 className="font-bold mb-2">Example Request</h4>
            <CodeBlock
              language="bash"
              code={`curl -X GET "https://isleapyear.com/api/check"`}
            />
            <h4 className="font-bold mb-2 mt-4">Example Response</h4>
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
            <h3 className="text-xl font-bold mb-2">GET /check/{"{year}"}</h3>
            <p className="text-gray-300 mb-4">
              Returns information about a specific year's leap year status.
            </p>
            <h4 className="font-bold mb-2">Parameters</h4>
            <div className="bg-gray-800 p-4 rounded mb-4">
              <div className="font-bold">Path Parameters</div>
              <div className="ml-4 mt-2">
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">year</span>
                  <span className="text-gray-400 ml-4">
                    Required - The year to check (1582-9999)
                  </span>
                </div>
              </div>
            </div>
            <h4 className="font-bold mb-2">Example Request</h4>
            <CodeBlock
              language="bash"
              code={`curl -X GET "https://isleapyear.com/api/check/2024"`}
            />
            <h4 className="font-bold mb-2 mt-4">Example Response</h4>
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
            <h3 className="text-xl font-bold mb-2">POST /check/batch</h3>
            <p className="text-gray-300 mb-4">
              Checks multiple years at once for more efficient processing.
            </p>
            <h4 className="font-bold mb-2">Request Body</h4>
            <div className="bg-gray-800 p-4 rounded mb-4">
              <div className="mb-2">
                <span className="font-mono text-yellow-500">years</span>
                <span className="text-gray-400 ml-4">
                  Required - Array of years to check (max 100 years per request)
                </span>
              </div>
            </div>
            <h4 className="font-bold mb-2">Example Request</h4>
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://isleapyear.com/api/check/batch" \\
  -H "Content-Type: application/json" \\
  -d '{"years": [2023, 2024, 2025, 2100]}'`}
            />
            <h4 className="font-bold mb-2 mt-4">Example Response</h4>
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
            <h3 className="text-xl font-bold mb-2">GET /stats/range</h3>
            <p className="text-gray-300 mb-4">
              Returns statistics about leap years within a specified date range.
            </p>
            <h4 className="font-bold mb-2">Query Parameters</h4>
            <div className="bg-gray-800 p-4 rounded mb-4">
              <div className="ml-4">
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">start</span>
                  <span className="text-gray-400 ml-4">
                    Required - Start year for the range (min: 1582)
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">end</span>
                  <span className="text-gray-400 ml-4">
                    Required - End year for the range (max: 9999)
                  </span>
                </div>
              </div>
            </div>
            <h4 className="font-bold mb-2">Example Request</h4>
            <CodeBlock
              language="bash"
              code={`curl -X GET "https://isleapyear.com/api/stats/range?start=2000&end=2050"`}
            />
            <h4 className="font-bold mb-2 mt-4">Example Response</h4>
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
            <h3 className="text-xl font-bold mb-2">GET /stats/distribution</h3>
            <p className="text-gray-300 mb-4">
              Returns detailed statistics about leap years by decade within a
              specified date range.
            </p>
            <h4 className="font-bold mb-2">Query Parameters</h4>
            <div className="bg-gray-800 p-4 rounded mb-4">
              <div className="ml-4">
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">start</span>
                  <span className="text-gray-400 ml-4">
                    Optional - Start year for the range (min: 1582, default:
                    1900)
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">end</span>
                  <span className="text-gray-400 ml-4">
                    Optional - End year for the range (max: 9999, default: 2100)
                  </span>
                </div>
              </div>
            </div>
            <h4 className="font-bold mb-2">Example Request</h4>
            <CodeBlock
              language="bash"
              code={`curl -X GET "https://isleapyear.com/api/stats/distribution?start=2000&end=2050"`}
            />
            <h4 className="font-bold mb-2 mt-4">Example Response</h4>
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
            <h3 className="text-xl font-bold mb-2">
              GET /calendar/{"{type}"}/check/{"{year}"}
            </h3>
            <p className="text-gray-300 mb-4">
              Returns information about a specific year's leap year status in
              different calendar systems.
            </p>

            <h4 className="font-bold mb-2">Parameters</h4>
            <div className="bg-gray-800 p-4 rounded mb-4">
              <div className="font-bold">Path Parameters</div>
              <div className="ml-4 mt-2">
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">type</span>
                  <span className="text-gray-400 ml-4">
                    Required - Calendar type (gregorian, julian, hebrew,
                    chinese)
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-mono text-yellow-500">year</span>
                  <span className="text-gray-400 ml-4">
                    Required - The year to check
                  </span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mb-2">Example Request</h4>
            <CodeBlock
              language="bash"
              code={`curl -X GET "https://isleapyear.com/api/calendar/julian/check/2024"`}
            />
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Response Format</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-2 px-4 font-bold">Field</th>
                <th className="py-2 px-4 font-bold">Type</th>
                <th className="py-2 px-4 font-bold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 font-mono">isLeapYear</td>
                <td className="py-2 px-4">Boolean</td>
                <td className="py-2 px-4">
                  Whether the specified year is a leap year
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 font-mono">daysInFebruary</td>
                <td className="py-2 px-4">Integer</td>
                <td className="py-2 px-4">
                  Number of days in February for the specified year
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 font-mono">nextLeapYear</td>
                <td className="py-2 px-4">Integer</td>
                <td className="py-2 px-4">
                  The next leap year after the specified year
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4 font-mono">yearChecked</td>
                <td className="py-2 px-4">Integer</td>
                <td className="py-2 px-4">The year that was checked</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>

          <p className="text-gray-300 mb-4">
            To ensure service stability, the API has a default rate limit of 100
            requests per day with a burst limit of 5 requests per second.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Error Codes</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-2 px-4 font-bold">Status Code</th>
                <th className="py-2 px-4 font-bold">Error</th>
                <th className="py-2 px-4 font-bold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-2 px-4">400</td>
                <td className="py-2 px-4">Bad Request</td>
                <td className="py-2 px-4">Invalid request parameters</td>
              </tr>

              <tr className="border-b border-gray-800">
                <td className="py-2 px-4">429</td>
                <td className="py-2 px-4">Too Many Requests</td>
                <td className="py-2 px-4">Rate limit exceeded</td>
              </tr>
              <tr>
                <td className="py-2 px-4">500</td>
                <td className="py-2 px-4">Internal Server Error</td>
                <td className="py-2 px-4">
                  Our quantum computer is overheating
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Libraries Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Client Libraries</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">JavaScript</h3>
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
      </div>
    </>
  );
}
