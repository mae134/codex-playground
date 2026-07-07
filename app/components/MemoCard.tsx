export type Memo = {
  id: number;
  title: string;
  body: string;
};

type MemoCardProps = {
  memo: Memo;
  isEditing: boolean;
  editingTitle: string;
  editingBody: string;
  onEditingTitleChange: (title: string) => void;
  onEditingBodyChange: (body: string) => void;
  onStartEditingMemo: (memo: Memo) => void;
  onCancelEditingMemo: () => void;
  onSaveEditingMemo: () => void;
  onDeleteMemo: (id: number) => void;
};

export function MemoCard({
  memo,
  isEditing,
  editingTitle,
  editingBody,
  onEditingTitleChange,
  onEditingBodyChange,
  onStartEditingMemo,
  onCancelEditingMemo,
  onSaveEditingMemo,
  onDeleteMemo,
}: MemoCardProps) {
  if (isEditing) {
    return (
      <article className="memo-card">
        <label className="memo-edit-field">
          <span>Title</span>
          <input
            type="text"
            value={editingTitle}
            onChange={(event) => onEditingTitleChange(event.target.value)}
          />
        </label>

        <label className="memo-edit-field">
          <span>Body</span>
          <textarea
            value={editingBody}
            onChange={(event) => onEditingBodyChange(event.target.value)}
            rows={4}
          />
        </label>

        <div className="memo-card-actions">
          <button
            className="memo-save-button"
            type="button"
            onClick={onSaveEditingMemo}
          >
            Save
          </button>
          <button
            className="memo-cancel-button"
            type="button"
            onClick={onCancelEditingMemo}
          >
            Cancel
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="memo-card">
      <h2>{memo.title}</h2>
      <p>{memo.body}</p>
      <div className="memo-card-actions">
        <button
          className="memo-edit-button"
          type="button"
          onClick={() => onStartEditingMemo(memo)}
        >
          Edit
        </button>
        <button
          className="memo-delete-button"
          type="button"
          onClick={() => onDeleteMemo(memo.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
