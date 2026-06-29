

## 今後の改善案

- 実装プロンプトに現在のブランチ名を含める。
- 明示的な指示がない限り、Codexはブランチの作成・切り替えを行わないよう指示する。

### Pull Request Workflow

検討事項

- HumanがPull Requestを作成する。
- CodexはPull Request本文のドラフトを作成する。
- Humanが最終レビュー後にMergeする。

理由

- 人間が最終的な意思決定を行うため。
- CodexはPR本文の作成を担当し、レビューしやすい状態を提供するため。
- MergeはHumanが最終確認後に実施する。