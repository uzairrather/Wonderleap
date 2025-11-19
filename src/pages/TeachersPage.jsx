import React from 'react';
import TeacherHero from '../components/teachers/TeacherHero';
import WorkflowSection from '../components/teachers/WorkflowSection';
import DashboardPreview from '../components/teachers/DashboardPreview';
import TeacherFeatures from '../components/teachers/TeacherFeatures';
import PricingCTA from '../components/teachers/PricingCTA';
import TeacherFAQ from '../components/teachers/TeacherFAQ';

const TeachersPage = () => {
  return (
    <div className="min-h-screen ">
      <TeacherHero />
      <WorkflowSection />
      <DashboardPreview />
      <TeacherFeatures />
      <PricingCTA />
      <TeacherFAQ />
    </div>
  );
};

export default TeachersPage;