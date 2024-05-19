import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";
import { notes } from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URL as string;
const sql = neon(dbUrl);

const db = drizzle(sql, {
  schema,
});

const main = async () => {
  await db.insert(notes).values([
    {
      title: "first",
      content: "post",
    },
    {
      title: "second",
      content: "post",
    },
    {
      title: "third",
      content: "post",
    },
    {
      title: "fourth",
      content: "post",
    },
  ]);
};
main();
