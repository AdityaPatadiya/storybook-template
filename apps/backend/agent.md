# @octo/backend

Express server that mounts the shared tRPC router from `@octo/trpc` and talks to the database through `@octo/db`.

## Stack

- Express 4
- tRPC 11 (server)
- Zod for input validation
- CORS middleware
- tsx for dev, tsc for build

## Commands

```bash
pnpm dev          # tsx watch src/index.ts
pnpm build        # tsc -> dist/
pnpm start        # node dist/index.js
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint src
pnpm clean        # remove dist and turbo cache
```

## Entry point

`src/index.ts`
