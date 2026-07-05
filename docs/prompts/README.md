# Prompts

このディレクトリでは、ChatGPT・Codexへ渡すプロンプトテンプレートを管理します。

プロンプトテンプレートを利用することで、AIへの指示内容を標準化し、品質を一定に保つことを目的とします。

---

# Purpose

- AIへの指示内容を標準化する
- 毎回ゼロからプロンプトを作成しない
- 開発フローを統一する
- プロンプト品質を継続的に改善する

---

# Templates

## issue-prompt-template.md

ChatGPTでIssueを作成するためのテンプレート

## codex-implementation-prompt-template.md

Codexへ実装を依頼するためのテンプレート

## pull-request-draft-prompt-template.md

Pull Request本文のドラフトを生成するためのテンプレート

---

# Workflow

Issue作成
↓
Codexへ実装依頼
↓
Pull Request本文のドラフト作成

---

# Rules

- Promptはできるだけ再利用できる形で作成する
- Promptの改善案は、まずHistoryへ記録する
- 有効性を確認した後、テンプレートへ反映する