import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoShowcase = () => {
  const [activeTab, setActiveTab] = useState('video');

  const demoGames = [
    {
      id: 1,
      title: 'STEM Lab Mission 1',
      description: 'Fix the Classroom Lights - Learn about electrical circuits',
      zone: 'STEM & Future Tech Lab',
      thumbnail: '⚡',
      color: 'bg-wl-teal'
    },
    {
      id: 2,
      title: 'Creative Studio Mission 1',
      description: 'Design Your Dream Stage - Explore performance arts',
      zone: 'Creative & Performance Studio',
      thumbnail: '🎭',
      color: 'bg-wl-purple'
    }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          See WonderLeap in Action
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Watch how our missions bring careers to life or try a demo game yourself
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white rounded-lg shadow-md p-1">
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'video'
                ? 'bg-wl-teal text-white'
                : 'text-gray-600 hover:text-wl-teal'
            }`}
          >
            📹 Watch Demo
          </button>
          <button
            onClick={() => setActiveTab('play')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'play'
                ? 'bg-wl-purple text-white'
                : 'text-gray-600 hover:text-wl-purple'
            }`}
          >
            🎮 Try Now
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto">
        {activeTab === 'video' ? (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-wl-teal via-wl-purple to-wl-yellow flex items-center justify-center">
              <div className="text-center text-white">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full mb-4 cursor-pointer hover:bg-white/30 transition">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xl font-semibold">Watch Our Platform Demo</p>
                <p className="text-white/80 mt-2">2:30 minutes</p>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Discover How WonderLeap Works
              </h3>
              <p className="text-gray-600">
                See how teachers assign missions, students play and learn, and parents track progress - all in one seamless platform.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoGames.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Game Thumbnail */}
                <div className={`relative h-64 ${game.color} flex items-center justify-center`}>
                  <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {game.thumbnail}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                {/* Game Info */}
                <div className="p-6">
                  <div className="text-sm text-wl-teal font-semibold mb-2">
                    {game.zone}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {game.description}
                  </p>
                  
                  <Link
                    to={`/demo/${game.id}`}
                    className="inline-flex items-center justify-center w-full btn-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-6">
          Want to explore all 21 missions?
        </p>
        <Link to="/zones" className="btn-secondary text-lg">
          View All Career Zones
        </Link>
      </div>
    </section>
  );
};

export default VideoShowcase;