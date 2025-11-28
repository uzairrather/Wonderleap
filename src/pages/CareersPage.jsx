import React from 'react';
import CareerExplorer from '../components/careers/CareerExplorer';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-teal-50 to-purple-50">
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4 animate-bounce-slow">🌟</div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
              Discover Your Future Career
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore exciting careers across 7 different zones and find out what you could be when you grow up!
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="text-3xl font-bold text-teal-600 mb-1">21+</h3>
              <p className="text-gray-600">Different Careers</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="text-3xl font-bold text-purple-600 mb-1">7</h3>
              <p className="text-gray-600">Career Zones</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-3xl font-bold text-yellow-600 mb-1">100+</h3>
              <p className="text-gray-600">Skills to Learn</p>
            </div>
          </div>

          {/* Career Explorer */}
          <CareerExplorer />
        </div>
      </main>

    </div>
  );
};

export default CareersPage;