import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { generateClassCode } from '../../utils/helpers';

const TeacherDashboardPage = () => {
  const { user } = useAuth();
  const [showCreateClassModal, setShowCreateClassModal] = useState(false);
  const [className, setClassName] = useState('');

  // Mock data - will be replaced with API calls
  const stats = {
    totalStudents: 28,
    activeClasses: 3,
    completedMissions: 156,
    averageCompletion: 89
  };

  const recentActivity = [
    { student: 'Emma Johnson', mission: 'Fix the Classroom Lights', status: 'Completed', time: '2 hours ago' },
    { student: 'Oliver Smith', mission: 'Design Stage', status: 'In Progress', time: '4 hours ago' },
    { student: 'Sophia Williams', mission: 'First Aid Champion', status: 'Completed', time: '1 day ago' },
  ];

  const classes = [
    { id: 1, name: 'Class 4B', students: 28, code: 'ABC123', active: true },
    { id: 2, name: 'Class 5A', students: 25, code: 'XYZ789', active: true },
    { id: 3, name: 'Year 6 Group', students: 15, code: 'DEF456', active: false },
  ];

  const handleCreateClass = () => {
    // TODO: API call to create class
    console.log('Creating class:', className);
    setShowCreateClassModal(false);
    setClassName('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-wl-teal to-wl-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">
                Welcome back, {user?.firstName || 'Teacher'}! 👋
              </h1>
              <p className="text-xl text-white/90">
                Your students have been busy exploring careers
              </p>
            </div>
            <Button 
              variant="secondary" 
              onClick={() => setShowCreateClassModal(true)}
              icon="+"
            >
              Create Class
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
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.totalStudents}</div>
              <div className="text-sm text-gray-600">Total Students</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">📚</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.activeClasses}</div>
              <div className="text-sm text-gray-600">Active Classes</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">✅</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.completedMissions}</div>
              <div className="text-sm text-gray-600">Missions Completed</div>
            </div>
          </Card>

          <Card padding="lg" hover>
            <div className="text-center">
              <div className="text-5xl mb-2">📊</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{stats.averageCompletion}%</div>
              <div className="text-sm text-gray-600">Avg Completion</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Classes */}
          <Card>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              My Classes
            </h2>

            <div className="space-y-4">
              {classes.map((classItem) => (
                <div 
                  key={classItem.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-wl-teal to-wl-purple rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {classItem.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{classItem.name}</h3>
                      <p className="text-sm text-gray-600">
                        {classItem.students} students • Code: <span className="font-mono font-bold">{classItem.code}</span>
                      </p>
                    </div>
                  </div>
                  <Link to={`/teacher/class/${classItem.id}`}>
                    <Button variant="primary" size="sm">
                      View
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-wl-purple to-wl-teal rounded-full flex items-center justify-center text-white font-bold">
                      {activity.student.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{activity.student}</p>
                      <p className="text-sm text-gray-600">{activity.mission}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      activity.status === 'Completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {activity.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card hover padding="lg" className="text-center cursor-pointer">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Assign Mission</h3>
              <p className="text-sm text-gray-600">Set new missions for students</p>
            </Card>

            <Card hover padding="lg" className="text-center cursor-pointer">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">View Reports</h3>
              <p className="text-sm text-gray-600">Download progress reports</p>
            </Card>

            <Card hover padding="lg" className="text-center cursor-pointer">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Manage Students</h3>
              <p className="text-sm text-gray-600">Add or remove students</p>
            </Card>

            <Link to="/help">
              <Card hover padding="lg" className="text-center cursor-pointer">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="font-bold text-gray-900 mb-2">Get Help</h3>
                <p className="text-sm text-gray-600">Browse help articles</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Create Class Modal */}
      <Modal 
        isOpen={showCreateClassModal} 
        onClose={() => setShowCreateClassModal(false)}
        title="Create New Class"
      >
        <div className="space-y-6">
          <div>
            <label htmlFor="className" className="block text-sm font-semibold text-gray-700 mb-2">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20 transition"
              placeholder="e.g., Class 4B, Year 5 Science"
            />
          </div>

          <div className="bg-wl-teal/10 border-2 border-wl-teal rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Your class code will be:</strong>
              <span className="block text-2xl font-mono font-bold text-wl-purple mt-2">
                {generateClassCode()}
              </span>
            </p>
          </div>

          <div className="flex space-x-4">
            <Button 
              variant="secondary" 
              onClick={() => setShowCreateClassModal(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleCreateClass}
              className="flex-1"
            >
              Create Class
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherDashboardPage;