"use server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { notes } from "../../db/schema";
import { eq } from "drizzle-orm";

export async function updateNote(noteId: any, title: any, content: any) {
  const dbUrl = process.env.DB_URL as string;
  const sql = neon(dbUrl);
  const db = drizzle(sql);
  await db
    .update(notes)
    .set({ title: title, content: content })
    .where(eq(notes.id, noteId));
}
