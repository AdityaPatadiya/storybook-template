import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

/**
 * Landing page assembling the main sections: Header, Hero, Features, and Footer.
 *
 * Layout improvements:
 * - Root container uses a column flex layout, fills the viewport, and applies a subtle background.
 * - Consistent vertical spacing between sections.
 * - Content is centered with a max‑width container for better readability on large screens.
 */
export const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        color: '#111',
        gap: '2rem',
        alignItems: 'center',
      }}
    >
      <Header />
      {/* Hero should take remaining space */}
      <div style={{ flexGrow: 1, width: '100%', maxWidth: '1200px' }}>
        <Hero />
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

