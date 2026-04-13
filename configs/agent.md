# configs

Shared tool configuration packages consumed as workspace devDependencies.

## Contents

- `eslint` — `@octo/eslint-config`, the shared ESLint config
- `typescript` — `@octo/tsconfig`, shared tsconfig presets (base, node, react)

## Usage

Other packages reference these as workspace deps, e.g.:

```json
"devDependencies": {
  "@octo/eslint-config": "workspace:*",
  "@octo/tsconfig": "workspace:*"
}
```

These packages are config-only — they have no build step.
