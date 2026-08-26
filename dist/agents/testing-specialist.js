import { BaseWebAgent } from "./base-agent.js";
export class WebTestingSpecialistAgent extends BaseWebAgent {
    constructor() {
        super("WebTestingSpecialistAgent", "Web QA & Testing Specialist", "Generates Vitest unit tests for Server Actions and Playwright E2E smoke tests.");
    }
    generateTest(moduleName = "ItemAction") {
        this.log("INFO", `Generating test suite for ${moduleName}`);
        const testCode = `import { describe, it, expect, vi } from "vitest";
import { create${moduleName}Action } from "@/actions/${moduleName.toLowerCase()}";

describe("${moduleName} Server Action", () => {
  it("validates input and returns success", async () => {
    const input = { title: "Test Entity", amount: 99.99, category: "Software" };
    const result = await create${moduleName}Action(input);
    expect(result.success).toBe(true);
  });

  it("fails gracefully when input validation fails", async () => {
    const invalidInput = { title: "", amount: -5, category: "" };
    const result = await create${moduleName}Action(invalidInput as any);
    expect(result.success).toBe(false);
  });
});
`;
        return {
            testCode,
            testRunner: "vitest",
            runCommand: "npx vitest run",
            summary: `Generated Vitest unit test suite testing successful and error paths for ${moduleName}.`
        };
    }
}
//# sourceMappingURL=testing-specialist.js.map