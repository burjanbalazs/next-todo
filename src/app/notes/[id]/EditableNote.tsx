"use client";
import styles from "../Notes.module.css";
import { useState } from "react";
import { updateNote } from "@/app/actions/update";
import { useRouter } from "next/navigation";

export default function EditNote({ note }: any) {
    const router = useRouter();
    const { note: { id, title, content, createdAt, updatedAt }} = note;
  const [Title, setTitle] = useState(title);
  const [Content, setContent] = useState(content);
  const update = async () => {
      await updateNote(id, title, content);
      router.push("/notes");
    router.refresh();
  };
  return (
    <div className={styles.note}>
        <input type="text" placeholder="Title" value={Title} onChange={(e) => {setTitle(e.target.value);}}/>
        <input type="text" placeholder="Content" value={Content} onChange={(e) => {setContent(e.target.value);}}/>
        <button onClick={update}>Save</button>
      <p className={styles.created}>{createdAt.toUTCString()}</p>
    </div>
  );
}
