import { BaseWebAgent } from "./base-agent.js";
import { WebPromptDecomposerAgent } from "./prompt-decomposer.js";
import { WebDocBlueprintSpecialistAgent } from "./doc-blueprint-specialist.js";
import { WebGithubSpecialistAgent } from "./github-specialist.js";
import { WebUiSpecialistAgent } from "./ui-specialist.js";
import { WebBackendSpecialistAgent } from "./backend-specialist.js";
import { WebDatabaseSpecialistAgent } from "./database-specialist.js";
import { WebDependencyResearcherAgent } from "./dependency-researcher.js";
export class WebMasterOrchestratorAgent extends BaseWebAgent {
    decomposer = new WebPromptDecomposerAgent();
    docs = new WebDocBlueprintSpecialistAgent();
    github = new WebGithubSpecialistAgent();
    ui = new WebUiSpecialistAgent();
    backend = new WebBackendSpecialistAgent();
    db = new WebDatabaseSpecialistAgent();
    deps = new WebDependencyResearcherAgent();
    constructor() {
        super("WebMasterOrchestratorAgent", "Master Web Project Orchestrator", "Coordinates end-to-end full-stack Next.js / Vite / React / TypeScript web generation.");
    }
    orchestrate(projectName, prompt) {
        this.log("INFO", `Orchestrating full-stack web project: ${projectName}`);
        const roadmap = this.decomposer.decompose(prompt, projectName);
        const docSuite = this.docs.scaffoldDocuments(projectName, prompt);
        const githubConfig = this.github.setupRepository(projectName);
        const dependencies = this.deps.researchDependencies(projectName);
        const dbSchema = this.db.scaffoldDatabase(projectName);
        const backendCode = this.backend.scaffoldBackend(projectName);
        const uiCode = this.ui.designUi(projectName, prompt);
        return {
            projectName,
            roadmap,
            docSuite,
            githubConfig,
            dependencies,
            dbSchema,
            backendCode,
            uiCode,
            summary: `Successfully orchestrated complete full-stack web project for ${projectName} (Next.js 15, React 19, Prisma, Tailwind v4, Zod, and GitHub CI).`
        };
    }
}
//# sourceMappingURL=master-orchestrator.js.map