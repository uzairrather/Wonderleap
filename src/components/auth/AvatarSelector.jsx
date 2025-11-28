import React, { useState, useEffect } from 'react';
import { avatars } from '../../utils/avatarsData';

const AvatarSelector = ({ classId, onSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [unavailableAvatars, setUnavailableAvatars] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // TODO: Fetch unavailable avatars for this class from backend
    // For now, randomly mark some as unavailable
    const mockUnavailable = ['dog', 'cat', 'lion'];
    setUnavailableAvatars(mockUnavailable);
  }, [classId]);

  const handleAvatarClick = (avatar) => {
    if (unavailableAvatars.includes(avatar.id)) {
      alert(`${avatar.emoji} ${avatar.name} is already taken! Pick another one.`);
      return;
    }

    setSelectedAvatar(avatar);
  };

  const handleConfirm = () => {
    if (selectedAvatar) {
      onSelect(selectedAvatar);
    }
  };

  const categories = ['all', 'farm', 'pets', 'wild', 'sea', 'birds', 'insects'];
  const filteredAvatars = filter === 'all'
    ? avatars
    : avatars.filter(a => a.category === filter);

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">🎭</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Choose Your Avatar!
        </h2>
        <p className="text-gray-600">
          Pick an animal to be your character in WonderLeap
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-teal-500 to-purple-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? '🌟 All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Avatar Grid */}
      <div className="grid grid-cols-5 gap-3 max-h-96 overflow-y-auto p-2 mb-6">
        {filteredAvatars.map((avatar) => {
          const isUnavailable = unavailableAvatars.includes(avatar.id);
          const isSelected = selectedAvatar?.id === avatar.id;

          return (
            <div
              key={avatar.id}
              onClick={() => handleAvatarClick(avatar)}
              className={`
                cursor-pointer rounded-xl p-4 text-center transition-all
                ${isSelected
                  ? 'bg-gradient-to-br from-teal-400 to-purple-500 scale-110 shadow-2xl ring-4 ring-teal-300'
                  : isUnavailable
                  ? 'bg-gray-100 opacity-40 cursor-not-allowed'
                  : 'bg-white hover:bg-teal-50 hover:scale-105 shadow-md hover:shadow-xl'
                }
              `}
            >
              <div className="text-5xl mb-2">{avatar.emoji}</div>
              <p className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                {avatar.name}
              </p>
              {isUnavailable && (
                <p className="text-xs text-red-500 mt-1">Taken</p>
              )}
              {isSelected && (
                <p className="text-xs text-white mt-1">✓ Selected</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Avatar Preview */}
      {selectedAvatar && (
        <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-6xl">{selectedAvatar.emoji}</div>
            <div>
              <p className="text-lg font-bold text-gray-800">
                You selected: {selectedAvatar.name}
              </p>
              <p className="text-sm text-gray-600">
                Click "Continue" to create your PIN
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={handleConfirm}
        disabled={!selectedAvatar}
        className="w-full py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-xl font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue to PIN 🚀
      </button>
    </div>
  );
};

export default AvatarSelector;