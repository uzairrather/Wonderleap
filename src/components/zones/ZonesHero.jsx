import React from 'react';

const ZonesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-wl-purple via-wl-teal to-wl-yellow overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-7xl mb-6">🗺️</div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Explore 7 Career Zones
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Discover exciting careers through 21 interactive missions designed to inspire and educate!
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                <div className="text-4xl font-bold mb-1">7</div>
                <div className="text-sm text-white/80">Career Zones</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                <div className="text-4xl font-bold mb-1">21</div>
                <div className="text-sm text-white/80">Interactive Missions</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-white/80">Skills to Learn</div>
              </div>
            </div>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Each zone features 3 unique missions that help students explore different career paths while developing essential skills.
            </p>
          </div>
        </div>
      </div>

      {/* Wave Shape Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default ZonesHero;