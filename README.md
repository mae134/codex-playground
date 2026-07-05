# Codex Playground

Codex Playground は、AI（ChatGPT・Codex）を活用した開発フローを構築・検証するための学習用プロジェクトです。

このプロジェクトでは、Issue駆動開発・Pull Request運用・AIとの役割分担を実践しながら、最終的に Trace App へ適用できる開発プロセスを確立することを目的としています。

---

# Project Goals

- AIを活用した開発フローを確立する
- Codex運用に慣れる
- 実務に近いGit運用を学ぶ
- メモアプリを開発する
- Trace Appへ開発フローを展開する

---

# Documents

| ドキュメント | 説明 |
|-------------|------|
| `docs/playbook/` | 開発ルール・運用方針 |
| `docs/issues/` | Issue管理 |
| `docs/prompts/` | ChatGPT・Codex用プロンプト |
| `docs/history/` | 改善履歴 |

---

# Development Setup

## Requirements

- Node.js 20.9 or later
- npm

## Install

```bash
npm install
```

## Start

```bash
npm run dev
```

Open <http://localhost:3000>

---

# Available Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

# Development Flow

1. Issue
2. Design Review
3. Implementation
4. Implementation Review
5. Commit
6. Pull Request
7. Merge