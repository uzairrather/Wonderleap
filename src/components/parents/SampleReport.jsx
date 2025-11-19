import React from 'react';

const SampleReport = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Sample Progress Report
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what you'll see in your parent dashboard
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Report Card */}
          <div className="bg-white border-4 border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-wl-teal to-wl-purple p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Emma's Progress Report</h3>
                  <p className="text-white/80">Year 5 • Last 30 Days</p>
                </div>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition">
                  📥 Download PDF
                </button>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              {/* Summary Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-wl-teal-light to-wl-teal rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-1">12</div>
                  <div className="text-sm opacity-90">Missions Completed</div>
                </div>
                <div className="bg-gradient-to-br from-wl-purple-light to-wl-purple rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-1">5</div>
                  <div className="text-sm opacity-90">Zones Explored</div>
                </div>
                <div className="bg-gradient-to-br from-wl-yellow-light to-wl-yellow rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-1">8</div>
                  <div className="text-sm opacity-90">Badges Earned</div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-1">4.5</div>
                  <div className="text-sm opacity-90">Hours Played</div>
                </div>
              </div>

              {/* Skills Developed */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Skills Developed
                </h4>
                <div className="space-y-3">
                  {[
                    { skill: 'Problem Solving', level: 85, color: 'bg-wl-teal' },
                    { skill: 'Creativity', level: 92, color: 'bg-wl-purple' },
                    { skill: 'Digital Literacy', level: 78, color: 'bg-wl-yellow' },
                    { skill: 'Teamwork', level: 88, color: 'bg-green-500' }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-700">{item.skill}</span>
                        <span className="text-sm font-bold text-gray-900">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${item.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Recent Achievements
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { emoji: '⭐', name: 'Mission Master', date: '2 days ago' },
                    { emoji: '🚀', name: 'Quick Learner', date: '5 days ago' },
                    { emoji: '💎', name: 'Perfect Score', date: '1 week ago' },
                    { emoji: '🔥', name: 'Week Streak', date: '1 week ago' }
                  ].map((badge, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 text-center border-2 border-gray-200">
                      <div className="text-4xl mb-2">{badge.emoji}</div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{badge.name}</p>
                      <p className="text-xs text-gray-500">{badge.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReport;