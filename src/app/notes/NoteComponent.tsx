"use client";

import Link from "next/link";
import styles from "./Notes.module.css";
import { deleteNote } from "../actions/delete";
import { useRouter } from "next/navigation";

export default function Note({ note }: any) {
  let id: any, title, content, createdAt, updatedAt;

  if (note.id !== undefined) {
    ({ id, title, content, createdAt, updatedAt } = note);
  } else {
    ({note: { id, title, content, createdAt, updatedAt }} = note);
  }

  const router = useRouter();

  async function sendData() {
    await deleteNote(id);
    router.push("/notes");
    router.refresh();
  }

  return (
    <div className={styles.note}>
      <button className={styles.hoverButton} onClick={sendData}>D</button>
      <Link href={`/notes/${id}`}>
        <h2 className={styles.title}>Title: {title}</h2>
        <h5 className={styles.content}>{content}</h5>
        <p className={styles.created}>{createdAt.toUTCString()}</p>
      </Link>
    </div>
  );
}
