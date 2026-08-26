import { BaseWebAgent } from "./base-agent.js";
export class WebErrorDiagnosticianAgent extends BaseWebAgent {
    constructor() {
        super("WebErrorDiagnosticianAgent", "Next.js & TypeScript Compiler Doctor", "Diagnoses hydration errors, Server/Client boundary issues, routing bugs, and database failures.");
    }
    diagnose(errorText) {
        this.log("INFO", "Analyzing Next.js / TypeScript compilation or runtime error");
        if (errorText.includes("Hydration failed") || errorText.includes("Text content does not match")) {
            return {
                errorType: "HYDRATION_MISMATCH",
                rootCause: "Server-rendered HTML output differed from client initial render (e.g. using window, Date.now(), or browser-only APIs during SSR).",
                suggestedFix: "Wrap client-only dynamic elements in a useEffect hook or use dynamic(..., { ssr: false }).",
                codeDiff: `- const [time] = useState(Date.now());\n+ const [time, setTime] = useState<number | null>(null);\n+ useEffect(() => setTime(Date.now()), []);`
            };
        }
        if (errorText.includes("Event handlers cannot be passed to Client Component props")) {
            return {
                errorType: "SERVER_CLIENT_BOUNDARY",
                rootCause: "Attempted to pass a server action or callback function across Server Component boundary without marking target as 'use client'.",
                suggestedFix: "Add 'use client' at the top of the interactive component file."
            };
        }
        return {
            errorType: "GENERAL",
            rootCause: "General TypeScript or Next.js build issue.",
            suggestedFix: "Run 'npx tsc --noEmit' and inspect Next.js App Router route segments."
        };
    }
}
//# sourceMappingURL=error-diagnostician.js.map