import React from 'react';
import ParentHero from '../components/parents/ParentHero';
import ProgressOverview from '../components/parents/ProgressOverview';
import BenefitsSection from '../components/parents/BenefitsSection';
import SampleReport from '../components/parents/SampleReport';
import NewsletterSignup from '../components/parents/NewsletterSignup';
import ParentFAQ from '../components/parents/ParentFAQ';

const ParentsPage = () => {
  return (
    <div className="min-h-screen">
      <ParentHero />
      <ProgressOverview />
      <BenefitsSection />
      <SampleReport />
      <NewsletterSignup />
      <ParentFAQ />
    </div>
  );
};

export default ParentsPage;