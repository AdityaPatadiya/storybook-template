import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Button } from './Button';

/**
 * Canonical story file for the project. Treat this as the template:
 * every new component story should mirror the structure below.
 *
 * Sections, in order:
 *   1. Meta        — title, component, tags, parameters, argTypes, default args
 *   2. Variants    — one story per visual variant
 *   3. Sizes       — one story per size
 *   4. States      — loading, disabled, full-width, with-icon
 *   5. Playground  — fully controls-driven story for manual exploration
 *   6. Interaction — play() functions that assert behavior
 */

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary action control. Supports three variants, three sizes, ' +
          'loading and disabled states, and an optional left icon.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'danger'],
      description: 'Visual variant for the button.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Physical size of the button.',
      table: { defaultValue: { summary: 'md' } },
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a spinner glyph and disables interaction.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fill its container.',
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    leftIcon: { control: false },
  },
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: false,
    fullWidth: false,
    disabled: false,
    children: 'Click me',
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// 1. Variants --------------------------------------------------------------

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary action' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary action' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Delete forever' },
};

// 2. Sizes -----------------------------------------------------------------

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Medium' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
};

// 3. States ----------------------------------------------------------------

export const Loading: Story = {
  args: { isLoading: true, children: 'Saving' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Unavailable' },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full width' },
  parameters: { layout: 'padded' },
  decorators: [
    (StoryFn) => (
      <div style={{ width: 320 }}>
        <StoryFn />
      </div>
    ),
  ],
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Continue',
    leftIcon: <span aria-hidden>→</span>,
  },
};

// 4. Playground ------------------------------------------------------------

/**
 * Controls-driven story. Use this one in the Storybook UI to explore every
 * combination without editing code.
 */
export const Playground: Story = {
  args: { children: 'Playground' },
};

// 5. Interaction tests -----------------------------------------------------

/**
 * `play` runs after the story mounts. Use it to simulate user interaction
 * and assert expected behavior. Assertions use `@storybook/test`, which
 * wraps Vitest's `expect` and Testing Library utilities.
 */
export const ClickFiresHandler: Story = {
  args: { children: 'Click me' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const DisabledDoesNotFire: Story = {
  args: { children: 'Disabled', disabled: true },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled/i });

    await expect(button).toBeDisabled();

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const LoadingBlocksClicks: Story = {
  args: { children: 'Saving', isLoading: true },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /saving/i });

    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toBeDisabled();

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
