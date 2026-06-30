export type Memo = {
  id: number;
  title: string;
  body: string;
};

type MemoCardProps = {
  memo: Memo;
};

export function MemoCard({ memo }: MemoCardProps) {
  return (
    <article className="memo-card">
      <h2>{memo.title}</h2>
      <p>{memo.body}</p>
    </article>
  );
}
