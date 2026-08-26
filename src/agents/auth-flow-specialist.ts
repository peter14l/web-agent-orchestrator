import { BaseWebAgent } from "./base-agent.js";
import { WebAuthResult } from "../types.js";

export class WebAuthFlowSpecialistAgent extends BaseWebAgent {
  constructor() {
    super("WebAuthFlowSpecialistAgent", "Authentication & Security Specialist", "Scaffolds NextAuth.js v5 / Clerk OAuth flows, route guards, and session middleware.");
  }

  public scaffoldAuthFlow(appName = "WebApp"): WebAuthResult {
    this.log("INFO", `Scaffolding authentication & session flow for ${appName}`);

    const authConfigCode = `import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login
      }
      return true;
    }
  }
});
`;

    const middlewareCode = `export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
`;

    const loginComponentCode = `"use client";

import { signIn } from "next-auth/react";
import { Lock } from "lucide-react";

export function LoginCard() {
  return (
    <div className="max-w-md mx-auto p-8 rounded-3xl bg-card border border-border shadow-lg text-center space-y-6">
      <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
        <Lock className="w-6 h-6" />
      </div>
      <h2 className="text-2xl font-bold">Welcome Back</h2>
      <p className="text-sm text-muted-foreground">Sign in with your preferred identity provider</p>
      <button
        onClick={() => signIn("github", { redirectTo: "/dashboard" })}
        className="w-full py-3 px-4 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition shadow-sm"
      >
        Continue with GitHub
      </button>
    </div>
  );
}
`;

    const sessionHookCode = `import { auth } from "@/lib/auth";

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}
`;

    return {
      authConfigCode,
      middlewareCode,
      loginComponentCode,
      sessionHookCode,
      summary: `Scaffolded NextAuth.js v5 OAuth flow, middleware route guard, and modern LoginCard UI.`
    };
  }
}
