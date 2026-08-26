import { BaseWebAgent } from "./base-agent.js";
import { WebBackendResult } from "../types.js";

export class WebBackendSpecialistAgent extends BaseWebAgent {
  constructor() {
    super("WebBackendSpecialistAgent", "Full-Stack Backend & API Architect", "Scaffolds Next.js Route Handlers, React Server Actions, and Zod validation schemas.");
  }

  public scaffoldBackend(domainName = "Item"): WebBackendResult {
    this.log("INFO", `Scaffolding full-stack backend routes & Server Actions for ${domainName}`);
    const snake = domainName.toLowerCase();

    const zodValidationCode = `import { z } from "zod";

export const Create${domainName}Schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  description: z.string().optional(),
  amount: z.number().positive("Amount must be greater than zero"),
  category: z.string().min(1, "Category is required")
});

export type Create${domainName}Input = z.infer<typeof Create${domainName}Schema>;
`;

    const serverActionCode = `"use server";

import { revalidatePath } from "next/cache";
import { Create${domainName}Schema, Create${domainName}Input } from "@/lib/validations/${snake}";

export type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

export async function create${domainName}Action(input: Create${domainName}Input): Promise<ActionResult<{ id: string }>> {
  try {
    const validated = Create${domainName}Schema.parse(input);
    // Persist via Prisma / Database
    console.log("Persisting ${domainName}:", validated);

    revalidatePath("/${snake}s");
    return { success: true, data: { id: "record_" + Date.now() } };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to create ${domainName}" };
  }
}
`;

    const routeHandlerCode = `import { NextResponse } from "next/server";
import { Create${domainName}Schema } from "@/lib/validations/${snake}";

export async function GET() {
  return NextResponse.json({
    items: [
      { id: "1", title: "Primary ${domainName} Node", status: "Active" },
      { id: "2", title: "Secondary ${domainName} Pipeline", status: "Pending" }
    ]
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = Create${domainName}Schema.parse(body);
    return NextResponse.json({ success: true, data: validated }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
`;

    return {
      routeHandlerCode,
      serverActionCode,
      zodValidationCode,
      summary: `Scaffolded type-safe Server Actions, Route Handlers (GET/POST), and Zod validation schemas for ${domainName}.`
    };
  }
}
