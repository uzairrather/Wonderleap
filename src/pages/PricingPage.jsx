import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingTiers from '../components/pricing/PricingTiers';
import PricingFAQ from '../components/pricing/PricingFAQ';

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
    </div>
  );
};

export default PricingPage;