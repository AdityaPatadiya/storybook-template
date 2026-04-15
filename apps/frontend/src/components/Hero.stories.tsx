import type { Meta, StoryObj } from '@storybook/react';
import { Hero, HeroProps } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    headline: { control: 'text' },
    ctaLabel: { control: 'text' },
    imageSrc: { control: 'text' },
    onCtaClick: { action: 'ctaClicked' },
  },
  args: {
    headline: 'Welcome to iHeart Radio',
    ctaLabel: 'Listen Now',
    imageSrc: '/hero.png',
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

