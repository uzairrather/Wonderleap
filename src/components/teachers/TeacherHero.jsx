import React from 'react';
import { Link } from 'react-router-dom';

const TeacherHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-wl-teal via-wl-purple to-wl-purple-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white font-semibold">For Educators</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Empower Your Students' Career Exploration
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
              Assign engaging missions, track student progress in real-time, and prepare your class for future success.
            </p>

            {/* Key Stats - FIXED LAYOUT */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">21</div>
                <div className="text-sm md:text-base text-white/80">Missions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
                <div className="text-sm md:text-base text-white/80">Career Zones</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-sm md:text-base text-white/80">Engaging</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <button className="bg-white text-wl-purple hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-2xl">
                Request a Demo
              </button>
              <Link
                to="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-wl-purple font-bold py-4 px-8 rounded-lg text-lg transition duration-300 text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative z-10 hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Teacher Illustration Placeholder */}
              <div className="w-[400px] h-[400px] bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-9xl mb-4">👩‍🏫</div>
                  <p className="text-white text-xl font-bold">Teacher Dashboard</p>
                  <p className="text-white/80">Track & Manage</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-wl-yellow rounded-lg p-4 shadow-xl animate-bounce-slow">
                <div className="text-3xl">📊</div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg p-4 shadow-xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                <div className="text-3xl">✅</div>
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

export default TeacherHero;