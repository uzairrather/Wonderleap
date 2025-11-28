import React from 'react';
import { Link } from 'react-router-dom';

const CareerCard = ({ career, showZone = false, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(career);
    }
  };

  const demandColors = {
    'very-high': 'bg-green-100 text-green-800',
    'high': 'bg-blue-100 text-blue-800',
    'medium': 'bg-yellow-100 text-yellow-800',
    'low': 'bg-gray-100 text-gray-800'
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 border-2 border-${career.color}-100`}
    >
      {/* Career Icon Header */}
      <div className={`bg-gradient-to-br from-${career.color}-400 to-${career.color}-600 p-6 text-center`}>
        <div className="text-6xl mb-2">{career.icon}</div>
        <h3 className="text-xl font-bold text-white">{career.name}</h3>
        <p className="text-white/80 text-sm mt-1">{career.sector}</p>
      </div>

      {/* Career Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          {career.short_description}
        </p>

        {/* Future Demand Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${demandColors[career.future_demand]}`}>
            {career.future_demand === 'very-high' && '🔥 Very High Demand'}
            {career.future_demand === 'high' && '⭐ High Demand'}
            {career.future_demand === 'medium' && '📊 Medium Demand'}
            {career.future_demand === 'low' && '📉 Lower Demand'}
          </span>

          {career.skills_shortage && (
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
              💼 Skills Shortage
            </span>
          )}
        </div>

        {/* Typical Tasks Preview */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">What You'd Do:</h4>
          <ul className="space-y-1">
            {career.typical_tasks.slice(0, 2).map((task, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-teal-500 mr-2">✓</span>
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Tools */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Tools You'd Use:</h4>
          <div className="flex flex-wrap gap-2">
            {career.key_tools.slice(0, 3).map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
              >
                🛠️ {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <button
          className={`w-full py-3 bg-gradient-to-r from-${career.color}-500 to-${career.color}-600 text-white font-bold rounded-lg hover:from-${career.color}-600 hover:to-${career.color}-700 transition-all duration-300 flex items-center justify-center space-x-2`}
        >
          <span>Learn More</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default CareerCard;