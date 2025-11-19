import React from 'react';

const BadgesShowcase = () => {
  const badges = [
    { emoji: '⭐', name: 'Mission Master', description: 'Complete 5 missions' },
    { emoji: '🏆', name: 'Zone Champion', description: 'Finish all missions in a zone' },
    { emoji: '🚀', name: 'Quick Learner', description: 'Complete a mission in under 10 mins' },
    { emoji: '💎', name: 'Perfect Score', description: 'Get 100% on any mission' },
    { emoji: '🔥', name: 'Week Streak', description: 'Play 7 days in a row' },
    { emoji: '🎯', name: 'Skill Master', description: 'Master 10 different skills' },
    { emoji: '🌟', name: 'Explorer', description: 'Try all 7 career zones' },
    { emoji: '👑', name: 'Ultimate Pro', description: 'Complete all 21 missions' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Collect Cool Badges!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn awesome badges as you complete missions and learn new skills
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 text-center group"
            >
              <div className="text-6xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                {badge.emoji}
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">
                {badge.name}
              </h3>
              <p className="text-sm text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-wl-purple via-wl-teal to-wl-yellow rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="text-6xl mb-6">🎮</div>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready for Your Adventure?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students already exploring amazing careers!
          </p>
          <button className="bg-white text-wl-purple hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-xl">
            Start Playing Now! 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default BadgesShowcase;