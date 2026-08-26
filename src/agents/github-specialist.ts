import { BaseWebAgent } from "./base-agent.js";
import { WebGithubSetupResult } from "../types.js";

export class WebGithubSpecialistAgent extends BaseWebAgent {
  constructor() {
    super("WebGithubSpecialistAgent", "GitHub & DevOps Setup Specialist", "Automates GitHub repository initialization, README, .gitignore, and GitHub Actions CI.");
  }

  public setupRepository(repoName = "nextjs-app", isPublic = true): WebGithubSetupResult {
    this.log("INFO", `Setting up GitHub repository & CI/CD workflow for ${repoName}`);

    const gitIgnore = `# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env
!.env.example

# typescript
*.tsbuildinfo
next-env.d.ts
`;

    const githubActionsCi = `name: Web CI Pipeline

on:
  push:
    branches: [ main, master, develop ]
  pull_request:
    branches: [ main, master ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run TypeScript type check
        run: npx tsc --noEmit

      - name: Run Next.js Build
        run: npm run build
`;

    const readme = `# ${repoName}

> Production-ready Full-Stack Web Application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Prisma ORM**.

---

## 🚀 Quick Start

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Configure Environment
\`\`\`bash
cp .env.example .env
\`\`\`

### 3. Run Database Migrations
\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

### 4. Start Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.
`;

    const setupCommands = [
      `git init`,
      `git add .`,
      `git commit -m "feat: initial commit for ${repoName} with Next.js 15 and full-stack architecture"`,
      `gh repo create ${repoName} ${isPublic ? "--public" : "--private"} --source=. --remote=origin --push`
    ];

    return {
      repoName,
      gitIgnore,
      githubActionsCi,
      readme,
      setupCommands,
      summary: `Generated full GitHub configuration, CI/CD workflow, .gitignore, and automated setup commands for ${repoName}.`
    };
  }
}
