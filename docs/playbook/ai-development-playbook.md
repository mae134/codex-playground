# AI Development Playbook v1.1

# このドキュメントの役割

このドキュメントは、人間がAIと効率的に開発を進めるための知識ベースである。

ChatGPTとの議論で採用した運用ルール・開発方針・改善案を蓄積し、今後のプロジェクトでも再利用できることを目的とする。

Codexへ直接渡すことは目的としない。

Codexへ指示する際は、このドキュメントを参考にChatGPTがプロンプトを作成する。

---

# プロジェクトロードマップ（Project Roadmap）

## Phase 1

**codex-playground**

目的

- Codexの操作に慣れる
- AIとの開発フローを確立する
- 実務に近い開発体験を行う

完成条件

- AGENTS.md運用
- Issue運用
- Git運用
- ブランチ運用
- PRレビュー体験
- メモアプリ完成

---

## Phase 2

**Trace App**

Playgroundで確立した開発フローを本番へ適用する。

---

# チーム構成（Team Structure）

## Human

### 役割

- Product Owner
- Tech Lead

### 責務

- プロダクトの方向性を決める
- 要件定義
- 設計を決定する
- Issue承認
- 最終レビュー
- GitへPushする
- Mergeする

---

## ChatGPT

### 役割

- Architect
- Mentor

### 責務

- 設計提案
- レビュー
- 開発フロー改善
- AI運用改善
- 技術相談

---

## Codex

### 役割

- Developer

### 責務

- Issueに従って実装する
- テスト・動作確認を行う
- Pull Request本文のドラフトを作成する
- 実装内容を説明する

### 行わないこと

- ブランチを作成・切り替えない
- コミットしない（明示的な指示がある場合を除く）
- Pull Requestを作成しない
- Mergeしない

---

# 開発理念

人間が意思決定を行う。

プロダクトの方向性や最終判断は人間が行い、
AIは実装・レビュー・提案を通じて開発を支援する。

---

# 開発フロー

1. アイデアを考える
2. Issueを作成する（ChatGPTと相談して作成）
3. 設計案を作成する（Human + ChatGPT）
4. 設計レビューを行う
5. Issueを承認する
6. ブランチを作成する
7. 実装する（Codexにやってもらう）
8. 実装レビューを行う
9. 必要に応じて差し戻し・再実装する
10. 最終レビューを行う
11. Historyを更新する
12. コミットする
13. プッシュする
14. Pull RequestコメントをCodexに作成してもらう
15. Codexに作成してもらったPull Requestコメントをレビューする
16. Pull Requestを作成する
17. マージする

※ Playgroundでは簡略化した開発フローを採用する。

PlaygroundではMarkdownベースのIssueを利用する。

Trace AppではGitHub Issueを導入する。

### Issueレビュー

以下の内容を確認する。

- 目的（Goal）
- 実装範囲（Scope）
- 実装しない範囲（Out of Scope）
- 完了条件（Acceptance Criteria）

### 実装レビュー

以下の内容を確認する。

- 実装内容
- 品質
- Issueとの一致

## ブランチ命名規則

用途に応じて以下のプレフィックスを使用する。

- feature/ : 新機能
- docs/ : ドキュメント・運用改善
- fix/ : バグ修正
- refactor/ : 振る舞いを変えないリファクタリング
- chore/ : 保守・メンテナンス

---

# Issue運用ルール

- Humanが最終承認
- Scopeは小さく保つ
- One Issue = One Feature

---

# Git運用

- main は常に安定
- 1 Issue = 1 Branch
- 1 Branch = 1 Feature
- Merge前にレビュー
- Humanがブランチを作成する
- HumanがMergeする

---

# コミット運用

Codexが実装

↓

Human + ChatGPTがレビュー

↓

必要に応じてCodexへ差し戻す

↓

Humanがコミット

↓

Humanがプッシュ

---

# Pull Request運用

- HumanがPull Requestを作成する
- CodexはPull Request本文のドラフトを作成する
- HumanがPull Requestをレビューする
- HumanがMergeする

