import React from 'react';
import { Link } from 'react-router-dom';

const StudentHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-wl-yellow via-wl-teal to-wl-purple overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white rounded-full animate-bounce-slow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white z-10 text-center lg:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-white font-semibold">🎮 For Students</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Explore Amazing Careers!
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Join Wonda on an exciting adventure through 7 career zones! Play fun games, earn cool badges, and discover what you want to be when you grow up! 🚀
              </p>

              {/* Fun Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto lg:mx-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition">
                  <div className="text-4xl mb-2">🎮</div>
                  <div className="text-3xl font-bold mb-1">21</div>
                  <div className="text-sm text-white/80">Fun Games</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm text-white/80">Badges</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition">
                  <div className="text-4xl mb-2">⭐</div>
                  <div className="text-3xl font-bold mb-1">∞</div>
                  <div className="text-sm text-white/80">Fun!</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-wl-purple hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-2xl">
                  🎯 Start Playing Now!
                </button>
                
                  <a href="#class-code"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-wl-purple font-bold py-4 px-8 rounded-full text-lg transition duration-300 text-center"
                >
                  Enter Class Code
                </a>
              </div>
            </div>

            {/* Right Content - Wonda Character */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                {/* Main Wonda Character */}
                <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center animate-float shadow-2xl">
                  <div className="text-center">
                    <div className="text-9xl mb-4">🚀</div>
                    <p className="text-white text-3xl font-bold">Wonda</p>
                    <p className="text-white/80 text-lg">Your Adventure Guide!</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 bg-wl-teal rounded-full p-6 shadow-xl animate-bounce-slow">
                  <div className="text-4xl">🎨</div>
                </div>
                <div className="absolute top-20 -left-8 bg-wl-yellow rounded-full p-6 shadow-xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  <div className="text-4xl">🔬</div>
                </div>
                <div className="absolute -bottom-8 right-20 bg-wl-purple rounded-full p-6 shadow-xl animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <div className="text-4xl">🏥</div>
                </div>
              </div>
            </div>
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

export default StudentHero;