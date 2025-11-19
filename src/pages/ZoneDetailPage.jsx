import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { zonesData } from '../utils/zonesData';
import MissionCard from '../components/zones/MissionCard';

const ZoneDetailPage = () => {
  const { zoneId } = useParams();
  const zone = zonesData.find(z => z.id === parseInt(zoneId));
  const [keyStageFilter, setKeyStageFilter] = useState('all');

  if (!zone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zone Not Found</h1>
          <Link to="/zones" className="text-wl-purple hover:underline">
            ← Back to Zones
          </Link>
        </div>
      </div>
    );
  }

  const filteredMissions = keyStageFilter === 'all' 
    ? zone.missions 
    : zone.missions.filter(m => m.keyStage === keyStageFilter);

  return (
    <div className="min-h-screen">
      {/* Zone Hero */}
      <section className={`relative bg-gradient-to-br ${zone.color} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              to="/zones"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Zones
            </Link>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Zone Icon */}
              <div className="text-9xl animate-float">
                {zone.emoji}
              </div>

              {/* Zone Info */}
              <div className="text-white flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                  {zone.name}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl">
                  {zone.description}
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-3xl font-bold">{zone.missions.length}</div>
                    <div className="text-sm text-white/80">Total Missions</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-3xl font-bold">
                      {zone.missions.filter(m => m.status === 'live').length}
                    </div>
                    <div className="text-sm text-white/80">Live Now</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                    <div className="text-3xl font-bold">
                      {zone.missions.filter(m => m.status === 'coming-soon').length}
                    </div>
                    <div className="text-sm text-white/80">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 md:mb-0">
              Missions in This Zone
            </h2>

            {/* Key Stage Filter */}
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setKeyStageFilter('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  keyStageFilter === 'all'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Missions
              </button>
              <button
                onClick={() => setKeyStageFilter('KS1')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  keyStageFilter === 'KS1'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                KS1
              </button>
              <button
                onClick={() => setKeyStageFilter('KS2')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  keyStageFilter === 'KS2'
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                KS2
              </button>
            </div>
          </div>

          {/* Missions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                zoneColor={zone.color}
              />
            ))}
          </div>

          {filteredMissions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No missions available for {keyStageFilter}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ZoneDetailPage;