import type { Meta, StoryObj } from '@storybook/react';
import { FeaturesSection } from './FeaturesSection';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Components/FeaturesSection',
  component: FeaturesSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {};

