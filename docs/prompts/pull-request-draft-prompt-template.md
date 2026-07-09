# Pull Request Draft Generation Prompt

This template is used to instruct the AI coding agent that performed the implementation to generate a GitHub Pull Request draft.

## Workflow

Implementation Completed
↓
AI Coding Agent
↓
Generate Pull Request Draft
↓
Human Review
↓
Create Pull Request

## Rules

- Write the Pull Request draft in English.
- Write in Markdown.
- Use the GitHub Issue, implementation summary, and verification results as the source of truth.
- Follow the approved Issue.
- Do not include any Out of Scope changes.
- Only describe changes that were actually implemented.
- Only include verification steps that were actually executed.
- Do not speculate or invent functionality.
- Keep the draft concise and easy to review.
- Do not include implementation details that are irrelevant to reviewers.

The implementation for **{{ISSUE_ID}}** has been completed.

Please generate a GitHub Pull Request draft.

Before generating the draft, review the following:

- `AGENTS.md`
- GitHub Issue
- Implementation summary
- Verification results

---

## GitHub Issue

{{GITHUB_ISSUE}}

---

## Implementation Summary

{{IMPLEMENTATION_SUMMARY}}

---

## Verification Results

{{VERIFICATION_RESULTS}}

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

- ...