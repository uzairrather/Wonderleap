import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-wl-teal via-wl-purple to-wl-yellow overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[550px]">
            {/* Left Content - Better Centered */}
            <div className="text-white z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight">
                Discover, Leap and Succeed
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-white/90 max-w-xl">
                Embark on an exciting journey through 7 career zones and 21 interactive missions designed for primary school students.
              </p>
              
              <p className="text-base md:text-lg mb-8 md:mb-10 text-white/80 max-w-xl">
                Join Wonda and explore the amazing world of careers while developing essential skills for the future!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
                <Link
                  to="/students"
                  className="bg-white text-wl-purple hover:bg-gray-100 font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-2xl text-center"
                >
                  Start Exploring
                </Link>
                <Link
                  to="/teachers"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-wl-purple font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition duration-300 transform hover:scale-105 text-center"
                >
                  For Teachers
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-3 md:py-4 px-2 md:px-4">
                  <div className="text-3xl md:text-4xl font-bold mb-1">7</div>
                  <div className="text-xs md:text-sm text-white/80">Career Zones</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-3 md:py-4 px-2 md:px-4">
                  <div className="text-3xl md:text-4xl font-bold mb-1">21</div>
                  <div className="text-xs md:text-sm text-white/80">Missions</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-3 md:py-4 px-2 md:px-4">
                  <div className="text-3xl md:text-4xl font-bold mb-1">∞</div>
                  <div className="text-xs md:text-sm text-white/80">Adventures</div>
                </div>
              </div>
            </div>

            {/* Right Content - Wonda Mascot */}
            <div className="relative z-10 hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Wonda Mascot */}
                <div className="w-[350px] h-[350px] xl:w-[400px] xl:h-[400px] bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center animate-float shadow-2xl">
                  <div className="text-center">
                    <div className="text-8xl xl:text-9xl mb-4">🚀</div>
                    <p className="text-white text-2xl xl:text-3xl font-bold">Wonda</p>
                    <p className="text-white/80 text-base xl:text-lg">Your Career Guide</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 xl:w-24 xl:h-24 bg-wl-yellow rounded-full animate-bounce-slow opacity-80"></div>
                <div className="absolute -bottom-10 -left-10 w-28 h-28 xl:w-32 xl:h-32 bg-wl-teal rounded-full animate-bounce-slow opacity-80" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Shape Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;