import React from 'react';
import { Link } from 'react-router-dom';

const RoleButtons = () => {
  const roles = [
    {
      title: 'Teachers',
      description: 'Assign missions, track progress, and measure student growth',
      icon: '👩‍🏫',
      link: '/teachers',
      color: 'from-wl-teal to-wl-teal-dark',
      features: ['Dashboard', 'Reports', 'Class Management']
    },
    {
      title: 'Students',
      description: 'Play missions, earn badges, and explore exciting careers',
      icon: '🎓',
      link: '/students',
      color: 'from-wl-purple to-wl-purple-dark',
      features: ['Play Games', 'Earn Badges', 'Track Progress']
    },
    {
      title: 'Parents',
      description: 'Monitor progress, view achievements, and support learning',
      icon: '👨‍👩‍👧',
      link: '/parents',
      color: 'from-wl-yellow to-wl-yellow-dark',
      features: ['View Progress', 'Skill Reports', 'Achievements']
    }
  ];

  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Choose Your Path
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you're a teacher, student, or parent, WonderLeap has something special for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <Link
            key={index}
            to={role.link}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Gradient Background */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${role.color}`}></div>
            
            <div className="p-8">
              {/* Icon */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {role.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {role.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                {role.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {role.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <div className={`inline-flex items-center text-transparent bg-gradient-to-r ${role.color} bg-clip-text font-semibold group-hover:underline`}>
                Get Started
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoleButtons;