import { BaseWebAgent } from "./base-agent.js";
import { WebDecomposeResult, WebFramework, WebDatabaseOrm, WebAuthEngine, WebUiLibrary } from "../types.js";

export class WebPromptDecomposerAgent extends BaseWebAgent {
  constructor() {
    super("WebPromptDecomposerAgent", "Full-Stack Web Architect", "Decomposes vague prompts into structured P0/P1/P2 features, tech stack decisions, and execution sprints.");
  }

  public decompose(
    prompt: string,
    projectName = "NextApp",
    preferredFramework: WebFramework = "nextjs-app-router",
    preferredDatabase: WebDatabaseOrm = "prisma",
    preferredAuth: WebAuthEngine = "next-auth",
    preferredUi: WebUiLibrary = "shadcn-ui"
  ): WebDecomposeResult {
    this.log("INFO", `Decomposing full-stack web prompt for ${projectName}`);

    return {
      projectName,
      framework: preferredFramework,
      database: preferredDatabase,
      auth: preferredAuth,
      uiLibrary: preferredUi,
      features: [
        { id: "feat-1", name: "Core Layout & Modern UI", priority: "P0", description: "Responsive Next.js App Router layout with Tailwind CSS & shadcn/ui." },
        { id: "feat-2", name: "Database & CRUD Schema", priority: "P0", description: "Prisma/Drizzle ORM schema with PostgreSQL/SQLite connection pooling." },
        { id: "feat-3", name: "Type-Safe API & Server Actions", priority: "P0", description: "Next.js Route Handlers and React Server Actions with Zod validation." },
        { id: "feat-4", name: "Authentication & Protected Routes", priority: "P1", description: "NextAuth.js v5 / Clerk OAuth session management & middleware guards." },
        { id: "feat-5", name: "Interactive Dashboard & Metrics", priority: "P1", description: "Real-time interactive data tables, charts, and filtering." },
        { id: "feat-6", name: "Automated Testing & CI/CD", priority: "P2", description: "Vitest unit tests, Playwright E2E tests, and GitHub Actions CI." }
      ],
      directoryStructure: [
        { path: "src/app", description: "Next.js App Router pages, layouts, and route handlers" },
        { path: "src/components/ui", description: "Reusable shadcn/ui design primitives" },
        { path: "src/actions", description: "React Server Actions with Zod validation" },
        { path: "src/lib", description: "Prisma client, auth config, and utility functions" },
        { path: "prisma", description: "Prisma schema, migrations, and seed scripts" }
      ],
      executionPhases: [
        { phase: 1, title: "Project Foundation & Spec", tasks: ["Generate PRD, architecture, and design docs", "Setup GitHub repo with CI/CD", "Configure Next.js, Tailwind v4, & TypeScript"] },
        { phase: 2, title: "Database & Data Access Layer", tasks: ["Define ORM schema", "Generate Prisma/Drizzle client", "Implement CRUD Server Actions with Zod"] },
        { phase: 3, title: "Frontend Pages & UI Components", tasks: ["Build App Router layouts", "Create interactive dashboard views", "Integrate Lucide icons & toasts"] },
        { phase: 4, title: "Authentication & Security", tasks: ["Configure NextAuth/Clerk", "Setup middleware route guards", "Add CSRF protection"] },
        { phase: 5, title: "Testing, Optimization & Deployment", tasks: ["Write Vitest & Playwright test suites", "Optimize SSR & dynamic caching", "Deploy to Vercel/Docker"] }
      ]
    };
  }
}
