# Naming Migration

Aegora's primary public application class is `Aegora`.

```ts
import { Aegora, t } from 'aegora'

const app = new Aegora()
```

## Public API

New documentation, examples, tests, and packages should use Aegora naming.

Inherited names should remain only where they are required for attribution, license history, or an unfinished internal migration task.

## Next Steps

The public entrypoint now exposes Aegora-first names. Internal type names and implementation details should continue moving to Aegora naming in focused changes with test coverage.
