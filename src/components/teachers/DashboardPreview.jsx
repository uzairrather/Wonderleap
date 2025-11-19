import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Your Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A powerful dashboard designed specifically for teachers to manage missions, track progress, and celebrate student success
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-300">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-wl-teal to-wl-purple p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Teacher Dashboard</h3>
                  <p className="text-white/80">Welcome back, Mrs. Smith! 👋</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-white font-semibold">Class 4B</p>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stat Cards */}
                <div className="bg-gradient-to-br from-wl-teal-light to-wl-teal rounded-xl p-6 text-white text-center">
                  <div className="text-5xl font-bold mb-2">28</div>
                  <div className="text-sm opacity-90">Active Students</div>
                </div>
                <div className="bg-gradient-to-br from-wl-purple-light to-wl-purple rounded-xl p-6 text-white text-center">
                  <div className="text-5xl font-bold mb-2">156</div>
                  <div className="text-sm opacity-90">Missions Completed</div>
                </div>
                <div className="bg-gradient-to-br from-wl-yellow-light to-wl-yellow rounded-xl p-6 text-white text-center">
                  <div className="text-5xl font-bold mb-2">89%</div>
                  <div className="text-sm opacity-90">Average Completion</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📊</span>
                  Recent Activity
                </h4>
                
                <div className="space-y-3">
                  {[
                    { student: 'Emma Johnson', mission: 'STEM Lab: Fix the Lights', status: 'Completed', time: '2 hours ago' },
                    { student: 'Oliver Smith', mission: 'Creative Studio: Design Stage', status: 'In Progress', time: '4 hours ago' },
                    { student: 'Sophia Williams', mission: 'Health Heroes: First Aid', status: 'Completed', time: '1 day ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg">
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
              </div>
            </div>
          </div>

          {/* Features Below Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: '📈', label: 'Real-Time Analytics' },
              { icon: '📄', label: 'Downloadable Reports' },
              { icon: '👥', label: 'Class Management' },
              { icon: '🎯', label: 'Progress Tracking' }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;