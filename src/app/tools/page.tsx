import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { getLeapYearFacts } from "@/utils/leap-year";

const ToolsPage = async () => {
  "use cache";

  // Get some facts about the current year
  const currentYear = new Date().getFullYear();
  const leapYearFacts = getLeapYearFacts(currentYear);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 font-bold text-4xl">Leap Year Tools</h1>

      <div className="mb-12">
        <p className="mb-6 text-gray-600 text-xl">
          Explore our collection of tools for working with leap years in your
          applications. These tools demonstrate the capabilities of our API and
          provide useful functionality for developers and users alike.
        </p>
      </div>

      <div className="mb-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-bold text-2xl">Leap Year Calculator</h2>
          <p className="mb-6 text-gray-600">
            Check if any year is a leap year using our simple calculator. Just
            enter a year between 1582 (when the Gregorian calendar was
            introduced) and 9999 to get an instant result.
          </p>
        </div>

        <div>
          <h2 className="mb-6 font-bold text-2xl">Leap Year Calendar</h2>
          <p className="mb-6 text-gray-600">
            Visualize leap years across decades with our interactive calendar.
            Green cells indicate leap years, and you can navigate between
            decades to explore patterns.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 font-bold text-2xl">Batch Leap Year Testing</h2>
        <p className="mb-6 text-gray-600">
          Need to check multiple years at once? Our batch tester lets you
          process up to 100 years simultaneously, perfect for data analysis or
          historical research.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 font-bold text-2xl">Leap Year Facts</h2>

        <div className="rounded-lg border border-gray-800 p-6">
          <h3 className="mb-4 text-xl">Did you know?</h3>

          <ul className="space-y-4 text-gray-600">
            {leapYearFacts.map((fact) => (
              <li key={fact} className="flex items-start">
                <span className="mr-2 text-red-500">•</span>
                <span>{fact}</span>
              </li>
            ))}
            <li className="flex items-start">
              <span className="mr-2 text-red-500">•</span>
              <span>
                The Gregorian calendar has 97 leap years every 400 years, which
                averages to a 365.2425-day year.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-red-500">•</span>
              <span>
                The actual length of the astronomical year is approximately
                365.2422 days, which means the Gregorian calendar's leap year
                rule is off by about 1 day every 3,236 years.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-red-500">•</span>
              <span>
                People born on February 29 are sometimes called "leaplings" or
                "leap year babies."
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 font-bold text-2xl">Developer Code Snippets</h2>

        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-xl">JavaScript</h3>
            <CodeBlock
              language="javascript"
              title="JavaScript Leap Year Function"
              code={`function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}`}
            />
          </div>

          <div>
            <h3 className="mb-4 text-xl">TypeScript</h3>
            <CodeBlock
              language="typescript"
              title="TypeScript Leap Year Function"
              code={`function isLeapYear(year: number): boolean {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}`}
            />
          </div>
          <div>
            <h3 className="mb-4 text-xl">Using Our API</h3>
            <CodeBlock
              language="javascript"
              title="Fetch API Example"
              code={`// Check if 2024 is a leap year
fetch('https://isleapyear.app/api/check/2024')
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
        <Link href="/docs" className="btn btn-warning">
          View Full API Documentation
        </Link>
      </div>
    </div>
  );
};

export default ToolsPage;
