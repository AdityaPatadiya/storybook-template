# @octo/tsconfig

Shared TypeScript config presets for the monorepo.

## Presets

- `base.json` — baseline compiler options for all packages
- `node.json` — extends base for Node.js services (e.g. backend, db, trpc)
- `react.json` — extends base for React apps (e.g. frontend)

## Usage

In a consuming package's `tsconfig.json`:

```json
{
  "extends": "@octo/tsconfig/node.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  }
}
```

## Commands

No build or test commands — this package ships JSON presets as-is.
