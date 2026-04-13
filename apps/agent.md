# apps

Deployable applications in the monorepo. Each app is a standalone workspace package that consumes shared packages from `packages/`.

## Contents

- `backend` — Express + tRPC API server
- `frontend` — React + Vite web client

## Commands

Run from the monorepo root to target all apps:

```bash
pnpm dev          # start all apps in dev mode
pnpm build        # build all apps
pnpm lint         # lint all apps
pnpm typecheck    # typecheck all apps
```

Or scope to a single app via turbo filter:

```bash
pnpm turbo run dev --filter=@octo/backend
pnpm turbo run dev --filter=@octo/frontend
```
