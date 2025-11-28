import React, { useState } from 'react';
import CareerCard from './CareerCard';
import InterestFeedback from './InterestFeedback';
import { useCareers } from '../../hooks/useCareers';

const CareerExplorer = ({ zoneId, missionId }) => {
  const { careers, getCareersByZoneId, logExploration, submitFeedback } = useCareers();
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [filter, setFilter] = useState('all');

  // Get careers for specific zone or all careers
  const displayedCareers = zoneId
    ? getCareersByZoneId(zoneId)
    : filter === 'all'
    ? careers
    : careers.filter(c => c.sector === filter);

  const handleCareerClick = (career) => {
    setSelectedCareer(career);
    
    // Log career exploration
    if (missionId) {
      logExploration(career.career_id, missionId);
    }
  };

  const handleFeedback = (careerId, feedbackType) => {
    submitFeedback(careerId, feedbackType);
  };

  const sectors = ['all', 'STEM', 'Creative', 'Engineering', 'Environment', 'Health', 'Public Service', 'Business'];

  return (
    <div className="space-y-6">
      {/* Sector Filter */}
      {!zoneId && (
        <div className="flex flex-wrap gap-2 mb-6">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setFilter(sector)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === sector
                  ? 'bg-gradient-to-r from-teal-500 to-purple-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {sector === 'all' ? '🌟 All Careers' : sector}
            </button>
          ))}
        </div>
      )}

      {/* Selected Career Detail View */}
      {selectedCareer ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedCareer(null)}
            className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold"
          >
            <span>←</span>
            <span>Back to Careers</span>
          </button>

          {/* Career Detail Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-br from-${selectedCareer.color}-400 to-${selectedCareer.color}-600 p-8 text-center text-white`}>
              <div className="text-8xl mb-4">{selectedCareer.icon}</div>
              <h2 className="text-4xl font-bold mb-2">{selectedCareer.name}</h2>
              <p className="text-xl opacity-90">{selectedCareer.sector}</p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What is a {selectedCareer.name}?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{selectedCareer.short_description}</p>
              </div>

              {/* Typical Tasks */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What Would You Do?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCareer.typical_tasks.map((task, index) => (
                    <li key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                      <span className="text-2xl">✓</span>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Tools You'd Use</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCareer.key_tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-${selectedCareer.color}-100 text-${selectedCareer.color}-800 rounded-lg font-semibold`}
                    >
                      🛠️ {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Skills You'd Need</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCareer.key_skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-semibold capitalize"
                    >
                      ⭐ {skill.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demand & Shortage Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2">🔥 Future Demand</h4>
                  <p className="text-green-700 capitalize">{selectedCareer.future_demand.replace('-', ' ')}</p>
                </div>
                {selectedCareer.skills_shortage && (
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-purple-800 mb-2">💼 Skills Shortage</h4>
                    <p className="text-purple-700">Lots of job opportunities!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interest Feedback */}
          <InterestFeedback career={selectedCareer} onFeedback={handleFeedback} />
        </div>
      ) : (
        /* Career Grid */
        <>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Explore Amazing Careers! 🚀
            </h2>
            <p className="text-gray-600">
              Click on any career to learn more about what they do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCareers.map((career) => (
              <CareerCard
                key={career.career_id}
                career={career}
                onClick={handleCareerClick}
              />
            ))}
          </div>

          {displayedCareers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No careers found</h3>
              <p className="text-gray-600">Try selecting a different filter</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CareerExplorer;