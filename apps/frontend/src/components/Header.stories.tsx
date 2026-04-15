import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    logoSrc: { control: 'text' },
    navItems: { control: false },
  },
  args: {
    logoSrc: '/logo.svg',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/#features' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

