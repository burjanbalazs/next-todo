import styles from '../Notes.module.css';
import Note from '../NoteComponent';
import DeleteNote from './DeleteNote';
async function getNote(noteId: string) {
    const url = process.env.DB_URL + noteId;
    const res = await fetch(url);
    const data = res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

    return (
        <div>
            <Note note={note}></Note>
            <DeleteNote note ={note}></DeleteNote>
        </div>
    )
}