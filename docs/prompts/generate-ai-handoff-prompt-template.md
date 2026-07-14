# AI Handoff Prompt Template

This template is used to instruct an AI assistant to generate a handoff prompt for another AI assistant.

The generated handoff prompt should preserve the current project context and enable seamless continuation across conversations and AI tools.

## Workflow

Update AI Context
↓
Generate AI Handoff Prompt
↓
(Optional) Human Review
↓
Next AI Assistant
↓
Continue Project

## Rules

- Write the handoff prompt in English.
- Optimize the output for AI understanding rather than human readability.
- Preserve important project context, decisions, assumptions, and unresolved tasks.
- Do not omit important technical details.
- Prioritize completeness over brevity.
- Use `.ai/` as the primary source of project context.
- If additional information is required, review the repository documents.
- If required information is unavailable, clearly state it instead of guessing.

---

Generate an AI handoff prompt based on the current project.

The generated prompt should allow another AI assistant to continue the project without requiring additional context.

Before generating the handoff prompt, review the following:

- `.ai/context.md`
- `.ai/state.json`
- `AGENTS.md`
- GitHub Issue (if applicable)
- Approved Design (if applicable)
- Pull Request (if applicable)
- Relevant repository documents (if necessary)

---

## Input

The input may include one or more of the following:

Required:

- `.ai/context.md`
- `.ai/state.json`

Optional:

- Conversation history
- GitHub Issue
- Approved Design
- Pull Request
- Repository documents
- Other relevant project context

{{INPUT}}

---

## Output Requirements

The handoff prompt should include:

1. Project purpose
2. Current goals
3. Current implementation status
4. Completed work
5. Important decisions
6. Constraints
7. Pending tasks
8. Known issues
9. Recommended next task
10. Important references

Examples:

- `.ai/context.md`
- `.ai/state.json`
- `AGENTS.md`
- README
- Playbook
- GitHub Issue
- Approved Design
- Pull Request

Do not summarize excessively.

Do not optimize for human readability.

Optimize for continuity across AI assistants.

## Out of Scope

- Update `.ai/context.md`
- Update `.ai/state.json`
- Modify repository documents.
- Change project rules or workflows.