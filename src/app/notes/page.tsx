import Note from "./NoteComponent";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { notes } from "../..//db/schema";
import { revalidatePath } from "next/cache";

async function getNotes() {
  revalidatePath("/notes", "page");
  const dbUrl = process.env.DB_URL as string;
  const sql = neon(dbUrl);
  const db = drizzle(sql);
  const result = await db.select().from(notes);
  return result;
}
export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div className={styles.container}>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <div className={styles.grid}>
        <CreateNote />
      </div>
    </div>
  );
}
