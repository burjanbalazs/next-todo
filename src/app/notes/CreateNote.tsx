"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createNote } from "../actions/create";
import styles from "./input.module.css";
export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const create = async () => {
    await createNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={create}>
      <h1>Create a note</h1>
      <input className={styles.input} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea className={styles.textarea} placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}/>
      <button className={styles.Stdbutton} type="submit">Create note</button>
    </form>
  );
}
