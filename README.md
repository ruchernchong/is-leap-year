# IsLeapYear 🗓️

A satirical high-performance leap year detection API that solves the world's most over-engineered problem. Built with Next.js 16, React 19, and powered by our proprietary Quantum LeapCore™ Engine.

**Live Site:** [https://isleapyear.app](https://isleapyear.app)

## Features

- 🚀 **Quantum-Powered Detection** - 99.9999% accuracy in determining if a year is a leap year
- 🔒 **Military-Grade Security** - Your leap year status remains confidential
- 🌐 **Multi-Calendar Support** - Gregorian, Julian, Hebrew, and Chinese calendars
- 📊 **Comprehensive API** - RESTful endpoints for all your leap year needs
- ⚡ **Lightning Fast** - Built with Next.js 16 and Turbopack
- 📈 **Live Request Tracking** - Real-time API usage counter with Upstash Redis and WebSocket updates
- 🔍 **SEO Optimized** - Full structured data (JSON-LD) and Open Graph metadata

## Tech Stack

- **Framework:** Next.js 16.1.5 with App Router
- **React:** 19.2.1
- **TypeScript:** Version 5 (strict mode)
- **Testing:** bun:test (63 tests, 100% coverage)
- **Styling:** Tailwind CSS 4.1.6 + DaisyUI 5.0.35
- **Database:** Upstash Redis (request tracking)
- **Realtime:** Upstash Realtime 0.3.0 (live updates)
- **Icons:** Lucide React 0.554.0
- **Validation:** Zod 4.1.13
- **Code Quality:** Biome 2.3.7
- **Package Manager:** Bun
- **Git Hooks:** Husky 9.1.7 + lint-staged
- **CI/CD:** GitHub Actions + semantic-release
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel (Singapore region)

## Getting Started

### Prerequisites

- Node.js 20+
- Bun (recommended package manager)
- Upstash Redis account (for request tracking)

### Installation

```bash
# Clone the repository
git clone https://github.com/ruchernchong/is-leap-year.git
cd is-leap-year

# Install dependencies
bun install

# Install git hooks
bun prepare

# Set up environment variables
# Create .env.local and add your Upstash Redis credentials:
# UPSTASH_REDIS_REST_URL=your_url_here
# UPSTASH_REDIS_REST_TOKEN=your_token_here

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Environment Setup

For local development, you'll need Upstash Redis credentials:

1. Create a free account at [Upstash Console](https://console.upstash.com)
2. Create a new Redis database
3. Copy the REST API URL and Token from the database dashboard
4. Create `.env.local` in the project root:
   ```
   UPSTASH_REDIS_REST_URL=your_url_here
   UPSTASH_REDIS_REST_TOKEN=your_token_here
   ```

The application will work without these variables, but request tracking will be disabled.

### Available Commands

```bash
bun dev              # Start development server with Turbopack
bun build            # Build for production
bun start            # Start production server
bun lint             # Run Biome linting
bun format           # Format all files with Biome
bun test             # Run tests
bun test:watch       # Run tests in watch mode
bun test:coverage    # Run tests with coverage report
bun prepare          # Install Husky git hooks
```

### Code Quality & Commit Conventions

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
bun biome check .              # Check all files
bun biome check --write .      # Check and auto-fix
bun biome format --write .     # Format all files
```

**Important:** Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) format:
- Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Format: `type(scope): subject` (max 100 chars)
- Example: `feat(api): add batch year validation endpoint`

Git hooks automatically:
- Format staged files before commit (lint-staged)
- Validate commit messages (commitlint)

## API Documentation

### Check Current Year

```bash
curl https://isleapyear.app/api/check
```

### Check Specific Year

```bash
curl https://isleapyear.app/api/check/2024
```

**Response:**
```json
{
  "status": 200,
  "data": {
    "isLeapYear": true,
    "daysInFebruary": 29,
    "nextLeapYear": 2028,
    "yearChecked": 2024
  },
  "meta": {
    "timestamp": "2025-01-15T12:00:00.000Z"
  }
}
```

### Multi-Calendar Support

