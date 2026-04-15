import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

/**
 * Landing page assembling the main sections: Header, Hero, Features, and Footer.
 */
export const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

