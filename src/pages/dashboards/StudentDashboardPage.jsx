import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { zonesData } from '../../utils/zonesData';

const StudentDashboardPage = () => {
  const { user } = useAuth();

  // Mock data
  const stats = {
    missionsCompleted: 12,
    zonesExplored: 5,
    badgesEarned: 8,
    currentStreak: 4
  };

  const badges = [
    { emoji: '⭐', name: 'Mission Master', unlocked: true },
    { emoji: '🚀', name: 'Quick Learner', unlocked: true },
    { emoji: '💎', name: 'Perfect Score', unlocked: true },
    { emoji: '🔥', name: 'Week Streak', unlocked: true },
    { emoji: '🏆', name: 'Zone Champion', unlocked: false },
    { emoji: '🎯', name: 'Skill Master', unlocked: false },
    { emoji: '🌟', name: 'Explorer', unlocked: false },
    { emoji: '👑', name: 'Ultimate Pro', unlocked: false },
  ];

  const recentMissions = [
    { id: 1, name: 'Fix the Classroom Lights', zone: 'STEM Lab', score: 95, completed: true },
    { id: 2, name: 'Design Stage', zone: 'Creative Studio', score: 88, completed: true },
    { id: 3, name: 'First Aid Champion', zone: 'Health Heroes', score: 92, completed: true },
  ];

  const nextMissions = zonesData.slice(0, 4).map(zone => ({
    ...zone.missions[0],
    zoneName: zone.name,
    zoneEmoji: zone.emoji
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-wl-yellow via-wl-teal to-wl-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">
                Hey {user?.firstName || 'Explorer'}! 🎉
              </h1>
              <p className="text-xl text-white/90">
                Ready for your next adventure?
              </p>
            </div>
            <div className="text-6xl animate-float">
              🚀
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card padding="lg" gradient gradientColors="from-wl-teal to-wl-teal-dark">
            <div className="text-center">
              <div className="text-4xl mb-2">🎮</div>
              <div className="text-3xl font-bold mb-1">{stats.missionsCompleted}</div>
              <div className="text-sm opacity-90">Missions Done</div>
            </div>
          </Card>

          <Card padding="lg" gradient gradientColors="from-wl-purple to-wl-purple-dark">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <div className="text-3xl font-bold mb-1">{stats.zonesExplored}</div>
              <div className="text-sm opacity-90">Zones Explored</div>
            </div>
          </Card>

          <Card padding="lg" gradient gradientColors="from-wl-yellow to-wl-yellow-dark">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-3xl font-bold mb-1">{stats.badgesEarned}</div>
              <div className="text-sm opacity-90">Badges Earned</div>
            </div>
          </Card>

          <Card padding="lg" gradient gradientColors="from-green-400 to-green-600">
            <div className="text-center">
              <div className="text-4xl mb-2">🔥</div>
              <div className="text-3xl font-bold mb-1">{stats.currentStreak}</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Playing */}
            <Card>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                🎯 Next Missions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nextMissions.map((mission, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-wl-purple hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-4xl">{mission.zoneEmoji}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{mission.title}</h3>
                        <p className="text-sm text-gray-600">{mission.zoneName}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{mission.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">⏱️ {mission.duration}</span>
                      <Button variant="primary" size="sm">
                        Play Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Missions */}
            <Card>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                📚 Recently Completed
              </h2>

              <div className="space-y-3">
                {recentMissions.map((mission) => (
                  <div 
                    key={mission.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900">{mission.name}</h3>
                      <p className="text-sm text-gray-600">{mission.zone}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{mission.score}%</div>
                      <p className="text-xs text-gray-500">Score</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Badges */}
            <Card>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                🏆 Your Badges
              </h2>

              <div className="grid grid-cols-4 gap-3">
                {badges.map((badge, index) => (
                  <div 
                    key={index}
                    className={`text-center p-3 rounded-lg transition-all ${
                      badge.unlocked 
                        ? 'bg-gradient-to-br from-wl-yellow to-wl-yellow-dark transform hover:scale-110' 
                        : 'bg-gray-100 opacity-40'
                    }`}
                  >
                    <div className="text-3xl">{badge.emoji}</div>
                    <p className="text-xs font-semibold mt-1 text-gray-700">{badge.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  {badges.filter(b => b.unlocked).length} of {badges.length} unlocked
                </p>
              </div>
            </Card>

            {/* Explore Zones */}
            <Card gradient gradientColors="from-wl-purple to-wl-teal" className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-display font-bold mb-3">
                Explore All Zones
              </h3>
              <p className="text-white/90 mb-6">
                Discover 7 amazing career zones with 21 missions!
              </p>
              <Link to="/zones">
                <Button variant="secondary" className="w-full">
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