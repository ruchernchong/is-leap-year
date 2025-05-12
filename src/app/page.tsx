import { CodeBlock } from "@/components/code-block";
import { LeapYearHistory } from "@/components/leap-year-history";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="mb-6 font-bold text-5xl tracking-tight">
          Say Goodbye to Leap Year Confusion, Forever.
        </h1>
        <p className="mb-12 text-2xl">
          Every four years, millions of developers face the same crisis:
          <span className="font-bold text-red-500">
            {" "}
            broken date calculations due to leap years
          </span>
          .
        </p>
        <div className="mx-auto mb-12 max-w-2xl rounded-lg bg-gray-800 p-6">
          <div className="mb-1 text-left font-mono text-gray-400">
            {/* What most companies still use in 2025 */}
          </div>
          <div className="mb-2 rounded bg-gray-900 p-4 text-left font-mono text-red-400">
            if (month === 2) {"{"}
            <br />
            &nbsp;&nbsp;days = 28; {/* Forgetting leap years! */}
            <br />
            {"}"}
          </div>
        </div>
      </section>
      {/* Our Solution Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-bold text-2xl text-yellow-500">
                The API Endpoint
              </h3>
              <CodeBlock
                language="bash"
                title="API Request"
                code={`GET "https://isleapyear.app/api/check"`}
              />
              <CodeBlock
                language="json"
                title="API Response"
                code={`{
  "isLeapYear": false,
  "daysInFebruary": 28,
  "nextLeapYear": 2028,
  "yearChecked": 2025,
}`}
              />
            </div>

            <div>
              <h3 className="mb-4 font-bold text-2xl text-yellow-500">
                Implementation Example
              </h3>
              <CodeBlock
                language="javascript"
                title="JavaScript"
                code={`// Using fetch API
fetch('https://isleapyear.app/api/check')
  .then(response => response.json())
  .then(data => {
    if (data.isLeapYear) {
      februaryDays.textContent = "29 days this month!";
    } else {
      februaryDays.textContent = "28 boring days";
    }
  });`}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center font-bold text-4xl">Features</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="mb-4 text-4xl text-yellow-500">⚡</div>
              <h3 className="mb-2 font-bold text-xl">Quantum-Powered</h3>
              <p className="text-gray-400">
                Our proprietary Quantum LeapCore™ Engine consults astronomical
                data and calculates leap years with 99.9999% accuracy.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="mb-4 text-4xl text-yellow-500">🔒</div>
              <h3 className="mb-2 font-bold text-xl">Ultra Secure</h3>
              <p className="text-gray-400">
                Military-grade encryption ensures your leap year status remains
                confidential from competitors.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="mb-4 text-4xl text-yellow-500">🚀</div>
              <h3 className="mb-2 font-bold text-xl">Hyper Scalable</h3>
              <p className="text-gray-400">
                Built on top of serverless technology to handle billions of leap
                year checks per second.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="mb-4 text-4xl text-yellow-500">🌐</div>
              <h3 className="mb-2 font-bold text-xl">Multi-Calendar Support</h3>
              <p className="text-gray-400">
                Supports Gregorian, Julian, Hebrew, and Mayan calendar systems
                for truly global applications.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="mb-4 text-4xl text-yellow-500">📊</div>
              <h3 className="mb-2 font-bold text-xl">Detailed Analytics</h3>
              <p className="text-gray-400">
                Track your leap year API usage across all your applications with
                our comprehensive dashboard.
              </p>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <div className="mb-4 text-4xl text-yellow-500">💸</div>
              <h3 className="mb-2 font-bold text-xl">ROI Guaranteed</h3>
              <p className="text-gray-400">
                Our enterprise customers report a 400% ROI from preventing leap
                year-related disasters.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* History Section */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center font-bold text-4xl">
            Understanding Leap Years:{" "}
            <span className="text-yellow-500">A Historical Perspective</span>
          </h2>
          <LeapYearHistory />
        </div>
      </section>
      {/* The Real Solution Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-8 font-bold text-4xl">
            The <span className="text-yellow-500">Actual</span> Solution
          </h2>
          <p className="mb-8 text-gray-400 text-xl">
            Of course, all of this is completely unnecessary. Here's how you
            actually check for a leap year:
          </p>

          <div className="mx-auto max-w-2xl">
            <CodeBlock
              language="javascript"
              title="Actual Leap Year Check"
              code={`function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

// Usage
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2025)); // false
console.log(isLeapYear(2100)); // false (century year)`}
            />
          </div>

          <p className="mt-8 text-gray-400">
            But where's the fun in that? Our engineers needed something to do!
          </p>
        </div>
      </section>
    </>
  );
}
