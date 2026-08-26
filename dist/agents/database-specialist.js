import { BaseWebAgent } from "./base-agent.js";
export class WebDatabaseSpecialistAgent extends BaseWebAgent {
    constructor() {
        super("WebDatabaseSpecialistAgent", "Database & ORM Architect", "Scaffolds Prisma / Drizzle ORM schemas, database connection pooling, and CRUD repositories.");
    }
    scaffoldDatabase(domainName = "Item") {
        this.log("INFO", `Scaffolding Prisma ORM schema & repository for ${domainName}`);
        const schemaCode = `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  items     ${domainName}[]
}

model ${domainName} {
  id          String   @id @default(cuid())
  title       String
  description String?
  amount      Float    @default(0.0)
  status      String   @default("ACTIVE")
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId])
}
`;
        const dbClientCode = `import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
`;
        const crudRepositoryCode = `import { prisma } from "@/lib/prisma";

export async function get${domainName}s(userId: string) {
  return await prisma.${domainName.toLowerCase()}.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  });
}

export async function create${domainName}(data: { title: string; amount: number; userId: string }) {
  return await prisma.${domainName.toLowerCase()}.create({ data });
}
`;
        return {
            schemaCode,
            dbClientCode,
            crudRepositoryCode,
            migrationCommand: "npx prisma migrate dev --name init",
            summary: `Scaffolded production Prisma schema, singleton client pool, and CRUD repository for ${domainName}.`
        };
    }
}
//# sourceMappingURL=database-specialist.js.map