import React from 'react';

const ProgressOverview = () => {
  const features = [
    {
      icon: '📊',
      title: 'Progress Reports',
      description: 'View detailed reports on missions completed, time spent, and skills developed by your child.',
      gradient: 'from-wl-teal to-wl-teal-dark'
    },
    {
      icon: '🎯',
      title: 'Skills Tracking',
      description: 'See which skills your child is developing—from problem-solving to creativity and teamwork.',
      gradient: 'from-wl-purple to-wl-purple-dark'
    },
    {
      icon: '🏆',
      title: 'Achievement Badges',
      description: 'Celebrate your child\'s success as they earn badges for completing missions and challenges.',
      gradient: 'from-wl-yellow to-wl-yellow-dark'
    },
    {
      icon: '📅',
      title: 'Activity Timeline',
      description: 'Track when your child plays, which missions they complete, and how long they spend learning.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💬',
      title: 'Teacher Messages',
      description: 'Receive updates and messages from your child\'s teacher about their career exploration journey.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: '📥',
      title: 'Download Reports',
      description: 'Export detailed progress reports as PDF or CSV for your records or parent meetings.',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What You Can Track
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about your child's learning journey with comprehensive insights and reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;