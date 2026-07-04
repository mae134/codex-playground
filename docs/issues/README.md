# Issues

このディレクトリでは、プロジェクトのIssueをMarkdownで管理します。

PlaygroundではGitHub Issueではなく、MarkdownベースのIssueを利用して開発を進めます。

---

# Purpose

- Issueを書く習慣を身につける
- 実装範囲を明確にする
- ChatGPT・Codexとの認識を揃える
- Trace AppでGitHub Issueへ移行する準備を行う

---

# Workflow

1. ChatGPTでIssueを作成する
2. HumanがIssueをレビューする
3. Issueを承認する
4. ブランチを作成する
5. ChatGPT・Humanで設計レビューを行う
6. Codexへ実装を依頼する
7. Pull Requestを作成する
8. Mergeする

---

# Templates

Issue作成には以下のテンプレートを使用します。

- `issue-template.md`
- `issue-prompt-template.md`

---

# Naming Convention

```text
001-xxxx.md
002-xxxx.md
003-xxxx.md
```

---

# Status

- ⏳ Planned
- 🚧 In Progress
- ✅ Completed
- ❌ Cancelled