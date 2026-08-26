import { BaseWebAgent } from "./base-agent.js";
import { WebUiResult } from "../types.js";

export class WebUiSpecialistAgent extends BaseWebAgent {
  constructor() {
    super("WebUiSpecialistAgent", "Frontend UI / UX Specialist", "Generates production-ready Next.js / React components with Tailwind CSS and accessible shadcn/ui patterns.");
  }

  public designUi(screenName: string, description: string): WebUiResult {
    this.log("INFO", `Designing modern full-stack web UI for ${screenName}`);

    const componentCode = `"use client";

import React, { useState, useTransition } from "react";
import { LucideIcon, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export interface ${screenName}Props {
  initialTitle?: string;
  totalRecords?: number;
}

export const ${screenName}View: React.FC<${screenName}Props> = ({
  initialTitle = "${screenName}",
  totalRecords = 128
}) => {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            {initialTitle}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            ${description || "Manage, monitor, and configure your live full-stack system."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => startTransition(() => setFilter("all"))}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-sm"
          >
            Create Entry
          </button>
        </div>
      </header>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-sm font-medium">
            <span>Total Volume</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-2 text-2xl font-bold text-card-foreground">$48,250.00</div>
          <span className="text-xs text-emerald-500 font-medium">+14.2% from last month</span>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-sm font-medium">
            <span>Active Items</span>
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          <div className="mt-2 text-2xl font-bold text-card-foreground">{totalRecords}</div>
          <span className="text-xs text-muted-foreground">All operational</span>
        </div>
      </div>
    </div>
  );
};
`;

    const pageCode = `import { ${screenName}View } from "@/components/${screenName.toLowerCase()}-view";

export default async function ${screenName}Page() {
  return (
    <main className="min-h-screen bg-background py-8">
      <${screenName}View />
    </main>
  );
}
`;

    const stylesOrTailwind = `/* Tailwind CSS modern dark/light system */
@layer base {
  :root {
    --background: 220 20% 97%;
    --foreground: 224 71% 4%;
    --card: 0 0% 100%;
    --card-foreground: 224 71% 4%;
    --primary: 246 80% 60%;
    --primary-foreground: 210 20% 98%;
    --border: 220 13% 91%;
  }
  .dark {
    --background: 224 71% 4%;
    --foreground: 210 20% 98%;
    --card: 224 71% 7%;
    --card-foreground: 210 20% 98%;
    --primary: 246 80% 60%;
    --primary-foreground: 210 20% 98%;
    --border: 224 71% 12%;
  }
}
`;

    return {
      componentCode,
      pageCode,
      stylesOrTailwind,
      isClientComponent: true,
      summary: `Generated modern, responsive ${screenName} view with Next.js 15 Server/Client separation and KPI cards.`
    };
  }
}
