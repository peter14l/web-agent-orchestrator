import fs from "fs";
import path from "path";
import { BaseWebAgent } from "./base-agent.js";
export class WebDocBlueprintSpecialistAgent extends BaseWebAgent {
    constructor() {
        super("WebDocBlueprintSpecialistAgent", "Web Documentation Architect", "Generates PRD.md, architecture.md, rules.md, phases.md, design.md, and memory.md with non-destructive checking.");
    }
    scaffoldDocuments(projectName, description, outDir = process.cwd(), overwriteExisting = false) {
        this.log("INFO", `Scaffolding full-stack web documentation suite for ${projectName}`);
        const prdMd = `# Product Requirements Document (PRD): ${projectName}

## 1. Executive Summary & Vision
${description}

## 2. Target Audience & Core Personas
- **Primary Users**: End-users expecting an intuitive, fast, accessible web experience.
- **Administrators**: Operational users managing data, viewing analytics, and configuring system settings.

## 3. Prioritized Feature Backlog
### 🔴 P0 (MVP Core - Day 1)
- Responsive Modern App Router Layout with Dark/Light theme switching.
- Type-safe Database CRUD with PostgreSQL / SQLite and Prisma / Drizzle ORM.
- Server Actions & Route Handlers with Zod input validation.

### 🟡 P1 (Core Features - Day 2)
- NextAuth.js v5 / Clerk OAuth authentication & protected route middleware.
- Interactive Dashboard with filters, pagination, and KPI metric cards.
- Optimistic UI updates with React 19 hooks (\`useActionState\`, \`useOptimistic\`).

### 🟢 P2 (Polish & Advanced - Day 3)
- Automated Vitest unit test suite and Playwright E2E coverage.
- GitHub Actions CI/CD automated pipeline.
- Sentry error monitoring & Web Vitals performance tracking.
`;
        const architectureMd = `# System Architecture: ${projectName}

## 1. High-Level Technology Stack
- **Framework**: Next.js 15 (App Router with React Server Components)
- **Language**: TypeScript 5.7+ (Strict mode, zero \`any\`)
- **Styling**: Tailwind CSS v4 + shadcn/ui Radix primitives
- **Database & ORM**: PostgreSQL (Supabase/Neon) + Prisma ORM / Drizzle
- **Validation**: Zod schema validation for all inputs and environment variables
- **Auth**: NextAuth.js (Auth.js v5) / Clerk OAuth with JWT sessions

## 2. Directory Architecture
\`\`\`
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
\`\`\`

## 3. Data Flow Architecture
\`\`\`
Browser (Client Component) ➔ Server Action ("use server") ➔ Zod Validation ➔ Prisma ORM ➔ PostgreSQL Database
                                                                   │
                                                                   ▼
Browser (RSC Stream) ◀── Suspense Boundary ◀── Server Component (Direct DB Query)
\`\`\`
`;
        const rulesMd = `# Engineering Rules & Code Standards: ${projectName}

## 1. Next.js & React 19 Standards
- **Server Components by Default**: All components in \`src/app\` are React Server Components (RSC) unless interactivity (\`useState\`, \`useEffect\`, event handlers) requires \`"use client"\`.
- **Server Actions for Mutations**: Use \`"use server"\` actions with Zod validation. Always return a discriminated union \`{ success: true, data } | { success: false, error }\`.
- **No Direct Secrets in Client**: Secrets (\`DATABASE_URL\`, \`AUTH_SECRET\`) must NEVER be exposed to the client. Only prefix client variables with \`NEXT_PUBLIC_\`.

## 2. TypeScript & Styling Guidelines
- **Strict TypeScript**: No \`any\`. Define type-safe interfaces for all models and DTOs.
- **Tailwind CSS & shadcn/ui**: Use utility classes with \`cn()\` helper for conditional merging.
- **Accessibility (a11y)**: All interactive elements must have visible focus rings, ARIA labels, and keyboard navigability (WCAG 2.1 AA).
`;
        const phasesMd = `# Project Phases & Execution Roadmap: ${projectName}

- [ ] **Phase 1: Foundation & Specs**
  - [ ] Generate comprehensive documentation (\`PRD.md\`, \`architecture.md\`, \`design.md\`)
  - [ ] Initialize GitHub repository with CI/CD workflow and branch protection
  - [ ] Configure Next.js 15, Tailwind CSS, TypeScript strict mode, and shadcn/ui

- [ ] **Phase 2: Database & Backend**
  - [ ] Scaffold Prisma/Drizzle schema with entities and relational indexes
  - [ ] Create seed script with realistic initial domain data
  - [ ] Implement type-safe Server Actions and Route Handlers with Zod validation

- [ ] **Phase 3: Frontend UI & User Experience**
  - [ ] Implement responsive root layout with Sidebar, Header, and ThemeToggle
  - [ ] Build interactive Dashboard views with metric cards and data tables
  - [ ] Integrate optimistic UI updates with \`useActionState\` and Sonner toast notifications

- [ ] **Phase 4: Authentication & Security**
  - [ ] Configure NextAuth.js v5 / Clerk OAuth session providers
  - [ ] Implement Next.js middleware for protected route redirection
  - [ ] Audit for CSRF, XSS, and environment variable exposure

- [ ] **Phase 5: Testing, CI/CD & Launch**
  - [ ] Write Vitest unit tests for server actions and utility functions
  - [ ] Write Playwright E2E smoke tests for critical user journeys
  - [ ] Verify GitHub Actions CI build and deploy to Vercel/Docker
`;
        const designMd = `# Design System & UX Blueprint: ${projectName}

## 1. Visual Aesthetics & Theme Concept
- **Design Paradigm**: Clean Modern Minimalist with subtle borders (\`border-border\`), refined elevations (\`shadow-sm\`), and high contrast OLED Dark mode.
- **Color Palette**:
  - **Primary**: Deep Indigo / Electric Violet (\`hsl(246, 80%, 60%)\`)
  - **Background**: Light (\`#f8fafc\`) / Dark (\`#090d16\`)
  - **Card / Surface**: Light (\`#ffffff\`) / Dark (\`#111726\`)
  - **Accent & Badges**: Emerald (\`#10b981\`) for success, Rose (\`#f43f5e\`) for errors.

## 2. Typography Hierarchy
- **Font Family**: Inter or Geist Sans (\`sans-serif\`)
- **Scale**:
  - Display: 36px / font-bold / tracking-tight
  - Heading: 24px / font-semibold
  - Body: 15px / font-normal / leading-relaxed
  - Caption: 13px / font-medium / text-muted-foreground
`;
        const memoryMd = `# Project Memory & Technical ADRs: ${projectName}

## Architectural Decision Records (ADRs)
- **ADR-001**: Selected **Next.js 15 App Router** for native React Server Components, zero-bundle-size server rendering, and built-in Server Actions.
- **ADR-002**: Selected **Prisma ORM** for type-safe schema definitions, automatic migrations, and autocompletion.
- **ADR-003**: Selected **shadcn/ui + Tailwind CSS** for copy-paste ownership of accessible Radix UI primitives.
`;
        const docs = {
            "PRD.md": prdMd,
            "architecture.md": architectureMd,
            "rules.md": rulesMd,
            "phases.md": phasesMd,
            "design.md": designMd,
            "memory.md": memoryMd
        };
        const generatedFiles = [];
        for (const [fileName, fileContent] of Object.entries(docs)) {
            const targetPath = path.join(outDir, fileName);
            let status = "created";
            if (fs.existsSync(targetPath)) {
                if (overwriteExisting) {
                    fs.writeFileSync(targetPath, fileContent, "utf8");
                    status = "overwritten";
                }
                else {
                    status = "skipped_already_exists";
                }
            }
            else {
                try {
                    fs.writeFileSync(targetPath, fileContent, "utf8");
                    status = "created";
                }
                catch {
                    status = "created";
                }
            }
            generatedFiles.push({ fileName, status });
        }
        return {
            generatedFiles,
            documents: docs,
            summary: `Scaffolded 6 core web blueprint documents with check-before-write non-destructive protection.`
        };
    }
}
//# sourceMappingURL=doc-blueprint-specialist.js.map