import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Input } from './Input';

/**
 * Canonical story file for form inputs. Same structure as Button.stories.tsx —
 * copy this template whenever you add a story for a new form control.
 *
 * Sections, in order:
 *   1. Meta        — title, component, tags, parameters, argTypes, default args
 *   2. Types       — one story per input type (text, email, password, number)
 *   3. Sizes       — one story per size
 *   4. States      — helper text, error, required, disabled, read-only, filled
 *   5. Playground  — controls-driven story for manual exploration
 *   6. Interaction — play() functions that assert behavior
 */

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Labelled text input with built-in error and helper text slots. ' +
          'Forwards a ref to the underlying <input>, so it plugs directly ' +
          'into react-hook-form via `{...register("field")}`.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'DOM id — required so the label and aria-describedby link correctly.',
    },
    label: { control: 'text', description: 'Visible label text.' },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Physical size of the input.',
      table: { defaultValue: { summary: 'md' } },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'Native input type.',
    },
    error: {
      control: 'text',
      description: 'Error message. When set, the input renders in error state and gets aria-invalid.',
    },
    helperText: {
      control: 'text',
      description: 'Optional helper text shown below the input. Hidden when `error` is set.',
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
  },
  args: {
    id: 'demo-input',
    label: 'Label',
    size: 'md',
    type: 'text',
    placeholder: 'Type something…',
    required: false,
    disabled: false,
    readOnly: false,
    onChange: fn(),
    onBlur: fn(),
  },
  decorators: [
    (StoryFn) => (
      <div style={{ width: 320 }}>
        <StoryFn />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

// 1. Types -----------------------------------------------------------------

export const Text: Story = {
  args: { id: 'text-input', label: 'Full name', type: 'text' },
};

export const Email: Story = {
  args: { id: 'email-input', label: 'Email', type: 'email', placeholder: 'you@example.com' },
};

export const Password: Story = {
  args: { id: 'password-input', label: 'Password', type: 'password' },
};

export const Number: Story = {
  args: { id: 'number-input', label: 'Quantity', type: 'number', placeholder: '0' },
};

// 2. Sizes -----------------------------------------------------------------

export const Small: Story = {
  args: { id: 'small-input', label: 'Small', size: 'sm' },
};

export const Medium: Story = {
  args: { id: 'medium-input', label: 'Medium', size: 'md' },
};

export const Large: Story = {
  args: { id: 'large-input', label: 'Large', size: 'lg' },
};

// 3. States ----------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    id: 'helper-input',
    label: 'Username',
    helperText: 'Lowercase letters, numbers, and underscores only.',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-input',
    label: 'Email',
    type: 'email',
    defaultValue: 'not-an-email',
    error: 'Enter a valid email address.',
  },
};

export const Required: Story = {
  args: { id: 'required-input', label: 'Name', required: true },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    label: 'Account id',
    defaultValue: 'acct_123',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'readonly-input',
    label: 'API key',
    defaultValue: 'sk_live_abc123',
    readOnly: true,
  },
};

export const Filled: Story = {
  args: {
    id: 'filled-input',
    label: 'Full name',
    defaultValue: 'Ada Lovelace',
  },
};

// 4. Playground ------------------------------------------------------------

export const Playground: Story = {
  args: { id: 'playground-input', label: 'Playground' },
};

// 5. Interaction tests -----------------------------------------------------

export const TypingUpdatesValue: Story = {
  args: {
    id: 'typing-input',
    label: 'Full name',
    placeholder: 'Type your name',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/full name/i) as HTMLInputElement;

    await userEvent.type(input, 'Ada Lovelace');

    await expect(input).toHaveValue('Ada Lovelace');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const ErrorIsAnnounced: Story = {
  args: {
    id: 'error-announced-input',
    label: 'Email',
    type: 'email',
    defaultValue: 'nope',
    error: 'Enter a valid email address.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/email/i);

    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByRole('alert')).toHaveTextContent(
      /enter a valid email address/i,
    );
  },
};

export const DisabledCannotType: Story = {
  args: {
    id: 'disabled-typing-input',
    label: 'Locked',
    disabled: true,
    defaultValue: '',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/locked/i) as HTMLInputElement;

    await expect(input).toBeDisabled();

    await userEvent.type(input, 'hello');

    await expect(input).toHaveValue('');
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};
