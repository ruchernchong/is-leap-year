# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IsLeapYear is a satirical Next.js web application that provides a "high-performance leap year detection API" - a humorous take on over-engineered solutions for simple problems. While presented with tongue-in-cheek marketing (Quantum LeapCore™, military-grade encryption), it's a fully functional Next.js 16 application with React 19, demonstrating modern web development practices.

## Common Commands

### Development
This project uses **pnpm** as the package manager:
```bash
pnpm dev              # Start Next.js dev server with Turbopack
pnpm build            # Build production bundle with Turbopack
pnpm start            # Start production server
pnpm lint             # Run Biome linting
pnpm format           # Format all files with Biome
pnpm test             # Run tests with Vitest
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage report
pnpm prepare          # Install Husky hooks
```

### Code Quality
The project uses Biome 2.3.7 for linting and formatting (not ESLint/Prettier):
```bash
pnpm biome check .              # Check all files
pnpm biome check --write .      # Check and auto-fix
pnpm biome format --write .     # Format all files
```

### Git Hooks & Automation
The project uses Husky for git hooks with automated workflows:
```bash
pnpm prepare          # Install Husky hooks

Configured hooks:
- **pre-commit**: Runs lint-staged (formats staged files with Biome)
- **commit-msg**: Validates commit messages with commitlint

Commitlint enforces conventional commits:
- Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Format: `type(scope): subject` (max 100 chars)
- Example: `feat(api): add batch year validation endpoint`

### Release Automation
Uses semantic-release for automated versioning and changelog generation:
```bash
pnpm semantic-release # Run semantic release (CI only)

Configuration (`.releaserc.json`):
- Analyze commits and determine version bump
- Generate CHANGELOG.md
- Create GitHub releases
- Commit updated files with `chore(release): version [skip ci]`

Commitlint configuration (`.commitlintrc.json`):
- Enforces conventional commit format
- Validates commit messages via commit-msg hook

Biome configuration (biome.json):
- Uses spaces for indentation
- Double quotes for JavaScript
- Auto-organizes imports on save
- Custom rule for sorted Tailwind classes
- Disabled `noUnknownProperty` for CSS @plugin syntax

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.5 with App Router
- **React**: Version 19.2.1 (latest)
- **Styling**: Tailwind CSS 4.1.6 with DaisyUI 5.0.35 components
- **TypeScript**: Version 5 with strict mode enabled
- **Testing**: Vitest with 100% coverage (63 tests)
- **Analytics**: Vercel Analytics 1.5.0 integrated
- **Database**: Upstash Redis for usage tracking with realtime updates
- **Realtime**: Upstash Realtime 0.3.0 for live request counter
- **Icons**: Lucide React 0.554.0
- **Validation**: Zod 4.1.13
- **Font**: Geist Sans and Geist Mono (via next/font)
- **Package Manager**: Bun (migrated from pnpm)
- **Code Quality**: Biome 2.3.7 (linting & formatting)
- **Git Hooks**: Husky 9.1.7 + lint-staged 16.2.7
- **Release**: semantic-release 25.0.2 + commitlint

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── check/         # Leap year check endpoints
│   │   │   ├── [year]/    # Single year check: /api/check/2024
│   │   │   ├── batch/     # Batch year checks
│   │   │   └── route.ts   # Current year check (no params)
│   │   ├── calendar/      # Multi-calendar support
│   │   │   └── [type]/check/[year]/  # e.g., /api/calendar/julian/check/2024
│   │   ├── realtime/      # Upstash Realtime endpoint for live updates
│   │   │   └── route.ts   # GET handler for realtime connections
│   │   └── stats/         # Statistics endpoints
│   │       ├── range/     # Leap years in a date range
│   │       └── distribution/  # Statistical distributions
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
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer
│   ├── code-block.tsx     # Syntax-highlighted code examples
│   ├── leap-year-history.tsx  # Historical timeline
│   ├── testimonial-card.tsx   # Testimonial components
│   ├── status-update.tsx      # Status indicators
│   ├── requests-counter.tsx   # Live API request counter with realtime updates
│   └── structured-data.tsx    # Schema.org JSON-LD wrapper
├── lib/                   # Library code
│   ├── redis.ts           # Upstash Redis client
│   └── realtime.ts        # Upstash Realtime client with Zod schema
├── utils/                 # Utility functions
│   ├── leap-year.ts       # Core leap year logic
│   ├── leap-year.test.ts  # Leap year tests (45 tests)
│   ├── response.ts        # Standardized API response helpers with usage tracking
│   ├── response.test.ts   # API response tests (14 tests)
│   ├── requests.ts        # Request tracking utilities (increment/get)
│   └── requests.test.ts   # Request tracking tests (4 tests)
└── constants/
    └── index.ts           # Global constants (BRAND_NAME, DOMAIN_NAME)
