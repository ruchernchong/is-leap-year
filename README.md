# IsLeapYear 🗓️

A satirical high-performance leap year detection API that solves the world's most over-engineered problem. Built with Next.js 15, React 19, and powered by our proprietary Quantum LeapCore™ Engine.

**Live Site:** [https://isleapyear.app](https://isleapyear.app)

## Features

- 🚀 **Quantum-Powered Detection** - 99.9999% accuracy in determining if a year is a leap year
- 🔒 **Military-Grade Security** - Your leap year status remains confidential
- 🌐 **Multi-Calendar Support** - Gregorian, Julian, Hebrew, and Chinese calendars
- 📊 **Comprehensive API** - RESTful endpoints for all your leap year needs
- ⚡ **Lightning Fast** - Built with Next.js 15 and Turbopack

## Tech Stack

- **Framework:** Next.js 16.0.3 with App Router
- **React:** 19.2.0
- **TypeScript:** Version 5 (strict mode)
- **Styling:** Tailwind CSS 4.1.6 + DaisyUI 5.0.35
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

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/is-leap-year.git
cd is-leap-year

# Install dependencies
bun install

# Install git hooks
bun prepare

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Available Commands

```bash
bun dev           # Start development server with Turbopack
bun build         # Build for production
bun start         # Start production server
bun lint          # Run Biome linting
bun format        # Format all files with Biome
bun prepare       # Install Husky git hooks
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
├── app/              # Next.js App Router
│   ├── api/         # API routes
│   ├── docs/        # Documentation page
│   └── tools/       # Interactive tools
├── components/       # React components
├── utils/           # Utility functions (leap year logic)
└── constants/       # Global constants
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

## CI/CD Pipeline

GitHub Actions automatically runs on every push to `main`:
1. **Lint Check**: Validates code quality with Biome
2. **Build**: Ensures production build succeeds
3. **Release**: Automatically creates releases using semantic-release
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
