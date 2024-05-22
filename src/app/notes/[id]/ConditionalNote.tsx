"use client";

import { useState } from "react";
import EditNote from "./EditableNote";
import Note from "../NoteComponent";
export default function ConditionalNote(note: any) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = async () => {
    setIsClicked(true);
  };
  return (
    <div>
      <button onClick={handleClick}>Edit</button>
      {isClicked ? <EditNote note={note} /> : <Note note={note} />}
    </div>
  );
}
