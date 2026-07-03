# Pull Request Draft Generation Prompt

The implementation for **{{ISSUE_ID}}** has been completed.

Please generate a GitHub Pull Request draft.

Before generating the draft, review the following:

- `AGENTS.md`
- `docs/issues/{{ISSUE_FILE}}`

Use the implementation and verification results as the source of truth.

---

Generate the Pull Request using the following template.

# Title

{{PR_TITLE}}

## Related Issue

{{ISSUE_ID}}

## Summary

{{SUMMARY}}

## Changes

- ...

## Verification

- npm run lint
- npm run build
- ...

---

## Rules

- Write in Markdown.
- Follow the approved Issue.
- Do not include any Out of Scope changes.
- Only describe changes that were actually implemented.
- Only include verification steps that were actually executed.
- Do not speculate or invent functionality.
- Keep the draft concise and easy to review.
- Do not include implementation details that are irrelevant to reviewers.