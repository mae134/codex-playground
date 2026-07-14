# Project Context

## Project

Codex Playgroundは、AIを活用した開発フローを構築・検証し、将来Trace Appへ適用するための学習用プロジェクトです。

## Current Goal

AIコーディングエージェントやChatGPTなどが、ツールやチャットをまたいでもプロジェクトの現在地を把握できる共通コンテキストシステムを作成する。

## Current Status

AI支援開発の基盤整備を進めています。

完了済みの主な項目:

- GitHub Issue運用
- ブランチ・Pull Request運用
- Prompt Templates
- GitHub Issue Forms
- Pull Request Template
- Development Checklists
- GitHub Actionsによるlint・buildの自動実行
- AI Agent Handoff Prompt

## Current Task

`.ai/` ディレクトリへ、AI向けのプロジェクトコンテキスト管理機能を追加する。

現在作成中のファイル:

- `.ai/README.md`
- `.ai/context.md`
- `.ai/state.json`

## Important Decisions

- 人間が最終的な意思決定を行う
- GitHub Issueは実装内容のWhatを定義する
- Approved Designは実装方法のHowを定義する
- AI向けプロンプトは英語で作成する
- 人向けのPlaybook・Checklist・Historyは日本語で作成する
- AI製品名ではなく、AI AssistantやAI Coding Agentなど役割ベースの表現を優先する
- `.ai/` は特定のAIツールに依存しない共通コンテキスト置き場とする
- `.ai/` は当面、手動またはAIへの明示的な依頼で更新する

## Constraints

- `main` は安定した状態を維持する
- 1 Issue = 1 Branch
- Out of Scopeの変更を行わない
- 既存ドキュメントの内容を`.ai/`へ過剰に複製しない
- 詳細情報は元のドキュメントを参照する

## Pending Tasks

- `.ai/context.md` の初期内容を作成する
- `.ai/state.json` の初期スキーマを作成する
- `.ai/README.md` に更新ルールを記載する
- `.ai/` を使ったAI間の引き継ぎを実際に検証する

## Next Recommended Task

`.ai/state.json` を作成し、現在のIssue・ブランチ・進行状態を機械可読な形式で記録する。

## Important References

- `AGENTS.md`: AIコーディングエージェントが守るルール
- `README.md`: プロジェクト概要
- `docs/playbook/`: 人間向けの開発フロー
- `docs/prompts/`: AI向けプロンプトテンプレート
- `docs/checklists/`: 工程確認用チェックリスト
- `docs/history/`: 運用改善の履歴

## Notes

このファイルには、現在のプロジェクト状況と次の作業に必要な情報だけを記載します。

詳細なルールや履歴は複製せず、元のドキュメントを参照します。