```

### Key Architectural Patterns

#### API Response Structure
All API routes use standardized response helpers from `utils/response.ts`:
- `successResponse<T>(data: T)`: Returns 200 with data, status, and timestamp
- `errorResponse(message: string, status?: number)`: Returns error with code and timestamp

Response format:
```typescript
{
  status: 200,
  data: { /* your data */ },
  meta: { timestamp: "2025-01-15T..." }
}
```

#### Leap Year Calculation
Core leap year logic is in `utils/leap-year.ts` with calendar system support:
- **Gregorian**: `(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0`
- **Julian**: `year % 4 === 0` (simpler rule)
- **Hebrew/Chinese**: Uses Metonic cycle approximations

Year validation for Gregorian: 1582-9999 (Gregorian calendar introduction)

#### Metadata and SEO
The project follows modern SEO best practices:
- **Root Layout** (`app/layout.tsx`): Defines base metadata (site-wide defaults)
  - Title template for consistent page titles
  - Default Open Graph and Twitter Card metadata
  - Canonical URLs and language alternatives
  - No `keywords` meta tag (deprecated, ignored by search engines)
- **Page-Specific Metadata**: Each page exports its own `metadata` object
  - Unique titles and descriptions
  - Page-specific Open Graph/Twitter metadata
  - Canonical URLs for each route
- **Structured Data (JSON-LD)**: Uses `schema-dts` for type-safe Schema.org markup
  - Homepage: `SoftwareApplication` schema
  - Tools: `WebPage` schema
  - Docs: `TechArticle` schema
  - Contact: `ContactPage` schema
  - Rendered via `StructuredData` component as `<script type="application/ld+json">`
- **SEO Assets**:
  - Dynamic sitemap at `/sitemap.xml`
  - Robots.txt configuration
  - Open Graph image at `/opengraph-image.png`
  - PWA manifest

#### Path Aliasing
TypeScript configured with `@/*` alias pointing to `src/*`:
```typescript
import { BRAND_NAME } from "@/constants";  // resolves to src/constants
```

#### Request Tracking with Upstash Redis and Realtime
The application tracks total API requests with Upstash Redis and provides live updates via Upstash Realtime:

**Architecture:**
- **Redis Client** (`lib/redis.ts`): Redis client using `@upstash/redis` with environment variable configuration
- **Realtime Client** (`lib/realtime.ts`): Upstash Realtime client with Zod-validated schema for type-safe events
- **Request Utilities** (`utils/requests.ts`):
  - `incrementRequests()`: Fire-and-forget counter increment that emits realtime event
  - `getTotalRequests()`: Retrieve total request count
- **Automatic Tracking**: All successful API responses automatically increment the counter via `successResponse()` helper in `utils/response.ts`
- **Realtime Endpoint** (`app/api/realtime/route.ts`): WebSocket endpoint for live updates using Upstash Realtime handler
- **Display**: `RequestsCounter` component (client component) shows formatted count on homepage hero section with live updates using `useRealtime` hook

**Redis Key:**
- `requests:total`: Single global counter for all API requests

**Realtime Events:**
- `requests.count`: Emitted on every successful API request with updated count (validated by Zod schema)

**Environment Variables:**
- `UPSTASH_REDIS_REST_URL`: Upstash Redis REST API URL
- `UPSTASH_REDIS_REST_TOKEN`: Upstash Redis REST API token

**Setup (Production):**
1. Create Upstash Redis database in Upstash Console (https://console.upstash.com)
2. Copy environment variables from database dashboard
3. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to Vercel project settings
4. Deploy - tracking and realtime updates work automatically

**Setup (Local Development):**
1. Go to Upstash Console → Your Database → Details
2. Copy REST API URL and Token
3. Create `.env.local` in project root:
   ```
   UPSTASH_REDIS_REST_URL=your_url_here
   UPSTASH_REDIS_REST_TOKEN=your_token_here
   ```
4. Start dev server - Redis and realtime will connect automatically

**Error Handling:**
- Redis failures don't block API responses (fire-and-forget)
- Returns 0 if Redis unavailable
- Logs errors to console for debugging
- Realtime updates gracefully degrade if WebSocket connection fails

## Development Guidelines

### API Route Patterns
When creating new API routes:
1. Use `async` functions with Next.js 16's async params pattern
2. Always await dynamic params: `const { year } = await params;`
3. Validate inputs and return appropriate error responses
4. Use the standardized response helpers from `utils/response.ts`

Example:
```typescript
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ year: string }> }
) => {
  const { year: yearParam } = await params;
  const year = Number.parseInt(yearParam, 10);

  if (Number.isNaN(year)) {
    return errorResponse("Invalid year parameter");
  }

  return successResponse({ result: someData });
};
```

### Component Development
- Use TypeScript for all components
- Leverage Tailwind CSS and DaisyUI utility classes
- Keep components in the `src/components/` directory
- Use server components by default (this is Next.js App Router)
- **Naming Convention**: Page components should be named descriptively (e.g., `HomePage`, `DocsPage`, `ToolsPage`, `ContactPage`)

### Styling
- Tailwind CSS 4.x with PostCSS
- DaisyUI for pre-built component classes
- Custom CSS in `app/globals.css` if needed
- Font variables: `--font-geist-sans`, `--font-geist-mono`

### Type Safety
- Strict TypeScript mode enabled
- Use `schema-dts` for Schema.org types
- Type all API responses with generics
- Next.js types are auto-generated in `.next/types/`

## Testing the API

The application provides several API endpoints:

```bash
# Check current year
curl https://isleapyear.app/api/check

# Check specific year
curl https://isleapyear.app/api/check/2024

# Check with calendar type
curl https://isleapyear.app/api/calendar/gregorian/check/2024

# Batch check multiple years
curl -X POST https://isleapyear.app/api/check/batch \
  -H "Content-Type: application/json" \
  -d '{"years": [2024, 2025, 2026]}'

# Get leap years in range
curl "https://isleapyear.app/api/stats/range?start=2020&end=2030"

# Get leap year distribution
curl https://isleapyear.app/api/stats/distribution
```

## Testing

This project uses **Vitest** with comprehensive test coverage:

### Test Structure
Tests are colocated with source files (Next.js best practice):
```
src/
├── utils/
│   ├── leap-year.ts
│   ├── leap-year.test.ts       # 45 tests
│   ├── api-response.ts
│   └── api-response.test.ts    # 14 tests
└── app/api/check/
    ├── route.ts
    ├── route.test.ts            # 4 tests
    └── [year]/
        ├── route.ts
        └── route.test.ts        # 10 tests
```

### Test Coverage
- **Total Tests**: 63 passing
- **Coverage**: 100% function and line coverage
- **Test Pattern**: Uses `it("should...")` BDD-style assertions
- **Runner**: Vitest

### Running Tests
```bash
pnpm test              # Run all tests
pnpm test:watch        # Run tests in watch mode
pnpm test:coverage     # Run with coverage report
```

### Test Categories
1. **Leap Year Utilities** (`leap-year.test.ts` - 45 tests)
   - Gregorian, Julian, Hebrew, Chinese calendar tests
   - Century year edge cases
   - Next leap year calculations
   - Leap year facts generation

2. **API Response Helpers** (`response.test.ts` - 14 tests)
   - Success response format validation
   - Error response handling
   - Metadata and timestamp checks
   - Request tracking integration

3. **Request Tracking Utilities** (`requests.test.ts` - 4 tests)
   - Counter increment with realtime event emission
   - Request count retrieval
   - Error handling for Redis failures
   - Fire-and-forget behavior validation

4. **API Routes** (`route.test.ts`)
   - Current year endpoint validation
   - Year parameter validation
   - Error handling for invalid inputs
   - Response structure verification

## Important Notes

- **Vercel Deployment**: Configured for Vercel with vercel.json, deployed to Singapore region (sin1)
- **Package Manager**: Uses pnpm exclusively (pnpm-lock.yaml present) - do not use npm, yarn, or bun
- **Turbopack**: Uses Next.js Turbopack for faster builds (automatically enabled in dev and build)
- **Analytics**: Vercel Analytics is pre-integrated in the root layout
- **Satirical Tone**: The project is intentionally humorous - maintain this tone when adding content
- **Live URL**: https://isleapyear.app
- **CI/CD Workflows**:
  - **Pull Requests**: Automated checks (lint + test + build) run on all PRs to main via `.github/workflows/checks.yml`
  - **Releases**: GitHub Actions automatically runs on main branch pushes, validates code quality (lint + test + build), and creates releases via semantic-release in `.github/workflows/release.yml`
- **Commit Conventions**: All commits must follow conventional commit format or they will be rejected by the commit-msg hook
