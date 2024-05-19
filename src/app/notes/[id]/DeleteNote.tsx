'use client';

import { useRouter } from "next/navigation";
import { deleteNote } from "../../actions/delete";
import { revalidatePath } from "next/cache";
export default function DeleteNote({ note }: any) {
    const noteId = note.id;
    const router = useRouter();
    const del = async () => {
        await deleteNote(noteId);
        router.push('/notes');
        router.refresh();
    }
    return (
            <button onClick={del}>Delete this</button>
    );
}