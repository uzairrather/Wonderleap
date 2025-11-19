import React from 'react';

const TeacherFeatures = () => {
  const features = [
    {
      icon: '📋',
      title: 'Easy Assignment',
      description: 'Assign missions to entire classes or individual students in just a few clicks',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📊',
      title: 'Detailed Analytics',
      description: 'View comprehensive reports on student progress, skills developed, and time spent',
      gradient: 'from-wl-purple to-wl-purple-dark'
    },
    {
      icon: '🎯',
      title: 'Curriculum Aligned',
      description: 'All missions align with national curriculum standards for careers education',
      gradient: 'from-wl-teal to-wl-teal-dark'
    },
    {
      icon: '💾',
      title: 'Export Reports',
      description: 'Download detailed CSV and PDF reports for record-keeping and parent meetings',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: '👥',
      title: 'Class Management',
      description: 'Organize students into classes, manage groups, and control access easily',
      gradient: 'from-wl-yellow to-wl-yellow-dark'
    },
    {
      icon: '🔔',
      title: 'Instant Notifications',
      description: 'Get real-time updates when students complete missions or achieve milestones',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Built for Teachers, By Educators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to deliver engaging careers education with minimal prep time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
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

export default TeacherFeatures;