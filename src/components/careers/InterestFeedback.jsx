import React, { useState } from 'react';

const InterestFeedback = ({ career, onFeedback }) => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const feedbackOptions = [
    {
      type: 'love',
      emoji: '😍',
      label: 'Love It!',
      color: 'pink'
    },
    {
      type: 'like',
      emoji: '👍',
      label: 'Sounds Good',
      color: 'blue'
    },
    {
      type: 'learn-more',
      emoji: '🤔',
      label: 'Want to Learn More',
      color: 'purple'
    },
    {
      type: 'not-interested',
      emoji: '😐',
      label: 'Not for Me',
      color: 'gray'
    }
  ];

  const handleFeedback = (feedbackType) => {
    setSelectedFeedback(feedbackType);
    setShowThankYou(true);

    // Call parent callback
    if (onFeedback) {
      onFeedback(career.career_id, feedbackType);
    }

    // Hide thank you message after 2 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          What do you think about being a {career.name}?
        </h3>
        <p className="text-gray-600 text-sm">
          Your feedback helps us understand your interests!
        </p>
      </div>

      {!showThankYou ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feedbackOptions.map((option) => (
            <button
              key={option.type}
              onClick={() => handleFeedback(option.type)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300
                ${
                  selectedFeedback === option.type
                    ? `border-${option.color}-500 bg-${option.color}-50 scale-105`
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className="text-4xl mb-2">{option.emoji}</div>
              <div className="text-sm font-semibold text-gray-700">
                {option.label}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 animate-bounce">
          <div className="text-6xl mb-4">🎉</div>
          <h4 className="text-2xl font-bold text-teal-600">
            Thanks for sharing!
          </h4>
          <p className="text-gray-600 mt-2">
            Your feedback has been saved
          </p>
        </div>
      )}

      {/* Additional Actions */}
      {!showThankYou && (
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
            📚 Read More About This Career
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300">
            🎮 Try Related Missions
          </button>
        </div>
      )}
    </div>
  );
};

export default InterestFeedback;