```bash
curl https://isleapyear.app/api/calendar/julian/check/2024
```

### Batch Check Multiple Years

```bash
curl -X POST https://isleapyear.app/api/check/batch \
  -H "Content-Type: application/json" \
  -d '{"years": [2024, 2025, 2026]}'
```

### Statistics Endpoints

```bash
# Get leap years in a range
curl "https://isleapyear.app/api/stats/range?start=2020&end=2030"

# Get leap year distribution
curl https://isleapyear.app/api/stats/distribution
```

For full API documentation, visit [https://isleapyear.app/docs](https://isleapyear.app/docs)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── check/         # Leap year check endpoints
│   │   ├── calendar/      # Multi-calendar support
│   │   ├── realtime/      # WebSocket endpoint for live updates
│   │   └── stats/         # Statistics endpoints
│   ├── docs/              # API documentation page
│   ├── tools/             # Interactive tools page
│   ├── contact/           # Contact page
│   ├── status/            # Status page
│   ├── llms.txt/          # LLM-friendly documentation endpoint
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── manifest.ts        # PWA manifest
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt config
├── components/            # React components
│   ├── requests-counter.tsx   # Live request counter
│   ├── structured-data.tsx    # JSON-LD wrapper
│   └── ...                    # Other UI components
├── lib/                   # Library code
│   ├── redis.ts           # Upstash Redis client
│   └── realtime.ts        # Upstash Realtime client
├── utils/                 # Utility functions
│   ├── leap-year.ts       # Core leap year logic
│   ├── leap-year.test.ts  # Leap year tests (45 tests)
│   ├── response.ts        # Standardized API responses
│   ├── response.test.ts   # API response tests (14 tests)
│   ├── requests.ts        # Request tracking utilities
│   └── requests.test.ts   # Request tracking tests (4 tests)
└── constants/             # Global constants
```

## Development

The page auto-updates as you edit files. Start by modifying:
- `src/app/page.tsx` - Homepage
- `src/utils/leap-year.ts` - Core leap year logic
- `src/app/api/` - API routes

This project uses:
- [Geist Font](https://vercel.com/font) via `next/font`
- TypeScript path aliases: `@/*` → `src/*`
- Server Components by default
- Modern SEO practices:
  - Structured data (JSON-LD) using `schema-dts`
  - Dynamic sitemap and robots.txt
  - Open Graph and Twitter Card metadata
  - No deprecated `keywords` meta tags

## Testing

This project has comprehensive test coverage using **bun:test**:

- **63 tests** across 5 test files
- **100% code coverage** (function and line coverage)
- **Colocated tests** - test files live next to source files (Next.js best practice)
- **BDD-style assertions** - uses `it("should...")` pattern

### Test Files
- `src/utils/leap-year.test.ts` - 45 tests for leap year calculations
- `src/utils/response.test.ts` - 14 tests for API response helpers
- `src/utils/requests.test.ts` - 4 tests for request tracking
- `src/app/api/check/route.test.ts` - (tests for current year endpoint)
- `src/app/api/check/[year]/route.test.ts` - (tests for specific year endpoint)

### Running Tests
```bash
bun test              # Run all tests
bun test:watch        # Run tests in watch mode
bun test:coverage     # Run with coverage report
```

## CI/CD Pipeline

### Pull Request Checks
Automated quality checks run on all pull requests to `main`:
1. **Lint Check**: Validates code quality with Biome
2. **Test**: Runs 63 tests with 100% coverage
3. **Build**: Ensures production build succeeds

### Release Workflow
GitHub Actions automatically runs on every push to `main`:
1. **Lint Check**: Validates code quality with Biome
2. **Test**: Runs full test suite
3. **Build**: Ensures production build succeeds
4. **Release**: Automatically creates releases using semantic-release
   - Analyzes commits to determine version bump
   - Generates CHANGELOG.md
   - Creates GitHub releases
   - Updates package.json version

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Biome Documentation](https://biomejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT

---

**Note:** This is a satirical project demonstrating over-engineering. The actual leap year check is just: `(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0` 😄
