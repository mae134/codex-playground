# Issue009

## Title

Improve AI Development Workflow

## Goal

Issue001〜Issue003で得られた知見を反映し、
AI開発フロー・Playbook・Prompt・Templateを改善する。

## Scope

以下を実施する。

- `docs/playbook/ai-development-playbook.md` を更新する
- Codex実装プロンプトテンプレートを改善する
- Pull Requestドラフト生成プロンプトテンプレートを作成する
- Pull Requestコメントテンプレートを作成する
- Historyで決定した内容をPlaybook・Promptへ反映する
- AI開発フロー（Playground Workflow）を見直す
- 本番開発フロー（Production Workflow）を整理する

## Out of Scope

以下は今回実装しない。

- メモアプリの機能追加
- UIデザインの変更
- ADRの追加
- Supabase導入
- 開発フロー以外のドキュメント更新

## Design Policy

以下の設計方針で実装する。

- Issue001〜Issue003のHistoryで決定した内容のみ反映する
- 新しい運用ルールは追加せず、実績のある改善のみ採用する
- Playground全体で再利用できるテンプレートとする
- Playbook・Prompt・Templateの責務を明確に分離する

## Constraints

- AGENTS.mdのルールに従うこと
- Scope外の変更は行わないこと
- 既存テンプレートとの一貫性を維持すること
- 不明点がある場合は、実装前に前提を説明すること

## Acceptance Criteria

以下を満たした場合、本Issueは完了とする。

- Playbookが更新されている
- Codex実装プロンプトテンプレートが更新されている
- Pull Requestドラフト生成プロンプトテンプレートが追加されている
- Pull Requestコメントテンプレートが追加されている
- Historyで決定した改善内容が反映されている

## Deliverables

以下を成果物として提出する。

- 変更したファイル一覧
- 実行したコマンド
- 動作確認結果
- 改善内容の要約
- 必要に応じた改善提案（最大3件）