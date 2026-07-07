export type Memo = {
  id: number;
  title: string;
  body: string;
};

type MemoCardProps = {
  memo: Memo;
  onDeleteMemo: (id: number) => void;
};

export function MemoCard({ memo, onDeleteMemo }: MemoCardProps) {
  return (
    <article className="memo-card">
      <h2>{memo.title}</h2>
      <p>{memo.body}</p>
      <button
        className="memo-delete-button"
        type="button"
        onClick={() => onDeleteMemo(memo.id)}
      >
        Delete
      </button>
    </article>
  );
}
