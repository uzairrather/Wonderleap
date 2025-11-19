import React from 'react';

const HowToPlay = () => {
  const steps = [
    {
      number: '1',
      emoji: '🎯',
      title: 'Choose a Mission',
      description: 'Pick from 21 exciting missions across 7 career zones. Each one is a fun adventure!',
      color: 'from-wl-teal to-wl-teal-dark',
      bgColor: 'bg-wl-teal'
    },
    {
      number: '2',
      emoji: '🎮',
      title: 'Play & Learn',
      description: 'Solve puzzles, complete challenges, and explore different careers in an exciting game!',
      color: 'from-wl-purple to-wl-purple-dark',
      bgColor: 'bg-wl-purple'
    },
    {
      number: '3',
      emoji: '🏆',
      title: 'Earn Badges',
      description: 'Collect cool badges and rewards as you complete missions and learn new skills!',
      color: 'from-wl-yellow to-wl-yellow-dark',
      bgColor: 'bg-wl-yellow'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            How to Play
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It's super easy! Just follow these 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Arrow (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-2">
            <div className="flex items-center justify-between h-full">
              <div className="w-1/3 h-1 bg-gradient-to-r from-wl-teal to-wl-purple"></div>
              <div className="w-1/3 h-1 bg-gradient-to-r from-wl-purple to-wl-yellow ml-auto"></div>
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-gray-100 h-full">
                {/* Number Badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} text-white font-bold text-3xl mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Emoji */}
                <div className="text-7xl mb-6 transform hover:scale-110 transition">
                  {step.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <svg className="w-10 h-10 text-wl-purple animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Ready to start your adventure? 🎉
          </p>
          <button className="bg-gradient-to-r from-wl-purple to-wl-teal text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-xl">
            Start Playing Now! 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;