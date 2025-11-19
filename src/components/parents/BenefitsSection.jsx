import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Future-Ready Skills',
      description: 'Your child develops essential skills like problem-solving, creativity, digital literacy, and career awareness.',
      icon: '🚀',
      stats: '21 Skills Taught'
    },
    {
      title: 'Curriculum Aligned',
      description: 'All content meets national curriculum standards and supports Gatsby Benchmark requirements for careers education.',
      icon: '📚',
      stats: '100% Aligned'
    },
    {
      title: 'Safe & Secure',
      description: 'GDPR compliant with strict privacy controls. No personal data is shared, and all content is age-appropriate.',
      icon: '🔒',
      stats: 'Fully Protected'
    },
    {
      title: 'Engaging Learning',
      description: 'Children learn through play with interactive missions that make career exploration fun and memorable.',
      icon: '🎮',
      stats: '95% Engagement'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Why Parents Love WonderLeap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of parents to support their children's future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-wl-teal to-wl-purple rounded-2xl flex items-center justify-center text-4xl shadow-lg transform hover:scale-110 transition">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-display font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <span className="bg-wl-teal/10 text-wl-teal px-3 py-1 rounded-full text-sm font-semibold">
                      {benefit.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-wl-purple to-wl-teal rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl">
                👩
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl md:text-2xl mb-4 italic">
                "My daughter has discovered a passion for science through WonderLeap. She's excited about her future, and I can see her confidence growing every day!"
              </p>
              <p className="font-bold text-lg">Sarah Thompson</p>
              <p className="text-white/80">Parent of Year 5 Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;