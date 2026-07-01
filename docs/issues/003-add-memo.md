# Issue003

## Title

Add Memo

## Goal

メモを追加できる機能を実装する。

## Scope

以下を実施する。

* メモ入力フォームを作成する
* 「追加」ボタンを作成する
* `useState` でメモ一覧を管理する
* 入力したメモを一覧へ追加する
* 追加後に入力欄をクリアする

## Design Policy

以下の設計方針で実装する。

* `page.tsx` はメモ一覧の状態管理を担当する
* `MemoForm` コンポーネントを作成する
* `MemoForm` はメモ入力フォームを担当する
* `MemoCard` コンポーネントは既存のものを再利用する
* `page.tsx` から `MemoForm` に追加処理をPropsで渡す
* `page.tsx` から `MemoCard` にメモデータをPropsで渡す
* メモデータは `useState` で管理する
* localStorageは使用しない

## Out of Scope

以下は今回実装しない。

* メモの削除
* メモの編集
* localStorage
* データベース
* Supabase
* 検索機能
* 並び替え

## Constraints

* AGENTS.mdのルールに従うこと
* Scope外の変更は行わないこと
* `useState` を利用して状態管理を行うこと
* `MemoCard` コンポーネントを再利用すること
* `MemoForm` コンポーネントを作成すること
* 不明点がある場合は、実装前に前提を説明すること

## Acceptance Criteria

以下を満たした場合、本Issueは完了とする。

* メモを入力できる
* 「追加」ボタンでメモを追加できる
* 追加したメモが一覧へ表示される
* 追加後に入力欄がクリアされる
* `MemoForm` コンポーネントが作成されている
* `MemoCard` コンポーネントが再利用されている
* 開発サーバーで正常に動作する
* コードにエラーがない

## Deliverables

以下を成果物として提出する。

* 変更したファイル一覧
* 実行したコマンド
* 動作確認結果
* Pull Request本文のドラフト
* 必要に応じた改善提案（最大3件）
