export type WebFramework = "nextjs-app-router" | "nextjs-pages-router" | "vite-react-spa" | "remix" | "astro";
export type WebDatabaseOrm = "prisma" | "drizzle" | "supabase" | "mongodb" | "none";
export type WebAuthEngine = "next-auth" | "clerk" | "supabase-auth" | "lucia" | "custom-jwt";
export type WebUiLibrary = "shadcn-ui" | "tailwind-v4" | "chakra-ui" | "mantine";

export interface WebDecomposeResult {
  projectName: string;
  framework: WebFramework;
  database: WebDatabaseOrm;
  auth: WebAuthEngine;
  uiLibrary: WebUiLibrary;
  features: Array<{ id: string; name: string; priority: "P0" | "P1" | "P2"; description: string }>;
  directoryStructure: Array<{ path: string; description: string }>;
  executionPhases: Array<{ phase: number; title: string; tasks: string[] }>;
}

export interface WebDocBlueprintResult {
  generatedFiles: Array<{ fileName: string; status: "created" | "skipped_already_exists" | "overwritten" }>;
  documents: Record<string, string>;
  summary: string;
}

export interface WebGithubSetupResult {
  repoName: string;
  gitIgnore: string;
  githubActionsCi: string;
  readme: string;
  setupCommands: string[];
  summary: string;
}

export interface WebUiResult {
  componentCode: string;
  pageCode: string;
  stylesOrTailwind: string;
  isClientComponent: boolean;
  summary: string;
}

export interface WebBackendResult {
  routeHandlerCode: string;
  serverActionCode: string;
  zodValidationCode: string;
  summary: string;
}

export interface WebDatabaseResult {
  schemaCode: string;
  dbClientCode: string;
  crudRepositoryCode: string;
  migrationCommand: string;
  summary: string;
}

export interface WebDependenciesResult {
  packageJson: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  installCommand: string;
  summary: string;
}

export interface WebDiagnosticResult {
  errorType: "HYDRATION_MISMATCH" | "SERVER_CLIENT_BOUNDARY" | "TYPESCRIPT_TYPE_ERROR" | "NEXT_ROUTING" | "DATABASE_CONNECTION" | "GENERAL";
  rootCause: string;
  suggestedFix: string;
  codeDiff?: string;
}

export interface WebTestResult {
  testCode: string;
  testRunner: "vitest" | "playwright" | "jest";
  runCommand: string;
  summary: string;
}

export interface WebAuthResult {
  authConfigCode: string;
  middlewareCode: string;
  loginComponentCode: string;
  sessionHookCode: string;
  summary: string;
}
