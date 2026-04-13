# Octo-Studio

Turborepo monorepo managed with pnpm workspaces. Contains a backend (Express + tRPC), a frontend (React + Vite), a Prisma database package, a shared tRPC package, and shared config packages.

## Structure

- `apps/backend` — Express + tRPC server
- `apps/frontend` — React + Vite client
- `packages/db` — Prisma client and schema
- `packages/trpc` — Shared tRPC router and types
- `configs/eslint` — Shared ESLint config
- `configs/typescript` — Shared tsconfig presets

## Commands

```bash
pnpm install          # install all workspace deps
pnpm dev              # run all dev tasks via turbo
pnpm build            # build all packages and apps
pnpm lint             # lint everything
pnpm typecheck        # typecheck everything
pnpm db:generate      # generate Prisma client
pnpm db:push          # push schema to database
pnpm format           # prettier on all files
pnpm clean            # clean build artifacts
```

## Requirements

- Node >= 20
- pnpm >= 9
