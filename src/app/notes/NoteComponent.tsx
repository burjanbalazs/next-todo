import Link from "next/link";
import styles from "./Notes.module.css";

export default function Note({ note }: any) {

  let id, title, content, createdAt, updatedAt;

  if (note.id !== undefined) {
    ({ id, title, content, createdAt, updatedAt } = note);
  }
  else {
    ({ note: { id, title, content, createdAt, updatedAt } } = note);
  }


  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2 className={styles.title}>Title: {title}</h2>
        <h5 className={styles.content}>{content}</h5>
        <p className={styles.created}>{createdAt.toUTCString()}</p>
      </div>
    </Link>
  );
}
