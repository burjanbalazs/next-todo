import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
});