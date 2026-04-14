module.exports = {
  root: true,
  extends: [
    '@octo/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      // Storybook `render: (args) => <Component />` callbacks are not plain
      // React components but they legitimately use hooks for stateful demos,
      // and story text often contains copy with apostrophes. Relax both
      // rules for *.stories.tsx only.
      files: ['**/*.stories.tsx', '**/*.stories.ts'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
};
