# Contributing to Aegora

Thank you for considering a contribution to Aegora.

Aegora is a community-led TypeScript framework and contributor community. We want this project to be technically strong, respectful, and useful for both experienced maintainers and first-time open-source contributors.

## Community Expectations

Contributors should expect:

- Respectful review, even when a change is declined.
- Clear reasoning when issues or pull requests are closed.
- Help finding a good first contribution.
- No public shaming for beginner mistakes.
- A path from contributor to reviewer to maintainer.

Maintainers should expect:

- Good-faith participation.
- Reproduction cases or tests when possible.
- Patience around volunteer time.
- Technical disagreement without personal attacks.

Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before participating.

## Setup

Aegora uses [Bun](https://bun.sh) for development and testing.

```bash
bun install
bun run build
bun run test
```

Useful commands:

```bash
bun test
bun test test/<test-file>.ts
bun run test:types
bun run deadcode
```

## Contribution Types

You can contribute through:

- Bug reports
- Reproduction cases
- Documentation improvements
- Examples and recipes
- Tests
- Type improvements
- Core framework changes
- Plugin work
- Issue triage and mentorship

Small docs fixes are welcome. Larger technical changes should usually start with an issue or RFC-style discussion.

## Pull Request Guidelines

Before opening a PR:

1. Keep the change focused.
2. Add or update tests when behavior changes.
3. Update documentation when APIs or developer-facing behavior changes.
4. Run the relevant test command locally when possible.
5. Explain the problem, solution, tradeoffs, and follow-up work.

A good PR description includes:

```md
## What changed?

## Why?

## How was this tested?

## Notes for reviewers
```

## Mentored Issues

Issues labeled `mentored` are intended for contributors who want extra context or guidance.

A mentored issue should include:

- Problem statement
- Relevant files
- Expected behavior
- Acceptance criteria
- Suggested tests
- Optional stretch goal

To request help, comment:

```txt
I'd like mentorship on this.
```

See [MENTORSHIP.md](./MENTORSHIP.md).

## Review Culture

Reviews should be direct, kind, and specific.

Prefer:

```txt
Could we move this validation closer to the parser so both adapters share the same behavior?
```

Avoid:

```txt
This is wrong.
```

When rejecting a change, explain why and, when possible, suggest a path forward.

## AI-Assisted Contributions

AI tools are allowed when used responsibly.

Contributors are responsible for understanding, testing, and owning any code they submit. Low-effort generated PRs that are not reviewed by the contributor may be closed.

## Attribution

This project is a fork of ElysiaJS and preserves attribution in [LICENSE](./LICENSE) and [NOTICE.md](./NOTICE.md). Do not copy code from other projects unless the license allows it and attribution is preserved.

## Thanks

Thank you for helping make Aegora a better framework and a better place to contribute.
