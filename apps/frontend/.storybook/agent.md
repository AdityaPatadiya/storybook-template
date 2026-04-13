# .storybook

Storybook 8 configuration for `@octo/frontend`. Only global config lives here.
Story files themselves are **colocated** with components under
`src/components/` and are discovered via the glob in `main.ts`.

## Files

- `main.ts` — framework, story glob, addons, TypeScript docgen
- `preview.ts` — global parameters, decorators, backgrounds, story sort

## main.ts

```ts
stories: ['../src/**/*.stories.@(ts|tsx)']
```

That glob is the single source of truth for story discovery. Any
`*.stories.tsx` file anywhere under `src/` is picked up automatically —
do **not** add a manual list.

Framework is `@storybook/react-vite`, so Storybook reuses the Vite pipeline
and respects the aliases defined in `apps/frontend/vite.config.ts`.

### Adding an addon

1. `pnpm add -D -F @octo/frontend @storybook/addon-<name>`
2. Append the package name to the `addons` array in `main.ts`.
3. Restart the Storybook dev server.

Prefer addons from `@storybook/addon-essentials` before pulling in new ones —
essentials already covers controls, actions, viewport, backgrounds, toolbars,
measure, outline, and docs.

## preview.ts

Holds parameters that apply to every story:

- `layout: 'centered'` — default canvas layout; stories can override with
  `parameters: { layout: 'padded' | 'fullscreen' }`.
- `actions: { argTypesRegex: '^on[A-Z].*' }` — any prop named `onFoo` is
  auto-logged in the Actions panel. Still stub handlers with `fn()` in meta
  `args` if you want to assert against them in `play` functions.
- `controls: { expanded: true }` — shows prop descriptions in the Controls
  panel.
- `backgrounds` — `light`, `surface`, `dark`. Select per story with
  `parameters: { backgrounds: { default: 'dark' } }`.
- `options.storySort` — controls sidebar order. Update this when adding new
  top-level categories.

### Global decorators

Add a wrapper here only when **every** story needs it — e.g. a theme provider,
a router, or a QueryClientProvider. Per-story wrapping belongs in the story's
own `decorators` array, not here.

```ts
decorators: [
  (StoryFn) => (
    <ThemeProvider theme={lightTheme}>
      <StoryFn />
    </ThemeProvider>
  ),
],
```

## Commands

```bash
pnpm storybook            # dev server on port 6006
pnpm build-storybook      # static build into storybook-static/
```

## Where to go next

- **Writing a story** — see `src/components/agent.md` for the required
  structure and the canonical `Button` / `Input` templates.
- **Frontend overview** — see `apps/frontend/agent.md`.
