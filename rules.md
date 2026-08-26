# Engineering Rules & Code Standards: SaaSPortal

## 1. Next.js & React 19 Standards
- **Server Components by Default**: All components in `src/app` are React Server Components (RSC) unless interactivity (`useState`, `useEffect`, event handlers) requires `"use client"`.
- **Server Actions for Mutations**: Use `"use server"` actions with Zod validation. Always return a discriminated union `{ success: true, data } | { success: false, error }`.
- **No Direct Secrets in Client**: Secrets (`DATABASE_URL`, `AUTH_SECRET`) must NEVER be exposed to the client. Only prefix client variables with `NEXT_PUBLIC_`.

## 2. TypeScript & Styling Guidelines
- **Strict TypeScript**: No `any`. Define type-safe interfaces for all models and DTOs.
- **Tailwind CSS & shadcn/ui**: Use utility classes with `cn()` helper for conditional merging.
- **Accessibility (a11y)**: All interactive elements must have visible focus rings, ARIA labels, and keyboard navigability (WCAG 2.1 AA).
