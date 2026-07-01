# JSR Publishing

Aegora should prefer JSR as the primary registry once the public API and internal naming migration are stable.

## Why JSR

JSR is a good fit for Aegora because it is TypeScript-first, supports publishing TypeScript source, and can be consumed from Deno, Node.js, Bun, and other tools.

## Package Name

JSR packages are scoped. Before adding the final `jsr.json`, choose the exact package name that already exists on JSR, for example:

```txt
@aegora/core
@aegora/aegora
@ooze-man/aegora
```

Do not commit a final `jsr.json` until the package name is confirmed.

## Proposed `jsr.json`

```json
{
  "name": "@scope/aegora",
  "version": "0.1.0",
  "exports": {
    ".": "./src/aegora.ts",
    "./adapter/cloudflare-worker": "./src/adapter/cloudflare-worker/index.ts",
    "./adapter/bun": "./src/adapter/bun/index.ts",
    "./adapter/web-standard": "./src/adapter/web-standard/index.ts",
    "./type-system": "./src/type-system/index.ts",
    "./error": "./src/error.ts",
    "./cookies": "./src/cookies.ts",
    "./context": "./src/context.ts"
  },
  "publish": {
    "include": [
      "LICENSE",
      "NOTICE.md",
      "README.md",
      "src/**/*.ts"
    ],
    "exclude": [
      "src/**/*.test.ts",
      "test/**",
      "example/**"
    ]
  }
}
```

## Dry Run

After the exact package name is confirmed and `jsr.json` is committed:

```bash
npx jsr publish --dry-run
```

## GitHub Actions Publishing

After the JSR package is linked to this GitHub repository in JSR package settings, Aegora can publish without storing a token by using GitHub Actions OIDC.

Recommended first workflow behavior:

- Run on Git tags only, not every push to `main`.
- Require `bun run test` and `bun run build` to pass first.
- Publish only when `jsr.json` version has not already been published.

## Before First Publish

- Finish the Aegora public/internal naming migration.
- Ensure public examples use `Aegora`, not inherited names.
- Decide whether the root package is `@aegora/core`, `@aegora/aegora`, or the JSR package that has already been created.
- Run `npx jsr publish --dry-run` locally.
- Keep `LICENSE` and `NOTICE.md` in the published package.
