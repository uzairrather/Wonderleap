import React from 'react';

const AboutPage = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', emoji: '👩‍💼' },
    { name: 'Michael Chen', role: 'Head of Education', emoji: '👨‍🏫' },
    { name: 'Emily Davis', role: 'Lead Developer', emoji: '👩‍💻' },
    { name: 'James Wilson', role: 'Content Director', emoji: '👨‍🎨' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To inspire every child to explore their potential through engaging, interactive career education.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'A world where every student has the opportunity to discover their passions and build a successful future.'
    },
    {
      icon: '💡',
      title: 'Our Values',
      description: 'Innovation, inclusivity, and excellence in educational technology for all students.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wl-teal via-wl-purple to-wl-yellow overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="text-6xl mb-6">🌟</div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About WonderLeap
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Empowering the next generation through innovative careers education
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              WonderLeap was founded in 2023 with a simple yet powerful mission: to make careers education engaging, accessible, and inspiring for every primary school student in the UK.
            </p>
            
            <p>
              We recognized that traditional careers education often feels disconnected from young students' experiences. Children have big dreams but limited exposure to the vast array of career possibilities available to them. That's where WonderLeap comes in.
            </p>
            
            <p>
              Through our innovative platform, we've created 21 interactive missions across 7 career zones, each designed to spark curiosity and build essential skills. Our team of educators, developers, and content creators work tirelessly to ensure every mission is both educational and fun.
            </p>
            
            <p>
              Today, WonderLeap is trusted by over 500 schools across the UK, helping thousands of students discover their potential and prepare for successful futures.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Passionate educators and innovators working to inspire students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-wl-teal to-wl-purple rounded-full mx-auto mb-4 flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-wl-purple to-wl-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Schools</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15,000+</div>
              <div className="text-white/80">Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">21</div>
              <div className="text-white/80">Missions</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9★</div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;