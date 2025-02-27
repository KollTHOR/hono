import type { Config } from "drizzle-kit";

export default {
  driver: "turso",
  dialect: "sqlite",
  schema: "./db/schema",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
