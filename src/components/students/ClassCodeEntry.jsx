import React, { useState } from 'react';

const ClassCodeEntry = () => {
  const [classCode, setClassCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle class code submission
    console.log('Class code submitted:', classCode);
  };

  return (
    <section id="class-code" className="py-20 bg-gradient-to-br from-wl-teal-light to-wl-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🎓</div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Join Your Class!
          </h2>
          
          <p className="text-xl text-white/90 mb-10">
            Ask your teacher for the class code and enter it below to get started
          </p>

          {/* Class Code Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-6">
              <label htmlFor="classCode" className="block text-left text-lg font-semibold text-gray-700 mb-3">
                Enter Your Class Code
              </label>
              <input
                type="text"
                id="classCode"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                placeholder="ABC123"
                maxLength="6"
                className="w-full px-6 py-4 text-2xl font-bold text-center text-gray-900 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20 transition uppercase tracking-widest"
              />
              <p className="text-sm text-gray-500 mt-2 text-left">
                💡 Tip: The code is usually 6 letters or numbers
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-wl-purple to-wl-teal text-white font-bold py-4 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              🚀 Join Class & Start Playing!
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <p className="text-white font-semibold mb-2">
              Don't have a class code yet?
            </p>
            <p className="text-white/80">
              Ask your teacher to create a class in WonderLeap and give you the code!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassCodeEntry;