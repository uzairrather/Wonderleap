import React from 'react';
import { Link } from 'react-router-dom';

const ZonesPreview = () => {
  const zones = [
    {
      id: 1,
      name: 'STEM & Future Tech Lab',
      emoji: '🔬',
      description: 'Build robots, code games, and explore science!',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500',
      missions: 3
    },
    {
      id: 2,
      name: 'Creative & Performance Studio',
      emoji: '🎭',
      description: 'Act, dance, paint, and create amazing art!',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-500',
      missions: 3
    },
    {
      id: 3,
      name: 'Makers & Builders Workshop',
      emoji: '🔨',
      description: 'Design buildings, fix things, and build cool stuff!',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500',
      missions: 3
    },
    {
      id: 4,
      name: 'Nature & Environment Explorers',
      emoji: '🌿',
      description: 'Save animals, grow plants, and protect nature!',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500',
      missions: 3
    },
    {
      id: 5,
      name: 'Health & Care Heroes Hub',
      emoji: '🏥',
      description: 'Help people feel better as doctors and nurses!',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500',
      missions: 3
    },
    {
      id: 6,
      name: 'Community & Service Champions',
      emoji: '👮',
      description: 'Keep people safe and help your community!',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-500',
      missions: 3
    },
    {
      id: 7,
      name: 'Business & Enterprise Village',
      emoji: '💼',
      description: 'Start businesses and sell amazing products!',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500',
      missions: 3
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            7 Amazing Career Zones!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different careers and find what you love to do!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zones.map((zone) => (
            <Link
              key={zone.id}
              to={`/zones/${zone.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100"
            >
              {/* Zone Header */}
              <div className={`bg-gradient-to-br ${zone.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {zone.emoji}
                </div>
                <div className="relative">
                  <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-white font-semibold text-sm">
                    {zone.missions} Missions
                  </span>
                </div>
              </div>

              {/* Zone Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-wl-purple transition">
                  {zone.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {zone.description}
                </p>
                
                <div className="flex items-center text-wl-purple font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Zone
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-8 text-center flex flex-col items-center justify-center border-4 border-gray-100">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-display font-bold text-gray-700 mb-2">
              More Coming Soon!
            </h3>
            <p className="text-gray-600">
              New zones and missions are on the way!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZonesPreview;