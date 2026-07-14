# AI Context Rebuild Prompt Template

This template is used to instruct an AI assistant to rebuild the AI project context from the current repository state.

The purpose is to regenerate the `.ai/` directory when the project context becomes outdated, inconsistent, or requires a full review.

## Workflow

Repository Review
↓
Analyze Current Project
↓
Rebuild AI Context
↓
Human Review (Optional)
↓
Continue Development

## Rules

- Write all updates in English.
- Rebuild the AI context using the current project as the source of truth.
- Replace outdated information.
- Preserve valid information when appropriate.
- Do not invent missing information.
- Do not duplicate detailed documentation that already exists elsewhere.
- If required information is unavailable, clearly report it.

---

Rebuild the AI project context.

Before rebuilding, review the following:

- `.ai/context.md`
- `.ai/state.json`
- `README.md`
- `AGENTS.md`
- `docs/playbook/`
- `docs/prompts/`
- `docs/checklists/`
- `docs/history/`
- GitHub Issues (if available)
- Pull Requests (if available)
- Current repository structure

---

## Tasks

Review the current project and rebuild:

- `.ai/context.md`
- `.ai/state.json`

The rebuilt context should accurately represent the current project.

Review and update sections including:

- Project
- Current Goal
- Current Status
- Current Task
- Completed Work
- Pending Tasks
- Important Decisions
- Constraints
- Next Recommended Task
- Important References

Remove outdated information when necessary.

---

## Out of Scope

- Generate a handoff document.
- Modify unrelated project documents.
- Change project rules or workflows.
- Implement new features.

---

## Expected Output

Provide:

1. Updated `.ai/context.md`
2. Updated `.ai/state.json`
3. A summary describing what changed during the rebuild