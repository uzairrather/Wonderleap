import React from 'react';
import { Link } from 'react-router-dom';

const PricingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-wl-purple via-wl-purple-dark to-wl-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <span className="text-6xl">🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Classroom?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Join hundreds of schools already using WonderLeap to inspire the next generation
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-white/80">Schools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
              <div className="text-sm md:text-base text-white/80">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
              <div className="text-sm md:text-base text-white/80">Teacher Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-wl-purple hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-2xl">
              Request a Free Demo
            </button>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-wl-purple font-bold py-4 px-10 rounded-lg text-lg transition duration-300 text-center"
            >
              View Pricing Plans
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Trusted by leading educational institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span className="text-sm">🏫 Primary Schools</span>
              <span className="text-sm">🎓 Academy Trusts</span>
              <span className="text-sm">🏛️ Local Authorities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;