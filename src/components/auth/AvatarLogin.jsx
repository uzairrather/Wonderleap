import React, { useState, useEffect } from 'react';

const AvatarLogin = ({ onLogin }) => {
  const [classCode, setClassCode] = useState('');
  const [availableAvatars, setAvailableAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [pin, setPin] = useState(['', '', '', '']);

  const loadAvatars = async (code) => {
    // Fetch avatars used in this class
    const avatars = await getClassAvatars(code);
    setAvailableAvatars(avatars);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Step 1: Class Code */}
      {!availableAvatars.length && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Enter Your Class Code</h2>
          <input
            type="text"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value.toUpperCase())}
            className="w-full p-3 border rounded-lg mb-4"
            placeholder="ABC123"
            maxLength="6"
          />
          <button
            onClick={() => loadAvatars(classCode)}
            className="w-full py-3 bg-teal-500 text-white rounded-lg"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Avatar Selection */}
      {availableAvatars.length > 0 && !selectedAvatar && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Who Are You?</h2>
          <div className="grid grid-cols-4 gap-3">
            {availableAvatars.map((avatar) => (
              <div
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar)}
                className="cursor-pointer p-3 bg-white rounded-lg hover:bg-teal-50 text-center"
              >
                <div className="text-4xl">{avatar.emoji}</div>
                <p className="text-xs mt-1">{avatar.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: PIN Entry */}
      {selectedAvatar && (
        <div>
          <div className="text-6xl text-center mb-4">{selectedAvatar.emoji}</div>
          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome, {selectedAvatar.name}!
          </h2>
          <p className="text-center text-gray-600 mb-6">Enter your PIN</p>

          <div className="flex justify-center space-x-3 mb-6">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="password"
                maxLength="1"
                value={pin[index]}
                onChange={(e) => {
                  const newPin = [...pin];
                  newPin[index] = e.target.value;
                  setPin(newPin);
                }}
                className="w-14 h-14 text-2xl text-center border-2 rounded-lg"
              />
            ))}
          </div>

          <button
            onClick={() => onLogin(selectedAvatar, pin.join(''))}
            disabled={pin.join('').length !== 4}
            className="w-full py-3 bg-teal-500 text-white rounded-lg font-bold"
          >
            Login 🚀
          </button>
        </div>
      )}
    </div>
  );
};