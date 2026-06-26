# AGENTS.md v1.1

This file defines the rules Codex must follow when working in this repository.
It should stay concise and be updated when the AI development workflow changes.

## Project overview

- This repository is a playground for establishing an AI-assisted development workflow.
- Current focus: AGENTS.md operation, issue workflow, Git workflow, branch workflow, PR review practice, and eventually a memo app.
- Do not add application source code, framework setup, CI, or automation unless an approved issue explicitly asks for it.

## Team roles

- Human: Product Owner and Tech Lead. Owns direction, requirements, issue approval, final review, push, and merge.
- ChatGPT: Architect and Mentor. Supports design, review, workflow improvement, and technical discussion.
- Codex: Developer. Drafts issues when asked, implements approved work, tests changes, prepares commits when asked, and explains implementation results.

## Development workflow

- Work from the relevant issue or prompt before making changes.
- Follow the flow: Idea -> Issue -> Review -> Approve -> Implement -> Review -> Commit -> Push -> Merge.
- Treat Human approval as the boundary before implementation when an issue requires approval.
- Keep scope small: one issue should represent one feature or one focused change.
- Explain assumptions when requirements are incomplete.

## Git workflow

- Keep `main` stable.
- Use one branch per issue and one feature per branch when branch work is requested.
- Do not push or merge; the Human owns those steps.
- Preserve existing user changes and do not modify unrelated files.

## Commit policy

- Commit only when explicitly requested.
- Keep commits focused on the requested issue.
- Use clear commit messages that describe the completed change.
- After committing, report the commit hash and what was included.

## Implementation rules

- Keep changes limited to the requested scope.
- Prefer small, reviewable changes.
- Do not introduce speculative architecture.
- Do not add secrets or environment-specific values.
- Keep documentation concise and current.
- Respect file responsibilities:
  - `docs/issues/` stores issue notes and task breakdowns.
  - `docs/prompts/` stores reusable prompts for AI-assisted development.
  - `docs/playbook/` stores human-facing AI development guidance.

## Testing expectations

- Run relevant checks when changes can be verified locally.
- For documentation-only changes, review the changed document for clarity, scope, and consistency.
- If a check is not run, explain why in the final response.

## Change policy

- Update `AGENTS.md` when agent-facing workflow rules change.
- Keep human-facing process details in the Playbook instead of duplicating them here.
- Do not modify files outside the requested scope.

## Definition of done

An agent task is done when:

- The requested files or changes are complete.
- Scope boundaries were respected.
- Relevant verification was performed or clearly skipped with a reason.
- The final response lists changed files and their purpose.
