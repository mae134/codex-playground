import { MemoCard, type Memo } from "./components/MemoCard";

const memos: Memo[] = [
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
  return (
    <main className="memo-page">
      <header className="page-header">
        <h1>Memo List</h1>
        <p>Fixed memo data displayed as cards.</p>
      </header>

      <section className="memo-list" aria-label="Memo list">
        {memos.map((memo) => (
          <MemoCard key={memo.id} memo={memo} />
        ))}
      </section>
    </main>
  );
}
