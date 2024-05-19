'use server'
import { revalidatePath } from 'next/cache';
import {neon} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';
import {notes} from '../../db/schema';
import {eq} from 'drizzle-orm'
export async function deleteNote(noteId:any) {
    const dbUrl = process.env.DB_URL as string;
    const sql = neon(dbUrl);
    const db = drizzle(sql);
    await db.delete(notes).where(eq(notes.id, noteId))
    revalidatePath('/notes', "page");
}