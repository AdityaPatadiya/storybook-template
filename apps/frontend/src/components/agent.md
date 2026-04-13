# components

Shared presentational React components for `@octo/frontend`. Every component
in this folder has a **colocated Storybook story** and follows the same
authoring rules.

## Canonical references

Two components in this folder are the templates. When you add a new component,
pick the one whose shape matches yours and copy its structure.

- **`Button.tsx` + `Button.stories.tsx`** — plain presentational component.
  Use for anything that renders UI without wrapping a form control.
- **`Input.tsx` + `Input.stories.tsx`** — form control using `forwardRef`.
  Use for anything that wraps a native input/select/textarea so that
  `react-hook-form`'s `{...register("field")}` can spread cleanly.

If you find yourself wanting a third pattern, talk about it first — don't
invent a new convention silently.

## File layout

Stories live **next to** their component, not in a separate folder:

```
src/components/
  Button.tsx
  Button.stories.tsx
  Input.tsx
  Input.stories.tsx
  UserForm.tsx
  UserForm.stories.tsx
```

Rules:

- One component per file.
- Story file name matches the component file name: `Foo.tsx` → `Foo.stories.tsx`.
- Container components (data-fetching wrappers) go in `Foo Container.tsx`
  alongside the presentational component and are **not** given a story —
  stories are for presentational units only.
- No `index.ts` barrels. Import from the component file directly.

## Component authoring rules

### Presentational components (like `Button`)

- Props interface is exported as `FooProps`.
- Extend the native element's attribute type (`ButtonHTMLAttributes`,
  `DivHTMLAttributes`, etc.) via `Omit` so callers can pass through standard
  HTML props.
- Defaults are set in the parameter destructure, not with `defaultProps`.
- Every visual variant is a prop (`variant`, `size`) with a string-literal
  union — no free-form strings.
- Wire accessibility attributes directly: `aria-busy`, `aria-invalid`,
  `aria-describedby`, `role`. Don't rely on the caller to remember them.

### Form controls (like `Input`)

- Must use `forwardRef<HTMLInputElement, InputProps>` so `register()` from
  react-hook-form can forward its ref onto the underlying DOM node.
- Required props: `id` (for label linkage and aria-describedby), `label`.
- Optional slots: `error`, `helperText`. When `error` is set the control
  renders in error state and gets `aria-invalid="true"`.
- Spread `{...rest}` onto the underlying native element last, so callers
  can always override.

## Story authoring rules

Every `*.stories.tsx` file follows this layout in order — **match it exactly**
so the sidebar, Docs page, and tests stay consistent across the project.

1. **Meta** — `title: 'Components/<Name>'`, `component`, `tags: ['autodocs']`,
   `parameters`, `argTypes`, default `args`.
2. **Variant stories** (or **Type stories** for inputs) — one named export per
   visual variant or input type.
3. **Size stories** — one named export per size.
4. **State stories** — loading, disabled, error, empty, required, full-width,
   etc. One per story.
5. **Playground** — a single controls-driven story for manual exploration.
6. **Interaction tests** — stories with a `play` function that assert behavior.

### Required in every meta

```ts
const meta: Meta<typeof Foo> = {
  title: 'Components/Foo',
  component: Foo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    // every prop gets a control + description
  },
  args: {
    // defaults, including fn() stubs for every on* handler
    onClick: fn(),
  },
};
```

Rules:

- `tags: ['autodocs']` is **not optional** — it generates the Docs page.
- Every event handler prop (`on*`) is stubbed in meta `args` with `fn()` from
  `@storybook/test`, so interaction tests can assert against it.
- `argTypes` entries must include `control`, `description`, and
  `table.defaultValue` where applicable. Don't rely on inferred controls.
- Individual stories only set the args that **differ** from meta — don't
  repeat defaults.
- Use per-story `decorators` when a story needs a wrapping container (e.g.
  fixed width for a `FullWidth` story). Global wrappers go in
  `.storybook/preview.ts`, not here.

### Interaction tests — `play` functions

Use `@storybook/test` (wraps Testing Library + Vitest `expect` + spies):

```tsx
import { expect, fn, userEvent, within } from '@storybook/test';

export const ClickFiresHandler: Story = {
  args: { onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
```

Hard rules:

- **Query by accessible role + name first** (`getByRole`, `getByLabelText`).
  Only fall back to test ids if nothing accessible exists — and if so, fix
  the component first.
- `await` every `userEvent.*` call and every `expect(...)` — they are async.
- Assert **positive** behavior (click fires handler) **and** **negative**
  behavior (disabled/loading does not fire handler). Both patterns exist in
  `Button.stories.tsx`.
- One `play` asserts one behavior. If you want to test two things, write two
  stories.

## How to add a new component

1. Copy `Button.tsx` (or `Input.tsx` for a form control) to `Foo.tsx` and
   adapt the props and markup.
2. Copy the matching `*.stories.tsx` and update:
   - `title: 'Components/Foo'`
   - Variant / state stories for Foo's props
   - Interaction tests for Foo's behavior
3. Run `pnpm typecheck` and `pnpm storybook` before committing.
4. If anything outside `components/` still renders a raw element that `Foo`
   replaces, refactor those call sites in the same change. The shared
   component is the source of truth — raw duplicates drift.

## Related

- `apps/frontend/.storybook/agent.md` — Storybook config and preview globals.
- `apps/frontend/agent.md` — frontend package overview and commands.
