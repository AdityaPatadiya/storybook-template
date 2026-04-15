import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import { ReactComponent as SampleIcon } from '@/assets/sample-icon.svg'; // placeholder path

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    title: 'Awesome Feature',
    description: 'Brief description of the feature.',
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {};

