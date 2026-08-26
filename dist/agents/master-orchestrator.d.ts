import { BaseWebAgent } from "./base-agent.js";
export declare class WebMasterOrchestratorAgent extends BaseWebAgent {
    private decomposer;
    private docs;
    private github;
    private ui;
    private backend;
    private db;
    private deps;
    constructor();
    orchestrate(projectName: string, prompt: string): {
        projectName: string;
        roadmap: import("../types.js").WebDecomposeResult;
        docSuite: import("../types.js").WebDocBlueprintResult;
        githubConfig: import("../types.js").WebGithubSetupResult;
        dependencies: import("../types.js").WebDependenciesResult;
        dbSchema: import("../types.js").WebDatabaseResult;
        backendCode: import("../types.js").WebBackendResult;
        uiCode: import("../types.js").WebUiResult;
        summary: string;
    };
}
//# sourceMappingURL=master-orchestrator.d.ts.map