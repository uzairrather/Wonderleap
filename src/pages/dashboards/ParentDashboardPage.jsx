import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ParentDashboardPage = () => {
  const { user } = useAuth();

  // Mock data - single child for now
  const child = {
    name: 'Emma',
    age: 10,
    class: 'Year 5',
    school: 'Greenfield Primary'
  };

  const stats = {
    missionsCompleted: 12,
    zonesExplored: 5,
    hoursPlayed: 4.5,
    badgesEarned: 8
  };

  const skills = [
    { name: 'Problem Solving', level: 85, color: 'bg-wl-teal' },
    { name: 'Creativity', level: 92, color: 'bg-wl-purple' },
    { name: 'Digital Literacy', level: 78, color: 'bg-wl-yellow' },
    { name: 'Teamwork', level: 88, color: 'bg-green-500' }
  ];

  const recentActivity = [
    { mission: 'Fix the Classroom Lights', zone: 'STEM Lab', date: '2 days ago', score: 95 },
    { mission: 'Design Stage', zone: 'Creative Studio', date: '4 days ago', score: 88 },
    { mission: 'First Aid Champion', zone: 'Health Heroes', date: '1 week ago', score: 92 }
  ];

  const badges = [
    { emoji: '⭐', name: 'Mission Master', date: '2 days ago' },
    { emoji: '🚀', name: 'Quick Learner', date: '5 days ago' },
    { emoji: '💎', name: 'Perfect Score', date: '1 week ago' },
    { emoji: '🔥', name: 'Week Streak', date: '1 week ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-wl-teal to-wl-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-2">
            {child.name}'s Progress 📊
          </h1>
          <p className="text-xl text-white/90">
            {child.class} • {child.school}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">🎮</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.missionsCompleted}</div>
              <div className="text-sm text-gray-600">Missions Completed</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">🗺️</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.zonesExplored}</div>
              <div className="text-sm text-gray-600">Zones Explored</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">⏱️</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.hoursPlayed}</div>
              <div className="text-sm text-gray-600">Hours Played</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">🏆</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.badgesEarned}</div>
              <div className="text-sm text-gray-600">Badges Earned</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Progress */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  Skills Development
                </h2>
                <Button variant="outline" size="sm">
                  📥 Download Report
                </Button>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className={`${skill.color} h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Recent Activity
              </h2>

              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900">{activity.mission}</h3>
                      <p className="text-sm text-gray-600">{activity.zone} • {activity.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{activity.score}%</div>
                      <p className="text-xs text-gray-500">Score</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Badges */}
            <Card>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Recent Badges
              </h2>

              <div className="space-y-3">
                {badges.map((badge, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-wl-yellow/10 to-wl-yellow-dark/10 rounded-lg"
                  >
                    <div className="text-4xl">{badge.emoji}</div>
                    <div>
                      <p className="font-bold text-gray-900">{badge.name}</p>
                      <p className="text-xs text-gray-600">{badge.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card gradient gradientColors="from-wl-purple to-wl-teal">
              <h3 className="text-xl font-display font-bold mb-3">
                💡 Parenting Tips
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Discuss {child.name}'s favorite missions at dinner time to encourage reflection and goal-setting!
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                View More Tips
              </Button>
            </Card>

            {/* Support */}
            <Card>
              <div className="text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact your child's teacher or browse our help center
                </p>
                <Button variant="primary" size="sm" className="w-full">
                  Get Support
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboardPage;