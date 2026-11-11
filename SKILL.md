---
name: web-orchestrator
description: "Multi-agent orchestrator for rapidly designing, documenting, scaffolding, testing, and pushing full-stack Web applications (Next.js 15 App Router, React 19, Vite, TypeScript, Tailwind CSS v4, Prisma / Drizzle ORM, Zod, and NextAuth.js). Provides 11 specialized tools for prompt decomposition, docs scaffolding, GitHub setup, UI design, backend scaffolding, database setup, dependency research, error diagnostics, automated testing, and auth flow."
---

# Next.js / Vite / React / TypeScript Multi-Agent Orchestrator (MCP Server & Skill)

> **Enterprise-grade Multi-Agent System & Model Context Protocol (MCP) Server for rapidly designing, documenting, scaffolding, testing, and pushing full-stack Web applications (Next.js 15 App Router, React 19, Vite, TypeScript, Tailwind CSS v4, Prisma / Drizzle ORM, Zod, and NextAuth.js).**

---

## 🌟 Specialized Agent Roster

| Agent Name | MCP Tool Name | Description & Key Responsibilities | How to Call |
| :--- | :--- | :--- | :--- |
| 🧩 **Prompt Architect** | `decompose_web_prompt` | Decomposes vague user prompts into prioritized P0/P1/P2 features, tech stack decisions, and execution sprints. | `decompose_web_prompt({ prompt: "Build an AI SaaS platform" })` |
| 📑 **Blueprint Architect** | `scaffold_web_project_docs` | Generates prompt-tailored \`PRD.md\`, \`architecture.md\`, \`rules.md\`, \`phases.md\`, \`design.md\`, and \`memory.md\` with check-before-write safety. | `scaffold_web_project_docs({ projectName: "AISaaS", appDescription: "..." })` |
| 🐙 **GitHub & DevOps Specialist** | `setup_github_repository` | Generates \`.gitignore\`, GitHub Actions CI pipeline, README, and automated \`gh repo create\` commands. | `setup_github_repository({ repoName: "ai-saas-app", isPublic: true })` |
| 🎨 **Frontend UI / UX Specialist** | `design_web_ui` | Generates responsive Next.js 15 / React 19 UI components with Tailwind CSS v4 and accessible shadcn/ui patterns. | `design_web_ui({ screenName: "Dashboard", description: "Analytics dashboard" })` |
| ⚙️ **Backend & API Architect** | `scaffold_web_backend` | Scaffolds type-safe Next.js Route Handlers, React Server Actions (\`"use server"\`), and Zod validation schemas. | `scaffold_web_backend({ domainName: "Invoice" })` |
| 💾 **Database & ORM Specialist** | `scaffold_web_database` | Scaffolds Prisma / Drizzle ORM schemas, singleton connection pool, and type-safe CRUD repositories. | `scaffold_web_database({ domainName: "Invoice" })` |
| 🌐 **Dependency Specialist** | `research_web_dependencies` | Resolves exact, compatible \`package.json\` dependencies for Next.js 15, React 19, Tailwind v4, and Prisma. | `research_web_dependencies({ appName: "ai-saas" })` |
| 🩺 **Compiler Doctor** | `diagnose_web_errors` | Diagnoses hydration mismatches, Server/Client Component boundary errors, and TypeScript type issues. | `diagnose_web_errors({ errorMessage: "Hydration failed..." })` |
| 🧪 **QA & Testing Specialist** | `generate_and_run_web_tests` | Generates Vitest unit tests for Server Actions and Playwright E2E smoke tests. | `generate_and_run_web_tests({ moduleName: "InvoiceAction" })` |
| 🔐 **Auth & Security Specialist** | `scaffold_web_auth_flow` | Scaffolds NextAuth.js v5 / Clerk OAuth session providers, route guards, and LoginCard UI. | `scaffold_web_auth_flow({ appName: "AISaaS" })` |
| 🚀 **Master Web Orchestrator** | `orchestrate_web_project` | Coordinates end-to-end full-stack project generation from prompt to working codebase and GitHub setup. | `orchestrate_web_project({ projectName: "AISaaS", prompt: "..." })` |

---

## 📦 Installation & Setup

```bash
cd D:\web-agent-orchestrator
npm install
npm run build
npm test
npm link
```
