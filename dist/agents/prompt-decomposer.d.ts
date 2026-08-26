import { BaseWebAgent } from "./base-agent.js";
import { WebDecomposeResult, WebFramework, WebDatabaseOrm, WebAuthEngine, WebUiLibrary } from "../types.js";
export declare class WebPromptDecomposerAgent extends BaseWebAgent {
    constructor();
    decompose(prompt: string, projectName?: string, preferredFramework?: WebFramework, preferredDatabase?: WebDatabaseOrm, preferredAuth?: WebAuthEngine, preferredUi?: WebUiLibrary): WebDecomposeResult;
}
//# sourceMappingURL=prompt-decomposer.d.ts.map