import React from 'react';
import { Button } from './Button';

export interface HeroProps {
  /** Main headline text */
  headline?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA click handler */
  onCtaClick?: () => void;
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
}

/**
 * Hero section with a headline, a call‑to‑action button, and an illustrative image.
 */
export const Hero: React.FC<HeroProps> = ({
  headline = 'Welcome to iHeart Radio',
  ctaLabel = 'Listen Now',
  onCtaClick,
  imageSrc = '/hero.png',
  imageAlt = 'Hero illustration',
}) => {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem 4rem',
        minHeight: 200,
        backgroundColor: '#f9fafb',
      }}
    >
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>{headline}</h1>
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={onCtaClick}>{ctaLabel}</Button>
        </div>
      </div>
      <div style={{ maxWidth: '45%' }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
        />
      </div>
    </section>
  );
};

export default Hero;

