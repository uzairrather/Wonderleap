import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getAllMissions, getLiveMissions } from '../../utils/zonesData';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const StudentDashboardPage = () => {
  const { user } = useAuth();

  // Get live missions for "Next Missions" section
  const liveMissions = getLiveMissions();
  const nextMissions = liveMissions.slice(0, 4); // Show first 4 live missions

  // Mock completed missions data
  const completedMissions = [
    {
      id: 'fix-lights',
      title: 'Fix Classroom Lights',
      zone: 'STEM Lab',
      score: 95,
      completedAt: '2 days ago'
    },
    {
      id: 'design-stage',
      title: 'Design Stage',
      zone: 'Creative Studio',
      score: 88,
      completedAt: '4 days ago'
    },
    {
      id: 'first-aid',
      title: 'First Aid Champion',
      zone: 'Health Heroes',
      score: 92,
      completedAt: '1 week ago'
    }
  ];

  // Mock badges data
  const badges = [
    { id: 1, name: 'Mission Master', emoji: '⭐', unlocked: true, unlockedDate: '2 days ago' },
    { id: 2, name: 'Quick Learner', emoji: '🚀', unlocked: true, unlockedDate: '5 days ago' },
    { id: 3, name: 'Perfect Score', emoji: '💎', unlocked: true, unlockedDate: '1 week ago' },
    { id: 4, name: 'Week Streak', emoji: '🔥', unlocked: true, unlockedDate: '1 week ago' },
    { id: 5, name: 'Zone Champion', emoji: '🏆', unlocked: false },
    { id: 6, name: 'Skill Master', emoji: '🎯', unlocked: false },
    { id: 7, name: 'Explorer', emoji: '🗺️', unlocked: false },
    { id: 8, name: 'Ultimate Pro', emoji: '👑', unlocked: false }
  ];

  const unlockedBadges = badges.filter(b => b.unlocked);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-teal-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Rocket Animation */}
        <div className="mb-8 text-center">
          <div className="text-6xl mb-4 animate-bounce">🚀</div>
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName || 'Student'}!
          </h1>
          <p className="text-xl text-gray-600">
            Ready for your next adventure?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Missions Done */}
          <Card gradient="from-teal-400 to-teal-600" className="text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Missions Done</p>
                <p className="text-4xl font-bold">12</p>
              </div>
              <div className="text-5xl">🎮</div>
            </div>
          </Card>

          {/* Zones Explored */}
          <Card gradient="from-purple-400 to-purple-600" className="text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Zones Explored</p>
                <p className="text-4xl font-bold">5</p>
              </div>
              <div className="text-5xl">🗺️</div>
            </div>
          </Card>

          {/* Badges Earned */}
          <Card gradient="from-yellow-400 to-yellow-600" className="text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Badges Earned</p>
                <p className="text-4xl font-bold">{unlockedBadges.length}</p>
              </div>
              <div className="text-5xl">🏆</div>
            </div>
          </Card>

          {/* Day Streak */}
          <Card gradient="from-green-400 to-green-600" className="text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Day Streak</p>
                <p className="text-4xl font-bold">4</p>
              </div>
              <div className="text-5xl">🔥</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Next Missions */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">🎯 Next Missions for You</h2>
                <Link to="/zones">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nextMissions.map((mission, index) => (
                  <div
                    key={`${mission.id}-${index}`}
                    className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-3xl">🎮</div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        {mission.duration}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{mission.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{mission.description}</p>
                    <Button variant="primary" size="sm" className="w-full">
                      Play Now →
                    </Button>
                  </div>
                ))}
              </div>

              {nextMissions.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <p className="text-gray-600">
                    You've completed all available missions! Check back soon for new ones.
                  </p>
                </div>
              )}
            </Card>

            {/* Recently Completed */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">✅ Recently Completed</h2>

              <div className="space-y-4">
                {completedMissions.map((mission) => (
                  <div
                    key={mission.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{mission.title}</h3>
                        <p className="text-sm text-gray-600">{mission.zone} • {mission.completedAt}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-teal-600">{mission.score}%</div>
                      <p className="text-xs text-gray-500">Score</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Your Badges */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🏆 Your Badges</h2>
              
              <div className="grid grid-cols-4 gap-3 mb-4">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all ${
                      badge.unlocked
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white hover:scale-110 cursor-pointer'
                        : 'bg-gray-100 text-gray-400 opacity-40'
                    }`}
                    title={badge.name}
                  >
                    <div className="text-3xl mb-1">{badge.emoji}</div>
                    {badge.unlocked && (
                      <div className="text-xs font-semibold text-center px-1">
                        {badge.name.split(' ')[0]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-gray-600">
                <span className="font-bold text-teal-600">{unlockedBadges.length}</span> of {badges.length} unlocked
              </p>
            </Card>

            {/* Careers Explored Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">🌟 Careers Explored</h2>
                <Link to="/careers">
                  <Button variant="outline" size="sm">
                    View All →
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '⚡', name: 'Electrician', zone: 'STEM' },
                  { emoji: '🎭', name: 'Stage Designer', zone: 'Creative' },
                  { emoji: '👩‍⚕️', name: 'Nurse', zone: 'Health' },
                  { emoji: '👮', name: 'Police Officer', zone: 'Community' }
                ].map((career, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl p-3 text-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="text-3xl mb-1">{career.emoji}</div>
                    <p className="font-semibold text-gray-800 text-xs">{career.name}</p>
                    <p className="text-xs text-gray-600">{career.zone}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <Link to="/careers" className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                  Explore 21+ careers →
                </Link>
              </div>
            </Card>

            {/* Explore All Zones CTA */}
            <Card gradient="from-purple-500 to-teal-500" className="p-6 text-white text-center">
              <div className="text-5xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold mb-2">Explore All Zones</h3>
              <p className="text-white/90 text-sm mb-4">
                Discover 7 amazing career zones with exciting missions!
              </p>
              <Link to="/zones">
                <Button variant="secondary" size="md" className="w-full">
                  View All Zones
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;