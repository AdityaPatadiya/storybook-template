# Octo Studio

Production-grade TypeScript monorepo with end-to-end type safety.

## Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Frontend**: React + Vite + TypeScript + tRPC client + React Query
- **Backend**: Node.js + Express + tRPC server
- **Database**: Prisma ORM + SQLite
- **Validation**: Zod (shared between frontend and backend)
- **UI Dev**: Storybook
- **Quality**: ESLint + Prettier + strict TypeScript

## Layout

```
apps/
  frontend/        # React + Vite + Storybook
  backend/         # Express + tRPC
packages/
  trpc/            # Shared tRPC router + Zod schemas (single source of truth)
  db/              # Prisma client + schema
configs/
  eslint/          # Shared ESLint config
  typescript/      # Shared tsconfig bases
```

## Requirements

- Node.js >= 20
- pnpm >= 9

## Setup

```bash
pnpm install           # installs deps + runs prisma generate via postinstall
pnpm db:push           # creates the SQLite file and syncs the schema
pnpm dev               # runs backend + frontend in parallel (watch mode)
```

The backend listens on `http://localhost:4000` and the frontend on `http://localhost:5173`.

## Scripts

| Command             | What it does                                         |
| ------------------- | ---------------------------------------------------- |
| `pnpm dev`          | Run all apps in dev (watch) mode via Turborepo       |
| `pnpm build`        | Build every package and app                         |
| `pnpm lint`         | Lint every package and app                          |
| `pnpm typecheck`    | Typecheck every package and app                     |
| `pnpm db:generate`  | Regenerate the Prisma client                        |
| `pnpm db:push`      | Push the Prisma schema to the SQLite database       |
| `pnpm format`       | Format the repository with Prettier                 |

## Type flow

```
Prisma schema → @octo/db → @octo/trpc → backend (mounts router) ↘
                                      → frontend (consumes AppRouter type) ✓
```

All validation lives in `packages/trpc/src/schemas` as Zod schemas. Both the
backend (via tRPC input validation) and the frontend (via react-hook-form's
`zodResolver`) import the same schemas — there is no duplication.

## Storybook

```bash
pnpm --filter @octo/frontend storybook
```

The `UserForm` component ships with four states: `Default`, `Loading`,
`Error`, `Empty`.
