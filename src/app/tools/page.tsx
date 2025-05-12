import { CodeBlock } from "@/components/code-block";
import { getLeapYearFacts } from "@/utils/leap-year";
import Link from "next/link";
import React from "react";

export default function ToolsPage() {
  // Get some facts about the current year
  const currentYear = new Date().getFullYear();
  const leapYearFacts = getLeapYearFacts(currentYear);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Leap Year Tools</h1>

        <div className="mb-12">
          <p className="text-xl mb-6 text-gray-300">
            Explore our collection of tools for working with leap years in your
            applications. These tools demonstrate the capabilities of our API
            and provide useful functionality for developers and users alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Leap Year Calculator</h2>
            <p className="mb-6 text-gray-300">
              Check if any year is a leap year using our simple calculator. Just
              enter a year between 1582 (when the Gregorian calendar was
              introduced) and 9999 to get an instant result.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Leap Year Calendar</h2>
            <p className="mb-6 text-gray-300">
              Visualize leap years across decades with our interactive calendar.
              Green cells indicate leap years, and you can navigate between
              decades to explore patterns.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Batch Leap Year Testing</h2>
          <p className="mb-6 text-gray-300">
            Need to check multiple years at once? Our batch tester lets you
            process up to 100 years simultaneously, perfect for data analysis or
            historical research.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Leap Year Facts</h2>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl mb-4">Did you know?</h3>

            <ul className="space-y-4 text-gray-300">
              {leapYearFacts.map((fact) => (
                <li key={fact} className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{fact}</span>
                </li>
              ))}
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>
                  The Gregorian calendar has 97 leap years every 400 years,
                  which averages to a 365.2425-day year.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>
                  The actual length of the astronomical year is approximately
                  365.2422 days, which means the Gregorian calendar's leap year
                  rule is off by about 1 day every 3,236 years.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>
                  People born on February 29 are sometimes called "leaplings" or
                  "leap year babies."
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Developer Code Snippets</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-4">JavaScript</h3>
              <CodeBlock
                language="javascript"
                title="JavaScript Leap Year Function"
                code={`function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}`}
              />
            </div>

            <div>
              <h3 className="text-xl mb-4">TypeScript</h3>
              <CodeBlock
                language="typescript"
                title="TypeScript Leap Year Function"
                code={`function isLeapYear(year: number): boolean {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}`}
              />
            </div>
            <div>
              <h3 className="text-xl mb-4">Using Our API</h3>
              <CodeBlock
                language="javascript"
                title="Fetch API Example"
                code={`// Check if 2024 is a leap year
fetch('https://isleapyear.com/api/check/2024')
  .then(response => response.json())
  .then(data => {
    console.log(\`Is 2024 a leap year? \${data.isLeapYear}\`);
    console.log(\`Days in February: \${data.daysInFebruary}\`);
    console.log(\`Next leap year: \${data.nextLeapYear}\`);
  })
  .catch(error => console.error('Error:', error));`}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/docs"
            className="inline-block px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-md font-medium text-white"
          >
            View Full API Documentation
          </Link>
        </div>
      </div>
    </>
  );
}
