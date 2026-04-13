# @octo/eslint-config

Shared ESLint config for the monorepo. Exposes a single CommonJS config at `index.cjs` that other packages extend.

## Includes

- `@typescript-eslint/eslint-plugin` + parser
- `eslint-config-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

## Usage

In a consuming package's `.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  extends: ["@octo/eslint-config"],
};
```

Requires `eslint ^8.57.0` as a peer dependency.

## Commands

No build or test commands — this package ships `index.cjs` as-is.
