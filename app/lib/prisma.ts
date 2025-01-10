import ws from "ws";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";

const isServer = typeof window === "undefined";

let prisma: PrismaClient | null = null;

if (isServer) {
  neonConfig.webSocketConstructor = ws;

  const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
  const adapter = new PrismaNeon(pool);

  prisma = new PrismaClient({
    adapter,
    log: ["query", "info", "warn", "error"],
  });
}

export default prisma;
