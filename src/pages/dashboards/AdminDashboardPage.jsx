import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

const AdminDashboardPage = () => {
  const { user } = useAuth();
  const [showSchedulerModal, setShowSchedulerModal] = useState(false);

  // Mock data
  const stats = {
    totalUsers: 15847,
    activeSchools: 523,
    missionsPlayed: 45632,
    revenue: '£124,500'
  };

  const recentSchools = [
    { name: 'Greenfield Primary', location: 'London', students: 245, status: 'Active', plan: 'Multi-Academy' },
    { name: 'Riverside Academy', location: 'Manchester', students: 180, status: 'Active', plan: 'Single School' },
    { name: 'Oak Tree School', location: 'Birmingham', students: 320, status: 'Trial', plan: 'Trial' },
  ];

  const systemHealth = [
    { name: 'API Response Time', value: '124ms', status: 'good', icon: '⚡' },
    { name: 'Database Load', value: '45%', status: 'good', icon: '💾' },
    { name: 'Active Sessions', value: '1,234', status: 'good', icon: '👥' },
    { name: 'Error Rate', value: '0.02%', status: 'good', icon: '✅' },
  ];

  const upcomingReleases = [
    { mission: 'Robot Rescue Mission', zone: 'STEM Lab', date: '2025-01-15', status: 'scheduled' },
    { mission: 'Direct Your Own Play', zone: 'Creative Studio', date: '2025-02-01', status: 'scheduled' },
    { mission: 'Design a Treehouse', zone: 'Makers Workshop', date: '2025-01-20', status: 'scheduled' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">
                Admin Dashboard 👑
              </h1>
              <p className="text-xl text-white/90">
                System Overview & Management
              </p>
            </div>
            <Button 
              variant="accent" 
              icon="🚀"
              onClick={() => setShowSchedulerModal(true)}
            >
              Schedule Mission
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">👥</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">🏫</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.activeSchools}</div>
              <div className="text-sm text-gray-600">Active Schools</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">🎮</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.missionsPlayed.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Missions Played</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">💰</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.revenue}</div>
              <div className="text-sm text-gray-600">Monthly Revenue</div>
            </div>
          </Card>
        </div>

        {/* System Health */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            System Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {systemHealth.map((metric, index) => (
              <Card key={index} padding="md">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{metric.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">{metric.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    metric.status === 'good' ? 'bg-green-500' : 
                    metric.status === 'warning' ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`}></div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Schools */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-gray-900">
                Recent Schools
              </h2>
              <Link to="/admin/schools">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>

            <div className="space-y-3">
              {recentSchools.map((school, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{school.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      school.status === 'Active' ? 'bg-green-100 text-green-700' :
                      school.status === 'Trial' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {school.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>📍 {school.location}</span>
                    <span>👥 {school.students} students</span>
                    <span className="font-semibold">{school.plan}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Releases */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-gray-900">
                Upcoming Releases
              </h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSchedulerModal(true)}
              >
                + Schedule
              </Button>
            </div>

            <div className="space-y-3">
              {upcomingReleases.map((release, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-r from-wl-teal/10 to-wl-purple/10 rounded-lg border-2 border-wl-teal/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{release.mission}</h3>
                    <span className="text-sm font-semibold text-wl-purple">
                      {new Date(release.date).toLocaleDateString('en-GB')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{release.zone}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🗺️', label: 'Manage Zones', link: '/admin/zones' },
              { icon: '🎮', label: 'Manage Missions', link: '/admin/missions' },
              { icon: '🏫', label: 'Manage Schools', link: '/admin/schools' },
              { icon: '👥', label: 'Manage Users', link: '/admin/users' },
              { icon: '📊', label: 'Analytics', link: '/admin/analytics' },
              { icon: '💡', label: 'Help Content', link: '/admin/help' },
            ].map((action, index) => (
              <Link key={index} to={action.link}>
                <Card hover padding="lg" className="text-center cursor-pointer h-full">
                  <div className="text-5xl mb-3">{action.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">{action.label}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Mission Modal */}
      <Modal 
        isOpen={showSchedulerModal} 
        onClose={() => setShowSchedulerModal(false)}
        title="Schedule Mission Release"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Mission
            </label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20">
              <option>Robot Rescue Mission</option>
              <option>Garden Detective</option>
              <option>Climate Change Heroes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Release Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20"
            />
          </div>

          <div className="flex space-x-4">
            <Button 
              variant="secondary" 
              onClick={() => setShowSchedulerModal(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={() => setShowSchedulerModal(false)}
              className="flex-1"
            >
              Schedule Release
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminDashboardPage;