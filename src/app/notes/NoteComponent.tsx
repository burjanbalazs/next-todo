import Link from "next/link";
import styles from "./Notes.module.css";

export default function Note({ note }: any) {
  return (
    <Link href={`/notes/${note.id}`}>
      <div className={styles.note}>
        <h2 className={styles.title}>Title: {note.title}</h2>
        <h5 className={styles.content}>{note.content}</h5>
        <p className={styles.created}>{note.createdAt.toLocaleString()}</p>
      </div>
    </Link>
  );
}
