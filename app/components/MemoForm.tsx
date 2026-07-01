"use client";

import { useState } from "react";

type MemoFormProps = {
  onAddMemo: (title: string, body: string) => void;
};

export function MemoForm({ onAddMemo }: MemoFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();

    onAddMemo(title, body);
    setTitle("");
    setBody("");
  }

  return (
    <form className="memo-form" onSubmit={handleSubmit}>
      <label>
        <span>Title</span>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        <span>Body</span>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows={4}
        />
      </label>

      <button type="submit">追加</button>
    </form>
  );
}
