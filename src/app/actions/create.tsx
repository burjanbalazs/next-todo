"use server";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { notes } from "../../db/schema";

export async function createNote(title: string, content: string) {
  const dbUrl = process.env.DB_URL as string;
  const sql = neon(dbUrl);
  const db = drizzle(sql);
  await db.insert(notes).values([
    {
      title: title,
      content: content,
    },
  ]);
}
