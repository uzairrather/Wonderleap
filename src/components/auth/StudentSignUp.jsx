import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AvatarSelector from './AvatarSelector';
import PINEntry from './PINEntry';

const StudentSignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [step, setStep] = useState(1); // 1: Class Code, 2: Avatar, 3: PIN
  const [classCode, setClassCode] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Step 1: Validate Class Code
  const handleClassCodeSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (classCode.length !== 6) {
      setError('Class code must be 6 characters');
      return;
    }

    setLoading(true);

    try {
      // TODO: Validate class code with backend
      // const isValid = await validateClassCode(classCode);
      // For now, accept any 6-character code
      setStep(2);
    } catch (err) {
      setError('Invalid class code. Please check with your teacher.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Avatar Selected
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setStep(3);
  };

  // Step 3: PIN Created
  const handlePINSubmit = async (pin) => {
    setLoading(true);
    setError('');

    try {
      await signup({
        classCode: classCode,
        avatar: selectedAvatar.id,
        avatarEmoji: selectedAvatar.emoji,
        pin: pin,
        role: 'student'
      });

      navigate('/dashboard/student');
    } catch (err) {
      setError(err.message);
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
        {/* Step 1: Class Code Entry */}
        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎓</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Join Your Class
              </h2>
              <p className="text-gray-600">
                Enter the class code your teacher gave you
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
                />
                <p className="text-sm text-gray-500 text-center mt-2">
                  Ask your teacher for the code
                </p>
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
          <AvatarSelector
            classId={classCode}
            onSelect={handleAvatarSelect}
          />
        )}

        {/* Step 3: PIN Entry */}
        {step === 3 && (
          <PINEntry
            avatar={selectedAvatar}
            onSubmit={handlePINSubmit}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default StudentSignUp;