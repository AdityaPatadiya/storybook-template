import type { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterProps } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    copyright: { control: 'text' },
    socialLinks: { control: false },
  },
  args: {
    socialLinks: [
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

