import React from 'react';
import { FeatureCard } from './FeatureCard';

/**
 * Section displaying a responsive grid of feature cards.
 * Updated with a subtle background gradient and increased vertical padding for a more polished look.
 */
export const FeaturesSection: React.FC = () => {
  const cards = [
    { icon: <div style={{ fontSize: '2rem' }}>📻</div>, title: 'Live Radio', description: 'Stream thousands of stations worldwide.' },
    { icon: <div style={{ fontSize: '2rem' }}>🎧</div>, title: 'Personalized Playlists', description: 'Create and share your own mixes.' },
    { icon: <div style={{ fontSize: '2rem' }}>🎙️</div>, title: 'Podcasts', description: 'Enjoy a wide range of podcasts.' },
  ];

  return (
    <section
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {cards.map((c, i) => (
          <FeatureCard key={i} icon={c.icon} title={c.title} description={c.description} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

