import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";

import { WebPromptDecomposerAgent } from "./agents/prompt-decomposer.js";
import { WebDocBlueprintSpecialistAgent } from "./agents/doc-blueprint-specialist.js";
import { WebGithubSpecialistAgent } from "./agents/github-specialist.js";
import { WebUiSpecialistAgent } from "./agents/ui-specialist.js";
import { WebBackendSpecialistAgent } from "./agents/backend-specialist.js";
import { WebDatabaseSpecialistAgent } from "./agents/database-specialist.js";
import { WebDependencyResearcherAgent } from "./agents/dependency-researcher.js";
import { WebErrorDiagnosticianAgent } from "./agents/error-diagnostician.js";
import { WebTestingSpecialistAgent } from "./agents/testing-specialist.js";
import { WebAuthFlowSpecialistAgent } from "./agents/auth-flow-specialist.js";
import { WebMasterOrchestratorAgent } from "./agents/master-orchestrator.js";

const decomposer = new WebPromptDecomposerAgent();
const docs = new WebDocBlueprintSpecialistAgent();
const github = new WebGithubSpecialistAgent();
const ui = new WebUiSpecialistAgent();
const backend = new WebBackendSpecialistAgent();
const db = new WebDatabaseSpecialistAgent();
const deps = new WebDependencyResearcherAgent();
const doctor = new WebErrorDiagnosticianAgent();
const testGen = new WebTestingSpecialistAgent();
const auth = new WebAuthFlowSpecialistAgent();
const master = new WebMasterOrchestratorAgent();

export function createWebMcpServer(): Server {
  const server = new Server(
    { name: "web-agent-orchestrator-mcp", version: "1.0.0" },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: "decompose_web_prompt",
        description: "Breaks down vague prompts into structured P0/P1/P2 features, tech stack decisions, and execution sprints.",
        inputSchema: {
          type: "object",
          properties: {
            prompt: { type: "string", description: "The user prompt describing the web application" },
            projectName: { type: "string", description: "Optional project name" }
          },
          required: ["prompt"]
        }
      },
      {
        name: "scaffold_web_project_docs",
        description: "Generates prompt-tailored PRD.md, architecture.md, rules.md, phases.md, design.md, and memory.md with non-destructive checking.",
        inputSchema: {
          type: "object",
          properties: {
            projectName: { type: "string" },
            appDescription: { type: "string" },
            overwriteExisting: { type: "boolean" }
          },
          required: ["projectName"]
        }
      },
      {
        name: "setup_github_repository",
        description: "Automates GitHub repo creation, .gitignore, README.md, and GitHub Actions CI workflow.",
        inputSchema: {
          type: "object",
          properties: {
            repoName: { type: "string" },
            isPublic: { type: "boolean" }
          },
          required: ["repoName"]
        }
      },
      {
        name: "design_web_ui",
        description: "Generates responsive Next.js 15 / React 19 UI components with Tailwind CSS v4 and shadcn/ui patterns.",
        inputSchema: {
          type: "object",
          properties: {
            screenName: { type: "string" },
            description: { type: "string" }
          },
          required: ["screenName"]
        }
      },
      {
        name: "scaffold_web_backend",
        description: "Scaffolds type-safe Next.js Route Handlers, React Server Actions ('use server'), and Zod validation schemas.",
        inputSchema: {
          type: "object",
          properties: {
            domainName: { type: "string" }
          },
          required: ["domainName"]
        }
      },
      {
        name: "scaffold_web_database",
        description: "Scaffolds Prisma / Drizzle ORM schema, singleton connection client, and CRUD repositories.",
        inputSchema: {
          type: "object",
          properties: {
            domainName: { type: "string" }
          },
          required: ["domainName"]
        }
      },
      {
        name: "research_web_dependencies",
        description: "Resolves exact, compatible package.json dependencies for Next.js 15, React 19, Tailwind v4, and Prisma.",
        inputSchema: {
          type: "object",
          properties: {
            appName: { type: "string" }
          }
        }
      },
      {
        name: "diagnose_web_errors",
        description: "Diagnoses hydration mismatches, Server/Client Component boundary errors, and TypeScript issues.",
        inputSchema: {
          type: "object",
          properties: {
            errorMessage: { type: "string" }
          },
          required: ["errorMessage"]
        }
      },
      {
        name: "generate_and_run_web_tests",
        description: "Generates Vitest unit tests for Server Actions and Playwright E2E smoke tests.",
        inputSchema: {
          type: "object",
          properties: {
            moduleName: { type: "string" }
          },
          required: ["moduleName"]
        }
      },
      {
        name: "scaffold_web_auth_flow",
        description: "Scaffolds NextAuth.js v5 / Clerk OAuth session providers, route guards, and LoginCard UI.",
        inputSchema: {
          type: "object",
          properties: {
            appName: { type: "string" }
          }
        }
      },
      {
        name: "orchestrate_web_project",
        description: "Master coordinator that executes end-to-end full-stack Next.js project generation.",
        inputSchema: {
          type: "object",
          properties: {
            projectName: { type: "string" },
            prompt: { type: "string" }
          },
          required: ["projectName", "prompt"]
        }
      }
    ]
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args = {} } = request.params;
    let res: any;

    switch (name) {
      case "decompose_web_prompt":
        res = decomposer.decompose(
          (args as any).prompt || "Build a modern full-stack web application",
          (args as any).projectName || "NextApp"
        );
        break;

      case "scaffold_web_project_docs":
        res = docs.scaffoldDocuments(
          (args as any).projectName || "NextApp",
          (args as any).appDescription || "A high-performance full-stack web application",
          process.cwd(),
          (args as any).overwriteExisting || false
        );
        break;

      case "setup_github_repository":
        res = github.setupRepository(
          (args as any).repoName || "nextjs-app",
          (args as any).isPublic !== false
        );
        break;

      case "design_web_ui":
        res = ui.designUi(
          (args as any).screenName || "Dashboard",
          (args as any).description || "Main application dashboard view"
        );
        break;

      case "scaffold_web_backend":
        res = backend.scaffoldBackend((args as any).domainName || "Item");
        break;

      case "scaffold_web_database":
        res = db.scaffoldDatabase((args as any).domainName || "Item");
        break;

      case "research_web_dependencies":
        res = deps.researchDependencies((args as any).appName || "web-app");
        break;

      case "diagnose_web_errors":
        res = doctor.diagnose((args as any).errorMessage || "");
        break;

      case "generate_and_run_web_tests":
        res = testGen.generateTest((args as any).moduleName || "ItemAction");
        break;

      case "scaffold_web_auth_flow":
        res = auth.scaffoldAuthFlow((args as any).appName || "WebApp");
        break;

      case "orchestrate_web_project":
        res = master.orchestrate(
          (args as any).projectName || "NextApp",
          (args as any).prompt || "Build a modern full-stack Next.js application"
        );
        break;

      default:
        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
    }

    return {
      content: [{ type: "text", text: JSON.stringify(res, null, 2) }]
    };
  });

  return server;
}

export async function runServer() {
  const server = createWebMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[web-agent-orchestrator] MCP Server running on stdio.");
}

if (process.argv[1] && import.meta.url === `file:///${process.argv[1].replace(/\\/g, "/")}`) {
  runServer().catch((err) => {
    console.error("[web-agent-orchestrator] Fatal error:", err);
    process.exit(1);
  });
}
