# @octo/frontend

React SPA built with Vite. Talks to the backend via `@octo/trpc` using the tRPC React Query client. Includes Storybook for component development.

## Stack

- React 18
- Vite 5
- TanStack Query + tRPC React client
- React Hook Form + Zod
- Storybook 8

## Commands

```bash
pnpm dev              # vite dev server
pnpm build            # tsc --noEmit && vite build
pnpm preview          # preview production build
pnpm typecheck        # tsc --noEmit
pnpm lint             # eslint src
pnpm storybook        # storybook on port 6006
pnpm build-storybook  # build storybook static site
pnpm clean            # remove dist, storybook-static, turbo cache
```

## Entry points

- `index.html` — Vite HTML entry
- `src/` — application source
- `vite.config.ts` — Vite config

## Storybook

Storybook 8 with `@storybook/react-vite` and interaction tests via
`@storybook/test`. Story files are **colocated** with components under
`src/components/`. Detailed conventions live in the nested `agent.md` files:

- `.storybook/agent.md` — global config (`main.ts`, `preview.ts`, addons,
  backgrounds, global decorators).
- `src/components/agent.md` — component authoring rules, required story
  file structure, interaction test patterns, and how to add a new component.
  Canonical references: `Button.tsx` / `Button.stories.tsx` (presentational)
  and `Input.tsx` / `Input.stories.tsx` (form control with `forwardRef`).

```bash
pnpm storybook            # dev server on port 6006
pnpm build-storybook      # static build into storybook-static/
```
