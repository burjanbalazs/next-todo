import Link from "next/link";
import styles from './Notes.module.css';

export default function Note({note}: any) {
    const {id, Title, Content, created} = note || {};
    return(
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h2 className={styles.title}>Title: {Title}</h2>
                <h5 className={styles.content}>{Content}</h5>
                <p className={styles.created}>{created}</p>
            </div>
        </Link>
    )
}