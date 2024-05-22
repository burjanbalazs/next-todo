'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNote } from '../actions/create'

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const create = async () => {
        await createNote(title, content);
        setTitle('');
        setContent('');
        router.push('/');
        router.refresh();
    }

    return (
        <form onSubmit={create}>
            <h1>Create a note</h1>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Create note</button>
        </form>
    )

}