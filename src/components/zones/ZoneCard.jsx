import React from 'react';
import { Link } from 'react-router-dom';

const ZoneCard = ({ zone }) => {
  const liveMissions = zone.missions.filter(m => m.status === 'live').length;
  const totalMissions = zone.missions.length;

  return (
    <Link
      to={`/zones/${zone.id}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100"
    >
      {/* Zone Header */}
      <div className={`bg-gradient-to-br ${zone.color} p-10 text-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
        
        {/* Emoji */}
        <div className="relative text-9xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {zone.emoji}
        </div>
        
        {/* Mission Count Badge */}
        <div className="relative">
          <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-bold text-lg">
            {liveMissions}/{totalMissions} Missions Live
          </span>
        </div>
      </div>

      {/* Zone Content */}
      <div className="p-8">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-wl-purple transition">
          {zone.name}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {zone.description}
        </p>

        {/* Mission Preview */}
        <div className="space-y-2 mb-6">
          {zone.missions.slice(0, 2).map((mission, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <span className={`w-3 h-3 rounded-full mr-3 ${
                mission.status === 'live' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></span>
              <span>{mission.title}</span>
            </div>
          ))}
          {zone.missions.length > 2 && (
            <div className="text-sm text-gray-500 ml-6">
              +{zone.missions.length - 2} more mission{zone.missions.length - 2 > 1 ? 's' : ''}
            </div>
          )}
        </div>
        
        {/* CTA */}
        <div className="flex items-center text-wl-purple font-bold text-lg group-hover:translate-x-2 transition-transform">
          Explore Zone
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ZoneCard;