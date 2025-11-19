import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RoleButtons from '../components/home/RoleButtons';
import FeatureHighlights from '../components/home/FeatureHighlights';
import VideoShowcase from '../components/home/VideoShowcase';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RoleButtons />
      <FeatureHighlights />
      <VideoShowcase />
    </div>
  );
};

export default HomePage;