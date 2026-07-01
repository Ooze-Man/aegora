# JSR Publishing

Aegora uses JSR package name:

```txt
@aegora/aegora
```

JSR is the preferred primary registry for Aegora once the public API and internal naming migration are stable.

## Why JSR

JSR is a good fit for Aegora because it is TypeScript-first, supports publishing TypeScript source, and can be consumed from Deno, Node.js, Bun, and other tools.

## Package Config

The root `jsr.json` publishes TypeScript source directly from `src/`.

The default entrypoint is:

```json
{
  ".": "./src/aegora.ts"
}
```

Adapter and utility subpaths are exported explicitly so users can import them without depending on private source paths.

## Dry Run

Before publishing, run:

```bash
npx jsr publish --dry-run
```

This performs JSR's publishing checks without uploading a real package version.

## GitHub Actions Publishing

After the JSR package is linked to this GitHub repository in JSR package settings, Aegora can publish without storing a token by using GitHub Actions OIDC.

Recommended workflow behavior:

- Run on Git tags only, not every push to `main`.
- Require `bun run test` and `bun run build` to pass first.
- Publish only when `jsr.json` version has not already been published.

## Before First Publish

- Finish the Aegora public/internal naming migration.
- Ensure public examples use `Aegora`, not inherited names.
- Run `npx jsr publish --dry-run` locally.
- Keep `LICENSE` and `NOTICE.md` in the published package.

## First Publish Checklist

1. Link `@aegora/aegora` to `Ooze-Man/aegora` in JSR package settings.
2. Confirm `jsr.json` version is correct.
3. Run the dry run locally.
4. Create a release tag only after tests and dry run pass.
