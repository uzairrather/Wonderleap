import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-wl-purple via-wl-teal to-wl-teal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="text-6xl mb-6">📬</div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Stay Informed
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Get tips, updates, and insights on supporting your child's career exploration
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 text-lg text-gray-900 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20 transition"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-wl-purple to-wl-teal text-white font-bold py-4 px-8 rounded-xl text-lg transition duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Subscribe 📧
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-left">
              ✓ Monthly tips and updates  •  ✓ Career guidance resources  •  ✓ Unsubscribe anytime
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Privacy protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;