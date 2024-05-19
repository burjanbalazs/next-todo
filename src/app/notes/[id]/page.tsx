import Note from "../NoteComponent";
import DeleteNote from "./DeleteNote";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { notes } from "../../..//db/schema";
import { eq } from "drizzle-orm";

async function getNote(noteId: number) {
  const dbUrl = process.env.DB_URL as string;
  const sql = neon(dbUrl);
  const db = drizzle(sql);
  const results = await db.select().from(notes).where(eq(notes.id, noteId));
  return results[0];
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div>
      <Note note={note}></Note>
      <DeleteNote note={note}></DeleteNote>
    </div>
  );
}
