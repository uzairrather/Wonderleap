import React from 'react';

const MissionCard = ({ mission, zoneColor }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
      {/* Mission Status Badge */}
      <div className="relative">
        <div className={`h-3 bg-gradient-to-r ${zoneColor}`}></div>
        <div className="absolute top-0 right-4 transform translate-y-1">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white ${
            mission.status === 'live' 
              ? 'bg-green-500' 
              : 'bg-yellow-500'
          }`}>
            {mission.status === 'live' ? '🎮 Live Now' : '⏰ Coming Soon'}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Mission Title */}
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
          {mission.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {mission.description}
        </p>

        {/* Mission Details */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {mission.duration}
          </div>
          <div className="flex items-center text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            {mission.keyStage}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Skills you'll learn:</p>
          <div className="flex flex-wrap gap-2">
            {mission.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-wl-teal/10 text-wl-teal px-3 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {mission.status === 'live' ? (
          <button className="w-full bg-gradient-to-r from-wl-purple to-wl-teal text-white font-bold py-3 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
            🎮 Play Mission
          </button>
        ) : (
          <div className="w-full bg-gray-100 text-gray-600 font-bold py-3 px-6 rounded-xl text-center">
            Available {new Date(mission.releaseDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionCard;