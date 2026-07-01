# Internal Rename Plan

Aegora should use Aegora naming in public API, internal core types, runtime constants, examples, and tests.

## Current Rule

Use inherited names only for required legal attribution and historical notices.

## Rename Targets

- `Elysia` to `Aegora`
- `AnyElysia` to `AnyAegora`
- `ElysiaConfig` to `AegoraConfig`
- `ElysiaAdapter` to `AegoraAdapter`
- `ElysiaCustomStatusResponse` to `AegoraCustomStatusResponse`
- `ElysiaTypeCheck` to `AegoraTypeCheck`
- `ELYSIA_AOT` to `AEGORA_AOT`
- `ELYSIA_TRACE` to `AEGORA_TRACE`
- package specifiers from `elysia/...` to `aegora/...`

## Process

1. Run the rename codemod.
2. Review the generated diff.
3. Fix type errors in focused groups.
4. Run tests and build.
5. Keep `LICENSE` and `NOTICE.md` attribution intact.

## Validation

```bash
bun run rename:internals
bun run test
bun run build
```

The manual `Aegora Internal Rename Check` workflow runs the codemod and fails when any rename diff remains. It should pass once the internal rename has been fully applied.
