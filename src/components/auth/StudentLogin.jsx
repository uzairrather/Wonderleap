import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const StudentLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [step, setStep] = useState(1); // 1: Class Code, 2: Avatar Selection, 3: PIN
  const [classCode, setClassCode] = useState('');
  const [availableAvatars, setAvailableAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [pin, setPin] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const pinRefs = [useRef(), useRef(), useRef(), useRef()];

  // Step 1: Submit Class Code
  const handleClassCodeSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (classCode.length !== 6) {
      setError('Class code must be 6 characters');
      return;
    }

    setLoading(true);

    try {
      // TODO: Fetch avatars for this class from backend
      // For now, mock some avatars
      const mockAvatars = [
        { id: 'dog', emoji: '🐶', name: 'Dog' },
        { id: 'cat', emoji: '🐱', name: 'Cat' },
        { id: 'lion', emoji: '🦁', name: 'Lion' },
        { id: 'elephant', emoji: '🐘', name: 'Elephant' },
        { id: 'panda', emoji: '🐼', name: 'Panda' },
        { id: 'tiger', emoji: '🐯', name: 'Tiger' },
        { id: 'bear', emoji: '🐻', name: 'Bear' },
        { id: 'fox', emoji: '🦊', name: 'Fox' }
      ];

      setAvailableAvatars(mockAvatars);
      setStep(2);
    } catch (err) {
      setError('Class code not found. Please check with your teacher.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Select Avatar
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setStep(3);
    setTimeout(() => pinRefs[0].current?.focus(), 100);
  };

  // Step 3: Handle PIN Input
  const handlePinChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only numbers

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus next input
    if (value && index < 3) {
      pinRefs[index + 1].current.focus();
    }

    // Auto-submit when all 4 digits entered
    if (newPin.every(digit => digit !== '') && index === 3) {
      handleLogin(newPin.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      pinRefs[index - 1].current.focus();
    }
  };

  // Submit Login
  const handleLogin = async (pinValue) => {
    setLoading(true);
    setError('');

    try {
      await login({
        classCode: classCode,
        avatar: selectedAvatar.id,
        pin: pinValue,
        role: 'student'
      });

      navigate('/dashboard/student');
    } catch (err) {
      setError('Incorrect PIN. Please try again.');
      setPin(['', '', '', '']);
      pinRefs[0].current?.focus();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-purple-500 p-1">
        <div className="bg-white h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-500 to-purple-500 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-8">
        {/* Step 1: Class Code */}
        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎓</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Student Login
              </h2>
              <p className="text-gray-600">
                Enter your class code to continue
              </p>
            </div>

            <form onSubmit={handleClassCodeSubmit} className="space-y-6">
              <div>
                <label className="block text-center text-lg font-semibold text-gray-700 mb-4">
                  Class Code
                </label>
                <input
                  type="text"
                  value={classCode}
                  onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                  className="w-full px-6 py-4 text-3xl text-center font-bold border-4 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200 uppercase tracking-widest"
                  placeholder="ABC123"
                  maxLength="6"
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-red-600 text-center font-semibold">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={classCode.length !== 6 || loading}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-xl font-bold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Checking...' : 'Continue 🚀'}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Avatar Selection */}
        {step === 2 && (
          <div>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎭</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Who Are You?
              </h2>
              <p className="text-gray-600">
                Select your avatar
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {availableAvatars.map((avatar) => (
                <div
                  key={avatar.id}
                  onClick={() => handleAvatarSelect(avatar)}
                  className="cursor-pointer bg-white rounded-xl p-4 text-center hover:bg-teal-50 hover:scale-110 transition-all shadow-md hover:shadow-xl border-2 border-transparent hover:border-teal-500"
                >
                  <div className="text-5xl mb-2">{avatar.emoji}</div>
                  <p className="font-semibold text-sm text-gray-800">{avatar.name}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all"
            >
              ← Back to Class Code
            </button>
          </div>
        )}

        {/* Step 3: PIN Entry */}
        {step === 3 && (
          <div className="text-center">
            <div className="text-8xl mb-4 animate-bounce">{selectedAvatar.emoji}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, {selectedAvatar.name}! 👋
            </h2>
            <p className="text-gray-600 mb-8">
              Enter your 4-digit PIN
            </p>

            <div className="flex justify-center space-x-3 mb-6">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={pinRefs[index]}
                  type="password"
                  inputMode="numeric"
                  maxLength="1"
                  value={pin[index]}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-16 h-16 text-3xl text-center border-4 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200"
                  disabled={loading}
                />
              ))}
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-600 font-semibold">{error}</p>
              </div>
            )}

            {loading && (
              <div className="mb-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-teal-500 mx-auto"></div>
                <p className="text-gray-600 mt-2">Logging in...</p>
              </div>
            )}

            <button
              onClick={() => {
                setStep(2);
                setPin(['', '', '', '']);
                setError('');
              }}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all"
            >
              ← Choose Different Avatar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentLogin;