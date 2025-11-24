import type { Metadata } from "next";
import Image from "next/image";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { CodeBlock } from "@/components/code-block";
import { LeapYearHistory } from "@/components/leap-year-history";
import { StructuredData } from "@/components/structured-data";
import { BRAND_NAME, DOMAIN_NAME } from "@/constants";
import packageJson from "../../package.json";

export const metadata: Metadata = {
  title: "Home",
  description:
    "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
  openGraph: {
    title: `${BRAND_NAME} - The Ultimate Leap Year Detection API`,
    description:
      "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "IsLeapYear",
  applicationCategory: "DeveloperApplication",
  description:
    "High-performance leap year detection API for developers. Integrate our reliable leap year service into your applications for accurate date calculations.",
  url: `https://${DOMAIN_NAME}`,
  sameAs: [`https://${DOMAIN_NAME}/docs`, `https://${DOMAIN_NAME}/tools`],
  applicationSuite: "Date Calculation Tools",
  keywords: "leap year, date calculation, API, developer tools",
  softwareVersion: packageJson.version,
};

const HomePage = () => (
  <>
    <StructuredData data={structuredData} />

    {/* Hero Section */}
    <section className="px-4 py-16 text-center">
      <div className="mb-8 flex justify-center">
        <Image
          src="/logo.svg"
          alt="IsLeapYear Logo"
          width={128}
          height={128}
          className="h-32 w-32"
        />
      </div>
      <h1 className="mb-6 font-bold text-5xl tracking-tight">
        Say Goodbye to Leap Year Confusion, Forever.
      </h1>
      <p className="mb-12 text-2xl">
        Every four years, millions of developers face the same crisis:{" "}
        <span className="font-bold text-red-500">
          broken date calculations due to leap years
        </span>
        .
      </p>
      <div className="mx-auto mb-12 max-w-2xl rounded-lg bg-gray-800 p-6">
        <div className="mb-1 text-left font-mono text-gray-600">
          {/* What most companies still use in 2025 */}
        </div>
        <div className="mb-2 rounded p-4 text-left font-mono text-red-400">
          if (month === 2) {"{"}
          <br />
          &nbsp;&nbsp;days = 28; {/* Forgetting leap years! */}
          <br />
          {"}"}
        </div>
      </div>
    </section>
    {/* Our Solution Section */}
    <section className="py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-bold text-2xl text-red-500">
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
          <h3 className="mb-4 font-bold text-2xl text-red-500">
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
    </section>
    {/* Features Section */}
    <section className="py-20">
      <h2 className="mb-16 text-center font-bold text-4xl">Features</h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-box border border-gray-800 bg-accent-content p-6">
          <div className="mb-4 text-4xl text-red-500">⚡</div>
          <h3 className="mb-2 font-bold text-xl">Quantum-Powered</h3>
          <p className="text-gray-600">
            Our proprietary Quantum LeapCore™ Engine consults astronomical data
            and calculates leap years with 99.9999% accuracy.
          </p>
        </div>

        <div className="rounded-box border border-gray-800 bg-accent-content p-6">
          <div className="mb-4 text-4xl text-red-500">🔒</div>
          <h3 className="mb-2 font-bold text-xl">Ultra Secure</h3>
          <p className="text-gray-600">
            Military-grade encryption ensures your leap year status remains
            confidential from competitors.
          </p>
        </div>

        <div className="rounded-box border border-gray-800 bg-accent-content p-6">
          <div className="mb-4 text-4xl text-red-500">🚀</div>
          <h3 className="mb-2 font-bold text-xl">Hyper Scalable</h3>
          <p className="text-gray-600">
            Built on top of serverless technology to handle billions of leap
            year checks per second.
          </p>
        </div>

        <div className="rounded-box border border-gray-800 bg-accent-content p-6">
          <div className="mb-4 text-4xl text-red-500">🌐</div>
          <h3 className="mb-2 font-bold text-xl">Multi-Calendar Support</h3>
          <p className="text-gray-600">
            Supports Gregorian, Julian, Hebrew, and Mayan calendar systems for
            truly global applications.
          </p>
        </div>

        <div className="rounded-box border border-gray-800 bg-accent-content p-6">
          <div className="mb-4 text-4xl text-red-500">📊</div>
          <h3 className="mb-2 font-bold text-xl">Detailed Analytics</h3>
          <p className="text-gray-600">
            Track your leap year API usage across all your applications with our
            comprehensive dashboard.
          </p>
        </div>

        <div className="rounded-box border border-gray-800 bg-accent-content p-6">
          <div className="mb-4 text-4xl text-red-500">💸</div>
          <h3 className="mb-2 font-bold text-xl">ROI Guaranteed</h3>
          <p className="text-gray-600">
            Our enterprise customers report a 400% ROI from preventing leap
            year-related disasters.
          </p>
        </div>
      </div>
    </section>
    {/* History Section */}
    <section className="py-20">
      <h2 className="mb-12 text-center font-bold text-4xl">
        Understanding Leap Years:{" "}
        <span className="text-red-500">A Historical Perspective</span>
      </h2>
      <LeapYearHistory />
    </section>
    {/* The Real Solution Section */}
    <section className="py-20">
      <h2 className="mb-8 font-bold text-4xl">
        The <span className="text-red-500">Actual</span> Solution
      </h2>
      <p className="mb-8 text-gray-600 text-xl">
        Of course, all of this is completely unnecessary. Here's how you
        actually check for a leap year:
      </p>

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

      <p className="mt-8 text-gray-600">
        But where's the fun in that? Our engineers needed something to do!
      </p>
    </section>
  </>
);

export default HomePage;
