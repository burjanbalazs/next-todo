'use client';

import { useRouter } from "next/navigation";
export default function DeleteNote({note}: any) {
    const router = useRouter();
    const deleteNote = async () => {
        const res = await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${note.id}`, {
        method: 'DELETE'
    });
    router.push('/notes');
    }
    return(
        <button onClick={deleteNote}>Delete this</button>
    );
}