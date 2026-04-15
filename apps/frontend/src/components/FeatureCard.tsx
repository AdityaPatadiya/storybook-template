import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';

export interface FeatureCardProps {
  /** Icon component or element */
  icon?: React.ReactNode;
  /** Title text */
  title?: string;
  /** Optional description */
  description?: string;
}

/**
 * Feature card with a clean layout: icon, title, and description.
 * Includes a subtle hover lift effect for visual polish.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title = 'Feature',
  description,
}) => {
  return (
    <Card
      size="sm"
      style={{
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
      }}
    >
      <CardHeader>
        {icon && <div>{icon}</div>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {description && (
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      )}
    </Card>
  );
};

export default FeatureCard;

