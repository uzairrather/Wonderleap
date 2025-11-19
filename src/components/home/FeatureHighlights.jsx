import React from 'react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: '🎮',
      title: '21 Interactive Missions',
      description: 'Explore careers through engaging gameplay across 7 unique zones',
      gradient: 'from-wl-teal to-wl-teal-dark'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Track student progress, skills, and achievements with detailed reports',
      gradient: 'from-wl-purple to-wl-purple-dark'
    },
    {
      icon: '🏆',
      title: 'Badges & Rewards',
      description: 'Earn recognition for completing missions and mastering new skills',
      gradient: 'from-wl-yellow to-wl-yellow-dark'
    },
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: 'GDPR compliant with role-based access and privacy-first design',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'Multi-Device Access',
      description: 'Play on desktop, tablet, or mobile - learning anywhere, anytime',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👥',
      title: 'Class Management',
      description: 'Teachers can easily assign missions and manage student groups',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Why Choose WonderLeap?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive careers exploration platform designed specifically for primary schools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
          >
            {/* Icon with Gradient Background */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-3xl">{feature.icon}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600">
              {feature.description}
            </p>

            {/* Hover Effect Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-6">
          Ready to transform how students explore careers?
        </p>
        <button className="btn-primary text-lg">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default FeatureHighlights;