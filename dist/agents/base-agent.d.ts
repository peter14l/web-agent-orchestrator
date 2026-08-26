export declare abstract class BaseWebAgent {
    readonly name: string;
    readonly role: string;
    readonly description: string;
    constructor(name: string, role: string, description: string);
    protected log(level: "INFO" | "WARN" | "ERROR", message: string): void;
}
//# sourceMappingURL=base-agent.d.ts.map