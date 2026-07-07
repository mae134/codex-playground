# History

## 改善点

実装開始前のチェックリストを開発フローへ追加する。

## 理由

Issue作成後にブランチ作成を忘れるなど、開発フローの手順漏れが発生した。

実装を開始する前にチェックリストを確認することで、手順漏れを防止できる。

## 対応策

開発フローへ以下のチェックリストを追加する。

- Issue is approved
- Branch has been created
- Local branch is checked out
- Approved Design is completed

## 期待される効果

- 開発フローの手順漏れを防止できる
- HumanとChatGPTの認識を揃えやすくなる
- 安定した開発フローを維持できる

------------------------------------------------------------------------

## 改善点

GitHub Issue・Approved Design・Codex Promptの役割を明確に分離する。

## 理由

これまではIssueとPromptに設計内容が混在し、それぞれの責務が曖昧になっていた。

役割を明確に分離することで、設計レビューと実装の責務を整理できる。

## 対応策

開発フローを以下の構成とする。

```text
GitHub Issue
（What）
↓
Approved Design
（How）
↓
Codex Prompt
（Implementation Request）
↓
Codex
（Implementation）
```

- GitHub Issueは要件を管理する。
- Approved DesignはHumanとChatGPTが設計を決定する。
- Codex PromptはApproved Designを基に生成する。
- Codexは承認済み設計に従って実装する。

## 期待される効果

- 要件・設計・実装の責務を明確に分離できる
- Codexへの指示内容を統一できる
- 実装品質とレビュー効率を向上できる
- Trace Appでも同じ開発フローを適用できる

------------------------------------------------------------------------

## 改善点

Codexの最終実装レポートは日本語で出力する。

## 理由

Codexへ渡すプロンプトやApproved Designは、実装指示として明確にするため英語で記述する。

一方で、実装後の作業ログ・変更内容・検証結果はHumanがレビューするため、日本語で出力した方が確認しやすい。

## 対応策

Codex用プロンプトのAfter Implementationに以下の要件を追加する。

> Please write the final implementation report in Japanese so that the human reviewer can review it easily.

## 期待される効果

- Humanが実装内容を確認しやすくなる
- レビュー時の認知負荷を下げられる
- プロンプトは英語、レビュー報告は日本語という役割分担を明確にできる