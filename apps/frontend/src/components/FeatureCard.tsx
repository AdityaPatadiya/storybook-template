import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export interface FeatureCardProps {
  /** Icon component or element */
  icon?: React.ReactNode;
  /** Title text */
  title?: string;
  /** Optional description */
  description?: string;
}

/**
 * Simple feature card displaying an icon and a title (and optional description).
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title = 'Feature',
  description,
}) => {
  return (
    <Card size="sm">
      <CardHeader>
        {icon && <div>{icon}</div>}
        <CardTitle>{title}</CardTitle>
        {description && <div>{description}</div>}
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;

