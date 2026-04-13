import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UserForm } from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'Components/UserForm',
  component: UserForm,
  parameters: {
    layout: 'centered',
  },
  args: {
    onSubmit: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof UserForm>;

export const Default: Story = {
  args: {
    status: 'idle',
    users: [
      { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
      { id: '2', name: 'Alan Turing', email: 'alan@example.com' },
    ],
  },
};

export const Loading: Story = {
  args: {
    status: 'loading',
    users: [],
  },
};

export const ErrorState: Story = {
  name: 'Error',
  args: {
    status: 'error',
    errorMessage: 'Unable to create user — email already in use.',
    users: [],
  },
};

export const Empty: Story = {
  args: {
    status: 'empty',
    users: [],
  },
};
