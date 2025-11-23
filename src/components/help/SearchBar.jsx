import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20 transition"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-wl-purple text-white p-3 rounded-lg hover:bg-wl-purple-dark transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="text-gray-600">Popular searches:</span>
          {['Getting Started', 'Class Codes', 'Reports', 'Technical Support'].map((term, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(term)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;