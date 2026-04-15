import React from 'react';
import { FeatureCard } from './FeatureCard';

/**
 * Section displaying a grid of feature cards.
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
        padding: '4rem 2rem',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
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

