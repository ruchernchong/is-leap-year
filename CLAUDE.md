# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IsLeapYear is a satirical Next.js web application that provides a "high-performance leap year detection API" - a humorous take on over-engineered solutions for simple problems. While presented with tongue-in-cheek marketing (Quantum LeapCore™, military-grade encryption), it's a fully functional Next.js 15 application with React 19, demonstrating modern web development practices.

## Common Commands

### Development
This project uses **Bun** as the package manager:
```bash
bun dev              # Start Next.js dev server with Turbopack
bun build            # Build production bundle with Turbopack
bun start            # Start production server
bun lint             # Run Biome linting
bun format           # Format all files with Biome
```

### Code Quality
The project uses Biome 2.3.7 for linting and formatting (not ESLint/Prettier):
```bash
bun biome check .              # Check all files
bun biome check --write .      # Check and auto-fix
bun biome format --write .     # Format all files
```

### Git Hooks & Automation
The project uses Husky for git hooks with automated workflows:
```bash
bun prepare          # Install Husky hooks
```

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
bun semantic-release # Run semantic release (CI only)
```

Configured to:
- Analyze commits and determine version bump
- Generate CHANGELOG.md
- Create GitHub releases
- Commit updated files with `chore(release): version [skip ci]`

Biome configuration (biome.json):
- Uses spaces for indentation
- Double quotes for JavaScript
- Auto-organizes imports on save
- Custom rule for sorted Tailwind classes

## Architecture

### Tech Stack
- **Framework**: Next.js 16.0.3 with App Router
- **React**: Version 19.2.0 (latest)
- **Styling**: Tailwind CSS 4.1.6 with DaisyUI 5.0.35 components
- **TypeScript**: Version 5 with strict mode enabled
- **Analytics**: Vercel Analytics 1.5.0 integrated
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
│   │   └── stats/         # Statistics endpoints
│   │       ├── range/     # Leap years in a date range
│   │       └── distribution/  # Statistical distributions
│   ├── docs/              # API documentation page
│   ├── tools/             # Interactive tools page
│   ├── contact/           # Contact page
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
│   └── structured-data.tsx    # Schema.org JSON-LD wrapper
├── utils/                 # Utility functions
│   ├── leap-year.ts       # Core leap year logic
│   └── api-response.ts    # Standardized API response helpers
└── constants/
    └── index.ts           # Global constants (BRAND_NAME, DOMAIN_NAME)
```

### Key Architectural Patterns

#### API Response Structure
All API routes use standardized response helpers from `utils/api-response.ts`:
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
- Root layout (`app/layout.tsx`) defines base metadata
- Each page exports `metadata` object for page-specific SEO
- Uses schema-dts for type-safe Schema.org structured data
- `StructuredData` component wraps JSON-LD scripts

#### Path Aliasing
TypeScript configured with `@/*` alias pointing to `src/*`:
```typescript
import { BRAND_NAME } from "@/constants";  // resolves to src/constants
```

## Development Guidelines

### API Route Patterns
When creating new API routes:
1. Use `async` functions with Next.js 15's async params pattern
2. Always await dynamic params: `const { year } = await params;`
3. Validate inputs and return appropriate error responses
4. Use the standardized response helpers from `utils/api-response.ts`

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

## Important Notes

- **No Test Suite**: This project does not have automated tests configured
- **Vercel Deployment**: Configured for Vercel with vercel.json, deployed to Singapore region (sin1)
- **Package Manager**: Uses Bun exclusively (bun.lock present) - migrated from pnpm, do not use npm, yarn, or pnpm
- **Turbopack**: Uses Next.js Turbopack for faster builds (automatically enabled in dev and build)
- **Analytics**: Vercel Analytics is pre-integrated in the root layout
- **Satirical Tone**: The project is intentionally humorous - maintain this tone when adding content
- **Live URL**: https://isleapyear.app
- **Automated Releases**: GitHub Actions workflow automatically runs on main branch pushes, validates code quality (lint + build), and creates releases via semantic-release
- **Commit Conventions**: All commits must follow conventional commit format or they will be rejected by the commit-msg hook
