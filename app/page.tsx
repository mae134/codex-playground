"use client";

import { useState } from "react";

import { MemoForm } from "./components/MemoForm";
import { MemoCard, type Memo } from "./components/MemoCard";

const initialMemos: Memo[] = [
  {
    id: 1,
    title: "Project setup",
    body: "Next.js project setup is complete and ready for memo app development.",
  },
  {
    id: 2,
    title: "Workflow practice",
    body: "Use small issues to practice implementation, review, and pull request flow.",
  },
  {
    id: 3,
    title: "Memo list",
    body: "Display fixed memo data first before adding create, edit, or delete features.",
  },
];

export default function Home() {
  const [memos, setMemos] = useState(initialMemos);
  const [editingMemoId, setEditingMemoId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingBody, setEditingBody] = useState("");

  function handleAddMemo(title: string, body: string) {
    setMemos((currentMemos) => {
      const nextId =
        Math.max(0, ...currentMemos.map((memo) => memo.id)) + 1;

      return [
        ...currentMemos,
        {
          id: nextId,
          title,
          body,
        },
      ];
    });
  }

  function handleDeleteMemo(id: number) {
    setMemos((currentMemos) =>
      currentMemos.filter((memo) => memo.id !== id),
    );
  }

  function handleStartEditingMemo(memo: Memo) {
    setEditingMemoId(memo.id);
    setEditingTitle(memo.title);
    setEditingBody(memo.body);
  }

  function handleCancelEditingMemo() {
    setEditingMemoId(null);
    setEditingTitle("");
    setEditingBody("");
  }

  function handleSaveEditingMemo() {
    const nextTitle = editingTitle.trim();
    const nextBody = editingBody.trim();

    if (!nextTitle || !nextBody || editingMemoId === null) {
      return;
    }

    setMemos((currentMemos) =>
      currentMemos.map((memo) =>
        memo.id === editingMemoId
          ? {
              ...memo,
              title: nextTitle,
              body: nextBody,
            }
          : memo,
      ),
    );
    handleCancelEditingMemo();
  }

  return (
    <main className="memo-page">
      <header className="page-header">
        <h1>Memo List</h1>
        <p>Fixed memo data displayed as cards.</p>
      </header>

      <MemoForm onAddMemo={handleAddMemo} />

      <section className="memo-list" aria-label="Memo list">
        {memos.map((memo) => (
          <MemoCard
            key={memo.id}
            memo={memo}
            isEditing={editingMemoId === memo.id}
            editingTitle={editingTitle}
            editingBody={editingBody}
            onEditingTitleChange={setEditingTitle}
            onEditingBodyChange={setEditingBody}
            onStartEditingMemo={handleStartEditingMemo}
            onCancelEditingMemo={handleCancelEditingMemo}
            onSaveEditingMemo={handleSaveEditingMemo}
            onDeleteMemo={handleDeleteMemo}
          />
        ))}
      </section>
    </main>
  );
}
