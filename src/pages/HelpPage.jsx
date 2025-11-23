import React from 'react';
import HelpHero from '../components/help/HelpHero';
import SearchBar from '../components/help/SearchBar';
import HelpCategories from '../components/help/HelpCategories';

const HelpPage = () => {
  return (
    <div className="min-h-screen">
      <HelpHero />
      <SearchBar />
      <HelpCategories />
    </div>
  );
};

export default HelpPage;