import React from 'react';

const HelpHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-wl-teal via-wl-purple to-wl-purple-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl mb-6">💡</div>
          
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            How Can We Help?
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Find answers, guides, and support for WonderLeap
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HelpHero;