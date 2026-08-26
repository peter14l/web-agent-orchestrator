import test from "node:test";
import assert from "node:assert";

import { WebPromptDecomposerAgent } from "../dist/agents/prompt-decomposer.js";
import { WebDocBlueprintSpecialistAgent } from "../dist/agents/doc-blueprint-specialist.js";
import { WebGithubSpecialistAgent } from "../dist/agents/github-specialist.js";
import { WebUiSpecialistAgent } from "../dist/agents/ui-specialist.js";
import { WebBackendSpecialistAgent } from "../dist/agents/backend-specialist.js";
import { WebDatabaseSpecialistAgent } from "../dist/agents/database-specialist.js";
import { WebDependencyResearcherAgent } from "../dist/agents/dependency-researcher.js";
import { WebErrorDiagnosticianAgent } from "../dist/agents/error-diagnostician.js";
import { WebTestingSpecialistAgent } from "../dist/agents/testing-specialist.js";
import { WebAuthFlowSpecialistAgent } from "../dist/agents/auth-flow-specialist.js";
import { WebMasterOrchestratorAgent } from "../dist/agents/master-orchestrator.js";

test("WebPromptDecomposerAgent decomposes vague prompt into structured roadmap", () => {
  const agent = new WebPromptDecomposerAgent();
  const res = agent.decompose("Build an enterprise SaaS billing portal", "BillingPortal");
  assert.strictEqual(res.projectName, "BillingPortal");
  assert.ok(res.features.length >= 4);
  assert.ok(res.executionPhases.length >= 3);
});

test("WebDocBlueprintSpecialistAgent scaffolds PRD, architecture, rules, phases, design, memory docs", () => {
  const agent = new WebDocBlueprintSpecialistAgent();
  const res = agent.scaffoldDocuments("SaaSPortal", "A modern billing portal");
  assert.strictEqual(res.generatedFiles.length, 6);
  assert.ok(res.documents["PRD.md"].includes("Product Requirements Document"));
  assert.ok(res.documents["architecture.md"].includes("Next.js 15"));
});

test("WebGithubSpecialistAgent generates repo config, .gitignore, and CI workflow", () => {
  const agent = new WebGithubSpecialistAgent();
  const res = agent.setupRepository("my-saas-app", true);
  assert.ok(res.gitIgnore.includes("/node_modules"));
  assert.ok(res.githubActionsCi.includes("npm run build"));
  assert.ok(res.setupCommands.length >= 3);
});

test("WebUiSpecialistAgent designs Next.js 15 component with Tailwind and KPI cards", () => {
  const agent = new WebUiSpecialistAgent();
  const res = agent.designUi("Dashboard", "Main billing dashboard");
  assert.ok(res.componentCode.includes("use client"));
  assert.ok(res.pageCode.includes("DashboardPage"));
});

test("WebBackendSpecialistAgent scaffolds Server Actions, Route Handlers, and Zod schemas", () => {
  const agent = new WebBackendSpecialistAgent();
  const res = agent.scaffoldBackend("Invoice");
  assert.ok(res.serverActionCode.includes('"use server"'));
  assert.ok(res.zodValidationCode.includes("CreateInvoiceSchema"));
  assert.ok(res.routeHandlerCode.includes("NextResponse.json"));
});

test("WebDatabaseSpecialistAgent scaffolds Prisma schema and CRUD repository", () => {
  const agent = new WebDatabaseSpecialistAgent();
  const res = agent.scaffoldDatabase("Invoice");
  assert.ok(res.schemaCode.includes("model Invoice"));
  assert.ok(res.crudRepositoryCode.includes("createInvoice"));
});

test("WebDependencyResearcherAgent resolves Next.js 15 and React 19 dependencies", () => {
  const agent = new WebDependencyResearcherAgent();
  const res = agent.researchDependencies("billing-app");
  assert.ok(res.dependencies["next"].includes("15"));
  assert.ok(res.dependencies["react"].includes("19"));
});

test("WebErrorDiagnosticianAgent correctly identifies hydration mismatches", () => {
  const agent = new WebErrorDiagnosticianAgent();
  const res = agent.diagnose("Error: Hydration failed because the initial UI does not match");
  assert.strictEqual(res.errorType, "HYDRATION_MISMATCH");
  assert.ok(res.suggestedFix.length > 0);
});

test("WebTestingSpecialistAgent generates Vitest unit test suite", () => {
  const agent = new WebTestingSpecialistAgent();
  const res = agent.generateTest("InvoiceAction");
  assert.ok(res.testCode.includes("describe"));
  assert.strictEqual(res.testRunner, "vitest");
});

test("WebAuthFlowSpecialistAgent scaffolds NextAuth v5 session guards", () => {
  const agent = new WebAuthFlowSpecialistAgent();
  const res = agent.scaffoldAuthFlow("BillingApp");
  assert.ok(res.authConfigCode.includes("NextAuth"));
  assert.ok(res.middlewareCode.includes("middleware"));
});

test("WebMasterOrchestratorAgent executes complete end-to-end web generation pipeline", () => {
  const agent = new WebMasterOrchestratorAgent();
  const res = agent.orchestrate("BillingApp", "A complete billing SaaS platform");
  assert.strictEqual(res.projectName, "BillingApp");
  assert.ok(res.roadmap.features.length > 0);
  assert.ok(res.docSuite.generatedFiles.length === 6);
  assert.ok(res.githubConfig.setupCommands.length > 0);
});
