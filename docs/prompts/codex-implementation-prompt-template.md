# Issue Implementation Prompt

Implement **{{ISSUE_ID}}**.

Current branch:

- `{{BRANCH_NAME}}`

Please implement this issue on the current branch.
Do not create or switch branches unless explicitly requested.

Before making any changes, please read the following documents:

- `AGENTS.md`
- `docs/issues/{{ISSUE_FILE}}`

## Requirements

- Follow all rules defined in `AGENTS.md`.
- Implement only the requested scope described in `docs/issues/{{ISSUE_FILE}}`.
- Do not modify files outside the scope defined in `docs/issues/{{ISSUE_FILE}}`.
- Do not implement anything listed under "Out of Scope" in `docs/issues/{{ISSUE_FILE}}`.
- If any requirement is unclear, explain your assumptions before implementing.
- If you believe the issue should be split into smaller tasks, explain your reasoning before implementing.
- If you identify improvements outside the scope, report them as recommendations instead of implementing them.
- If deprecated APIs or warnings are found, check the relevant library versions and investigate the recommended approach before applying changes.

## After Implementation

Please report:

1. Summary of changes
2. Changed files
3. Commands executed
4. Verification results
5. Recommendations (maximum 3)
6. Pull Request draft

Run relevant tests or verification steps when applicable.

Do not commit unless explicitly requested.