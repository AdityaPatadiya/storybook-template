import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'surface', value: '#f3f4f6' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
    options: {
      storySort: {
        order: ['Components', ['Button', '*'], 'Forms', '*'],
      },
    },
  },
};

export default preview;
