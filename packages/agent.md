# packages

Shared libraries consumed by apps via the `@octo/*` workspace scope.

## Contents

- `db` — Prisma schema and generated client (`@octo/db`)
- `trpc` — tRPC router, procedures, and shared types (`@octo/trpc`)

## Commands

Run from the monorepo root:

```bash
pnpm build        # build all packages
pnpm typecheck    # typecheck all packages
pnpm lint         # lint all packages
```

Or scope to a single package:

```bash
pnpm turbo run build --filter=@octo/db
pnpm turbo run build --filter=@octo/trpc
```
