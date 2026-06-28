# Naming Migration

Aegora's primary public application class is `Aegora`.

```ts
import { Aegora, t } from 'aegora'

const app = new Aegora()
```

## Compatibility

`Elysia` remains available as a deprecated compatibility alias during the early fork phase.

```ts
import { Elysia } from 'aegora'
```

New documentation and examples should use `Aegora`.

## Next Steps

The public entrypoint has been renamed first so new users can adopt the Aegora API immediately. Internal type names and compatibility exports will be migrated in later changes when they can be changed safely with tests and migration notes.
