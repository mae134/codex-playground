# Pull Request Comment Generation Prompt

Review the Pull Request and generate review comments.

Before generating comments, review the following:

- `AGENTS.md`
- `docs/issues/{{ISSUE_FILE}}`
- Pull Request description
- Implementation changes

---

## Rules

- Follow the approved Issue.
- Do not comment on Out of Scope items.
- Only review the current Pull Request.
- Keep comments concise and actionable.
- Explain the reason when suggesting improvements.
- If no issues are found, explicitly state that the implementation looks good.
- Do not suggest speculative improvements unrelated to the approved Issue.
- Do not invent functionality that does not exist.

---

## Output Format

### Overall Assessment

- Approve
- Request Changes
- Comment

### Summary

{{SUMMARY}}

### Review Comments

- ...
- ...
- ...

### Suggestions (Optional)

- ...