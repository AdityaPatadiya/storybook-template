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
 * Updated with a subtle gradient background and improved spacing for a more modern look.
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
        padding: '4rem 6rem',
        minHeight: 300,
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        gap: '2rem',
      }}
    >
      <div style={{ maxWidth: '45%' }}>
        <h1 style={{ fontSize: '3rem', margin: 0, lineHeight: 1.2, color: '#111' }}>
          {headline}
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: '#555' }}>
          Stream your favorite stations and discover new music.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Button variant="primary" size="lg" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        </div>
      </div>
      <div style={{ maxWidth: '45%' }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        />
      </div>
    </section>
  );
};

export default Hero;

