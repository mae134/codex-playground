# AGENTS.md v1.0

This file defines the working rules for AI agents collaborating on this repository.
It is a living document and should be updated when the project workflow changes.

## Project status

This repository is in the initial workflow setup phase.
Do not create application source code until an issue explicitly asks for it.

## Agent workflow

- Read the relevant issue or prompt before making changes.
- Keep changes limited to the requested scope.
- Do not modify unrelated files.
- Prefer small, reviewable changes.
- Explain assumptions when requirements are incomplete.
- Report what changed and how it was verified.

## File scope rules

- `docs/issues/` stores issue notes and task breakdowns.
- `docs/prompts/` stores reusable prompts for AI-assisted development.
- Source code, framework setup, CI, and automation should only be added by explicit request.

## Quality expectations

- Keep documentation concise and current.
- Avoid speculative architecture.
- Preserve existing user changes.
- Do not add secrets or environment-specific values.

## Definition of done

An agent task is done when:

- The requested files or changes are complete.
- The scope boundaries were respected.
- The final response lists changed files and their purpose.
