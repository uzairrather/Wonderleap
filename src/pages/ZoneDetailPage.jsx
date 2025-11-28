import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { zonesData, getMissionsByZone } from '../utils/zonesData';
import MissionCard from '../components/zones/MissionCard';
import Button from '../components/common/Button';

const ZoneDetailPage = () => {
  const { zoneId } = useParams();
  
  // Get zone and missions
  const zone = zonesData.find(z => z.id === zoneId);
  const zoneMissions = getMissionsByZone(zoneId);

  // If zone not found
  if (!zone) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤔</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Zone Not Found</h2>
          <Link to="/zones">
            <Button variant="primary">Back to Zones</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/zones" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Zones
          </Link>

          {/* Zone Header */}
          <div className={`bg-gradient-to-r ${zone.gradient} rounded-2xl p-8 md:p-12 text-white mb-12 shadow-2xl`}>
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce-slow">{zone.emoji}</div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {zone.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {zone.description}
              </p>
            </div>
          </div>

          {/* Skills Focus Section */}
          {zone.skills_focus && zone.skills_focus.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Skills You'll Develop</h2>
              <div className="flex flex-wrap gap-3">
                {zone.skills_focus.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-${zone.color}-100 text-${zone.color}-800 rounded-lg font-semibold capitalize`}
                  >
                    ⭐ {skill.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Missions Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">
                🎮 Missions in This Zone
              </h2>
              <span className="text-gray-600 font-semibold">
                {zoneMissions.length} Mission{zoneMissions.length !== 1 ? 's' : ''}
              </span>
            </div>

            {zoneMissions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoneMissions.map((mission) => (
                  <MissionCard
                    key={mission.id}
                    mission={mission}
                    zone={zone}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  Missions Coming Soon!
                </h3>
                <p className="text-gray-600">
                  We're working hard to create amazing missions for this zone.
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-xl mb-6 text-white/90">
              Explore more zones and discover exciting careers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/zones">
                <Button variant="secondary" size="lg">
                  Explore All Zones
                </Button>
              </Link>
              <Link to="/careers">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Discover Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ZoneDetailPage;