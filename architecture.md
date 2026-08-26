# System Architecture: SaaSPortal

## 1. High-Level Technology Stack
- **Framework**: Next.js 15 (App Router with React Server Components)
- **Language**: TypeScript 5.7+ (Strict mode, zero `any`)
- **Styling**: Tailwind CSS v4 + shadcn/ui Radix primitives
- **Database & ORM**: PostgreSQL (Supabase/Neon) + Prisma ORM / Drizzle
- **Validation**: Zod schema validation for all inputs and environment variables
- **Auth**: NextAuth.js (Auth.js v5) / Clerk OAuth with JWT sessions

## 2. Directory Architecture
```
├── .github/workflows/ci.yml       # Automated GitHub Actions CI pipeline
├── prisma/schema.prisma           # Prisma Database schema & migrations
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (auth)/                # Route group: login, signup
│   │   ├── (dashboard)/           # Route group: main authenticated views
│   │   ├── api/                   # Route handlers (REST / Webhooks)
│   │   ├── layout.tsx             # Root layout with ThemeProvider & Providers
│   │   └── page.tsx               # Landing page / Home
│   ├── actions/                   # Type-safe React Server Actions ("use server")
│   ├── components/                # React UI components
│   │   ├── ui/                    # Reusable shadcn/ui primitives
│   │   └── shared/                # Navbar, Sidebar, Footer, ThemeToggle
│   ├── lib/                       # Prisma client, auth options, utilities (cn)
│   └── types/                     # TypeScript shared interfaces & DTOs
└── PRD.md, architecture.md, rules.md, phases.md, design.md, memory.md
```

## 3. Data Flow Architecture
```
Browser (Client Component) ➔ Server Action ("use server") ➔ Zod Validation ➔ Prisma ORM ➔ PostgreSQL Database
                                                                   │
                                                                   ▼
Browser (RSC Stream) ◀── Suspense Boundary ◀── Server Component (Direct DB Query)
```