---

# プロンプト作成ルール

毎回できるだけ以下を書く。

- 目的（Goal）
- 実装範囲（Scope）
- 制約事項（Constraints）
- 出力内容（Output）

---

# AGENTS.md運用ルール

AGENTS.mdには

- AIが守るルール

を記載する。

人間向けの運用は、このドキュメントで管理する。

---

# 設計レビュー（Design Review）

Human + ChatGPTで作成した設計案を確認する。

問題がなければ、Codexへ実装を依頼する。

確認項目

- 目的（Goal）
- 実装範囲（Scope）
- 実装しない範囲（Out of Scope）
- 設計方針（Design Policy）
- コンポーネント構成（Component Structure）
- Props設計
- State管理（State Management）
- 型定義（Type Definitions）

---

# History運用

改善案はまずHistoryへ記録する。

実際に運用して有効だったもののみ、
Playbook・Prompt・Templateへ反映する。

---

# 今後追加したいアイデア

- docs/issues/
- docs/prompts/
- docs/adr/
- AGENTS.md Version管理
- GitHub Issue連携
- PRテンプレート
- AIレビュー運用
- Review Checklist
- Issue Template
- ADR運用ルール
- Claude Code運用
- ブランチの操作ルール
- 出力先の言語設定

# ドキュメントの責務

このプロジェクトでは、各ドキュメントの責務を明確に分離する。

各ドキュメントは役割を分離し、それぞれが異なる責務を持つ。

Playbookを起点として、必要に応じて他のドキュメントへ反映・更新する。

```text
docs/
├── playbook/   … Human + ChatGPT が管理
├── adr/        … 設計判断を記録
├── issues/     … タスク管理
├── prompts/    … Codex用プロンプト
└── history/    … 改善履歴
```

Historyで学ぶ

↓

Playbookへ反映

↓

Promptへ反映

↓

Codexへ渡す

---

# 継続的改善（Continuous Improvement）

Historyで改善案を管理する。

改善案は実際のIssueで運用した後に、
Playbook・Prompt・Templateへ反映する。

---

# ディレクトリ構成

## docs/

### 目的

プロジェクト全体のドキュメントを管理する。

### 採用理由

ソースコードと運用情報を分離し、設計・運用・AIルールを管理するため。

---

## docs/issues/

### 目的

IssueをMarkdownで管理する。

### 採用理由

GitHub Issueへ移行する前にIssueを書く習慣を身につけるため。

またCodexへ

「Issue001を実装してください」

と依頼できるようにするため。

---

## docs/prompts/

### 目的

Codexへ渡すプロンプトテンプレートを管理する。

### 採用理由

毎回ゼロから考えず、品質を一定に保つため。

---

## docs/adr/

### 目的

ADR（Architecture Decision Record：アーキテクチャ設計の意思決定記録）を管理する。

### 採用理由

「なぜこの設計を採用したのか」を後から説明できるようにするため。

### 例

- Next.js採用理由
- Supabase採用理由
- Server Action採用理由
- Route Handler採用理由

---

## docs/history/

### 目的

ルール変更履歴を管理する。
改善案はまずHistoryへ記録する。

### 採用理由

開発文化の成長を記録するため。

---

## AGENTS.md

### 目的

AI（Codex）が守るルールを管理する。

### 採用理由

毎回同じ説明をしなくて済むようにするため。

AI向けドキュメント。

---

## README.md

### 目的

プロジェクトの入口となるドキュメント。

### 採用理由

初めてプロジェクトを見る人が最初に読むため。

---

# 更新履歴

## v1.1

- 開発フローを更新
- チーム体制を整理
- Pull Request運用を追加
- 設計レビューを追加
- History運用を追加
- 継続的改善の運用を追加
- ブランチ命名規則を追加

## v1.0

- 初版作成
- チーム体制決定
- Codex運用開始
- Playground運用開始
- AI Development Playbookを運用開始