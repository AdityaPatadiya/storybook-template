import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

/**
 * Landing page assembling the main sections: Header, Hero, Features, and Footer.
 *
 * Layout:
 * - Root container uses a column flex layout and fills the viewport height.
 * - Header sits at the top.
 * - Hero expands to fill the remaining vertical space (flex‑grow).
 * - FeaturesSection follows the hero.
 * - Footer sticks to the bottom.
 * - Spacing between sections is consistent (≈24 px).
 */
export const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '24px',
      }}
    >
      <Header />
      {/* Hero should take remaining space */}
      <div style={{ flexGrow: 1 }}>
        <Hero />
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

