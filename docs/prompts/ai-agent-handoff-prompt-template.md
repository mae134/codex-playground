# AI Agent Handoff Prompt Template

This template is used to instruct an AI agent to generate a handoff prompt.

The generated handoff prompt may be reviewed or refined by a collaborating AI before being provided to the next AI agent.

Its purpose is to preserve the full project context and enable seamless continuation.

## Workflow

AI Agent
↓
Generate AI Handoff Prompt
↓
(Optional) Collaborating AI
↓
Next AI Agent
↓
Continue the project

The collaborating AI step is optional and may be skipped when the generated handoff prompt is ready to be used directly by the next AI agent.

## Rules

- Write the handoff prompt in English.
- Optimize the output for AI understanding rather than human readability.
- Preserve all important context, decisions, assumptions, and unresolved tasks.
- Do not omit important technical details.
- Prioritize completeness over brevity.
- If GitHub Issues or Pull Requests are accessible, inspect them and include relevant details.
- If they are not accessible, use the provided input and clearly state that GitHub context was not available.

---

Generate an AI agent handoff prompt based on the current conversation.

The generated prompt should allow another AI agent to continue the project without requiring additional context.

---

## Input

The input may include one or more of the following:

- Conversation history
- GitHub Issue
- Approved Design
- Repository documents
- Other relevant project context
- Pull Request (if applicable)

{{INPUT}}

---

## Output Requirements

The handoff prompt should include:

1. Project purpose
2. Current goals
3. Completed work
4. Current implementation status
5. Important decisions
6. Architecture and workflow decisions
7. Constraints
8. Pending tasks
9. Known issues
10. Recommended next task
11. References to important documents (if applicable)

Examples:

- README
- Playbook
- ADR
- GitHub Issue
- Approved Design
- Pull Request

Do not summarize excessively.
Do not optimize for human readability.
Optimize for continuity across AI assistants.