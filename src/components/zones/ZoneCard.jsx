import React from 'react';
import { Link } from 'react-router-dom';
import { getMissionsByZone } from '../../utils/zonesData';

const ZoneCard = ({ zone }) => {
  // Get missions for this zone
  const zoneMissions = getMissionsByZone(zone.id);
  
  // Count live missions
  const liveMissionsCount = zoneMissions.filter(m => m.status === 'live').length;
  const totalMissionsCount = zoneMissions.length;

  return (
    <Link to={`/zones/${zone.id}`}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 transform">
        {/* Zone Header with Gradient */}
        <div className={`bg-gradient-to-r ${zone.gradient} p-8 text-center text-white`}>
          <div className="text-6xl mb-3 animate-bounce-slow">{zone.emoji}</div>
          <h3 className="text-2xl font-bold">{zone.name}</h3>
        </div>

        {/* Zone Content */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {zone.description}
          </p>

          {/* Mission Count */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎮</span>
              <span className="text-gray-800 font-semibold">
                {liveMissionsCount} Live Mission{liveMissionsCount !== 1 ? 's' : ''}
              </span>
            </div>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
              {totalMissionsCount} Total
            </span>
          </div>

          {/* Skills Focus */}
          {zone.skills_focus && zone.skills_focus.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Skills You'll Learn:</p>
              <div className="flex flex-wrap gap-2">
                {zone.skills_focus.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 bg-${zone.color}-100 text-${zone.color}-800 rounded text-xs font-semibold capitalize`}
                  >
                    {skill.replace('-', ' ')}
                  </span>
                ))}
                {zone.skills_focus.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">
                    +{zone.skills_focus.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Explore Button */}
          <button
            className={`w-full py-3 bg-gradient-to-r ${zone.gradient} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
          >
            <span>Explore Zone</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ZoneCard;