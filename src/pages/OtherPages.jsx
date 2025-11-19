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

// Pricing Page
export const PricingPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
          Pricing
        </h1>
        <p className="text-xl text-gray-600">
          Pricing information coming soon...
        </p>
      </div>
    </div>
  </div>
);

// Help Page
export const HelpPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
          Help Center
        </h1>
        <p className="text-xl text-gray-600">
          Help documentation coming soon...
        </p>
      </div>
    </div>
  </div>
);

// About Page
export const AboutPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
          About WonderLeap
        </h1>
        <p className="text-xl text-gray-600">
          Learn more about our mission and team...
        </p>
      </div>
    </div>
  </div>
);

// Privacy Page
export const PrivacyPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600">
          Privacy policy content coming soon...
        </p>
      </div>
    </div>
  </div>
);

// Terms Page
export const TermsPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
          Terms of Use
        </h1>
        <p className="text-xl text-gray-600">
          Terms and conditions coming soon...
        </p>
      </div>
    </div>
  </div>
);

// Contact Page
export const ContactPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600">
          Contact form coming soon...
        </p>
      </div>
    </div>
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