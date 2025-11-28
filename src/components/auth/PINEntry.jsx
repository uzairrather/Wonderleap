import React, { useState, useRef } from 'react';

const PINEntry = ({ avatar, onSubmit, loading, error }) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
  const [showConfirm, setShowConfirm] = useState(false);
  const pinRefs = [useRef(), useRef(), useRef(), useRef()];
  const confirmRefs = [useRef(), useRef(), useRef(), useRef()];

  const handlePinChange = (index, value, isPinConfirm = false) => {
    if (!/^\d*$/.test(value)) return; // Only numbers

    const currentPin = isPinConfirm ? confirmPin : pin;
    const setCurrentPin = isPinConfirm ? setConfirmPin : setPin;
    const refs = isPinConfirm ? confirmRefs : pinRefs;

    const newPin = [...currentPin];
    newPin[index] = value;
    setCurrentPin(newPin);

    // Auto-focus next input
    if (value && index < 3) {
      refs[index + 1].current.focus();
    }

    // Auto-show confirm when first PIN complete
    if (!isPinConfirm && newPin.join('').length === 4) {
      setShowConfirm(true);
      setTimeout(() => confirmRefs[0].current?.focus(), 100);
    }
  };

  const handleKeyDown = (e, index, isPinConfirm) => {
    const refs = isPinConfirm ? confirmRefs : pinRefs;

    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      refs[index - 1].current.focus();
    }
  };

  const handleSubmit = () => {
    const pinValue = pin.join('');
    const confirmValue = confirmPin.join('');

    if (pinValue.length !== 4) {
      alert('Please enter a 4-digit PIN');
      return;
    }

    if (pinValue !== confirmValue) {
      alert('PINs do not match! Please try again.');
      setConfirmPin(['', '', '', '']);
      confirmRefs[0].current?.focus();
      return;
    }

    onSubmit(pinValue);
  };

  return (
    <div className="text-center">
      <div className="text-8xl mb-4 animate-bounce">{avatar.emoji}</div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        You are {avatar.name}! 🎉
      </h2>
      <p className="text-gray-600 mb-8">
        Create a 4-digit PIN to login
      </p>

      {/* PIN Input */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Create Your PIN:
        </p>
        <div className="flex justify-center space-x-3">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={pinRefs[index]}
              type="password"
              inputMode="numeric"
              maxLength="1"
              value={pin[index]}
              onChange={(e) => handlePinChange(index, e.target.value, false)}
              onKeyDown={(e) => handleKeyDown(e, index, false)}
              className="w-16 h-16 text-3xl text-center border-4 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200"
            />
          ))}
        </div>
      </div>

      {/* Confirm PIN */}
      {showConfirm && (
        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Enter PIN Again to Confirm:
          </p>
          <div className="flex justify-center space-x-3">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                ref={confirmRefs[index]}
                type="password"
                inputMode="numeric"
                maxLength="1"
                value={confirmPin[index]}
                onChange={(e) => handlePinChange(index, e.target.value, true)}
                onKeyDown={(e) => handleKeyDown(e, index, true)}
                className="w-16 h-16 text-3xl text-center border-4 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={
          loading ||
          pin.join('').length !== 4 ||
          confirmPin.join('').length !== 4 ||
          pin.join('') !== confirmPin.join('')
        }
        className="w-full py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-xl font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Creating Account...' : 'Create Account 🚀'}
      </button>

      {/* Remember Your Login */}
      <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
        <p className="text-sm font-semibold text-yellow-800 mb-2">
          📝 Remember This:
        </p>
        <p className="text-lg font-bold text-gray-800">
          You are {avatar.emoji} {avatar.name}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          You'll need to remember your avatar and PIN to login next time!
        </p>
      </div>
    </div>
  );
};

export default PINEntry;