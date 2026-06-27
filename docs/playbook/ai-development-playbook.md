# AI Development Playbook v1.0

# このドキュメントの役割

このドキュメントは、人間がAIと効率的に開発を進めるための知識ベースである。

ChatGPTとの議論で採用した運用ルール・開発方針・改善案を蓄積し、今後のプロジェクトでも再利用できることを目的とする。

Codexへ直接渡すことは目的としない。

Codexへ指示する際は、このドキュメントを参考にChatGPTがプロンプトを作成する。

---

# Project Roadmap

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

# Team Structure

## Human

### 役割

- Product Owner
- Tech Lead

### 責務

- プロダクトの方向性を決める
- 要件定義
- Issue承認
- 最終レビュー
- Git Push / Merge

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

- Issue作成（下書き）
- 実装
- テスト
- コミット
- 実装説明

---

# 開発理念

人間が意思決定を行う。

プロダクトの方向性や最終判断は人間が行い、
AIは実装・レビュー・提案を通じて開発を支援する。

---

# 開発フロー

1. アイデアを考える（Idea）
2. Issueを作成する（Issue Creation）
3. Issueをレビューする（Issue Review）
4. Issueを承認する（Issue Approval）
5. Codexが実装する（Implementation）
6. 実装内容をレビューする（Code Review）
7. コミットする（Commit）
8. プッシュする（Push）
9. マージする（Merge）

※ Playgroundでは簡略化した開発フローを採用する。

GitHub Issue や Pull Request は本番プロジェクト（Trace App）で導入する。

Issueレビュー
- 要件・Scope・目的を確認する

実装レビュー
- 実装内容・品質・Issueとの一致を確認する

---

# Git運用

- main は常に安定
- 1 Issue = 1 Branch
- 1 Branch = 1 Feature
- Merge前にレビュー

---

# コミット運用

Codexが実装

↓

Human + ChatGPTがレビュー

↓

Codex（またはHuman）がコミット

↓

Humanがプッシュ

---

# Issue運用ルール

- Humanが最終承認
- Scopeは小さく保つ
- One Issue = One Feature

---

# プロンプト作成ルール

毎回できるだけ以下を書く。

- Goal
- Scope
- Constraints
- Output

---

# AGENTS.md運用ルール

AGENTS.mdには

- AIが守るルール

を記載する。

人間向けの運用は、このドキュメントで管理する。

---

# 学び・改善点

## 2026-06-24

### 良かった点

- CodexはIssue作成が得意
- コミットメッセージ品質が高い
- 指示をよく守る
- 慎重に確認してから変更する

### 改善したい点

- 提案が多くなりがち
- Scopeを広げやすい
- 情報量が多い

### 改善案

- Scopeを明確に書く
- 「コード変更禁止」を最初に伝える
- 出力は3つまでなど上限を指定する
- 必要最小限の変更を指示する

---

# 今後追加したいアイデア

- docs/issues/
- docs/prompts/
- docs/adr/
- Lessons Learned運用
- AGENTS.md Version管理
- GitHub Issue連携
- PRテンプレート
- AIレビュー運用
- Review Checklist
- Issue Template
- ADR運用ルール
- Claude Code運用

# ドキュメント構成

このプロジェクトでは、各ドキュメントの責務を明確に分離する。

各ドキュメントは役割を分離し、それぞれが異なる責務を持つ。

Playbookを起点として、必要に応じて他のドキュメントへ反映・更新する。

docs/

playbook/
    ai-development-playbook.md
        ↑
Human + ChatGPT

adr/
        ↑
設計判断

issues/
        ↑
タスク管理

prompts/
        ↑
プロンプトテンプレート

history/
        ↑
履歴管理

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

## lessons-learned.md

### 目的

Codex運用の知見を蓄積する。

### 採用理由

同じ失敗を繰り返さず、AI開発のノウハウを蓄積するため。

管理項目

- 良かった点
- 改善したい点
- 改善案

---

# 更新履歴

## v1.0

- 初版作成
- チーム体制決定
- Codex運用開始
- Playground運用開始
- AI Development Playbookを運用開始