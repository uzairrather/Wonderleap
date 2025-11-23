import React from 'react';
import ZonesHero from '../components/zones/ZonesHero';
import ZonesGrid from '../components/zones/ZonesGrid';

// Zones Page
export const ZonesPage = () => (
  <div className="min-h-screen">
    <ZonesHero />
    <ZonesGrid />
  </div>
);

// Sign In Page
export const SignInPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 mx-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
        Sign In
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Authentication system coming soon...
      </p>
      <button className="w-full btn-primary">
        Sign In
      </button>
    </div>
  </div>
);