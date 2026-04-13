# @octo/trpc

Shared tRPC router, procedures, and types. The backend mounts the router; the frontend imports the types for end-to-end type safety.

## Stack

- tRPC 11 (server)
- Zod for input schemas
- Depends on `@octo/db`

## Exports

- `.` — client-safe types and helpers
- `./server` — server-side router and context

## Commands

```bash
pnpm build        # tsc -> dist/
pnpm dev          # tsc --watch
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint src
pnpm clean        # remove dist and turbo cache
```
