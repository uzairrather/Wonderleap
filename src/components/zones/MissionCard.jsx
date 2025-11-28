import React from 'react';
import { Link } from 'react-router-dom';

const MissionCard = ({ mission, zone }) => {
  const statusColors = {
    live: 'bg-green-100 text-green-800',
    'coming-soon': 'bg-yellow-100 text-yellow-800',
    locked: 'bg-gray-100 text-gray-800'
  };

  const statusLabels = {
    live: '🎮 Play Now',
    'coming-soon': '🔜 Coming Soon',
    locked: '🔒 Locked'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Mission Header */}
      <div className={`bg-gradient-to-r ${zone.gradient} p-6 text-center text-white`}>
        <div className="text-5xl mb-2">{zone.emoji}</div>
        <h3 className="text-xl font-bold">{mission.title}</h3>
      </div>

      {/* Mission Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          {mission.description}
        </p>

        {/* Mission Info */}
        <div className="space-y-2 mb-4">
          {/* Duration & Key Stage */}
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-gray-600">
              <span className="mr-2">⏱️</span>
              {mission.duration}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">
              {mission.keyStage}
            </span>
          </div>

          {/* Status Badge */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[mission.status]}`}>
              {statusLabels[mission.status]}
            </span>
            {mission.releaseDate && (
              <span className="text-xs text-gray-500">
                {new Date(mission.releaseDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>

        {/* Skills */}
        {mission.skills && mission.skills.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {mission.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs font-semibold"
                >
                  ⭐ {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Careers (NEW) */}
        {mission.career_ids && mission.career_ids.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Careers:</p>
            <div className="flex flex-wrap gap-2">
              {mission.career_ids.slice(0, 2).map((careerId, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-semibold capitalize"
                >
                  💼 {careerId.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        {mission.status === 'live' ? (
          <Link to={`/missions/${zone.id}/${mission.id}/play`}>
            <button
              className={`w-full py-3 bg-gradient-to-r ${zone.gradient} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
            >
              <span>Play Mission</span>
              <span>🎮</span>
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="w-full py-3 bg-gray-300 text-gray-600 font-bold rounded-lg cursor-not-allowed"
          >
            {mission.status === 'coming-soon' ? '🔜 Coming Soon' : '🔒 Locked'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MissionCard;