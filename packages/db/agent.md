# @octo/db

Prisma client wrapper for the project. Holds the schema, generates the client, and exports a ready-to-use Prisma instance for other packages.

## Stack

- Prisma 5 + `@prisma/client`
- dotenv for env loading

## Commands

```bash
pnpm build          # prisma generate && tsc
pnpm dev            # tsc --watch
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint src
pnpm db:generate    # regenerate Prisma client
pnpm db:push        # push schema to the database
pnpm clean          # remove dist and turbo cache
```

## Layout

- `prisma/` — schema and migrations
- `src/` — TypeScript exports around the Prisma client
- `dist/` — compiled output consumed by other packages
