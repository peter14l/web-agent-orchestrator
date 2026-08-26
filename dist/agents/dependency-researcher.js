import { BaseWebAgent } from "./base-agent.js";
export class WebDependencyResearcherAgent extends BaseWebAgent {
    constructor() {
        super("WebDependencyResearcherAgent", "NPM & Dependency Specialist", "Researches and generates modern Next.js 15, React 19, Tailwind CSS, and shadcn/ui package dependencies.");
    }
    researchDependencies(appName = "web-app") {
        this.log("INFO", `Resolving dependencies for Next.js 15 full-stack app: ${appName}`);
        const dependencies = {
            "next": "^15.1.0",
            "react": "^19.0.0",
            "react-dom": "^19.0.0",
            "@prisma/client": "^6.0.0",
            "next-auth": "^5.0.0-beta.25",
            "zod": "^3.24.1",
            "lucide-react": "^0.468.0",
            "clsx": "^2.1.1",
            "tailwind-merge": "^2.5.5",
            "sonner": "^1.7.1"
        };
        const devDependencies = {
            "typescript": "^5.7.2",
            "@types/node": "^22.10.2",
            "@types/react": "^19.0.1",
            "@types/react-dom": "^19.0.1",
            "tailwindcss": "^4.0.0",
            "prisma": "^6.0.0",
            "vitest": "^2.1.8"
        };
        const packageJson = JSON.stringify({
            name: appName,
            version: "0.1.0",
            private: true,
            scripts: {
                "dev": "next dev",
                "build": "next build",
                "start": "next start",
                "test": "vitest run"
            },
            dependencies,
            devDependencies
        }, null, 2);
        return {
            packageJson,
            dependencies,
            devDependencies,
            installCommand: "npm install",
            summary: `Resolved production-ready Next.js 15, React 19, Tailwind v4, Prisma, and Zod dependencies.`
        };
    }
}
//# sourceMappingURL=dependency-researcher.js.map