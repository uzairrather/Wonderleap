import React from 'react';

const WorkflowSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Assign Missions',
      description: 'Choose from 21 interactive missions across 7 career zones and assign them to your class or individual students.',
      icon: '📋',
      color: 'from-wl-teal to-wl-teal-dark'
    },
    {
      number: '02',
      title: 'Students Play & Learn',
      description: 'Students engage with immersive career exploration missions, developing key skills while having fun.',
      icon: '🎮',
      color: 'from-wl-purple to-wl-purple-dark'
    },
    {
      number: '03',
      title: 'Track & Measure',
      description: 'Monitor real-time progress, view detailed analytics, and download comprehensive reports on student achievement.',
      icon: '📊',
      color: 'from-wl-yellow to-wl-yellow-dark'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Simple 3-Step Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assign missions, let students explore careers, and track their progress—all in one seamless platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-wl-teal via-wl-purple to-wl-yellow opacity-30 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-2xl mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <svg className="w-8 h-8 text-wl-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;