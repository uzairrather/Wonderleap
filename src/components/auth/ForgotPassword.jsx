import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/authService';
import Button from '../common/Button';
import { isValidEmail } from '../../utils/validation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    try {
      await authService.forgotPassword(email);
      setSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wl-teal via-wl-purple to-wl-purple-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl">
                W
              </div>
            </div>
            <h1 className="text-3xl font-display font-bold text-white">WonderLeap</h1>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {!success ? (
            <>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔐</div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  Forgot Password?
                </h2>
                <p className="text-gray-600">
                  No worries! We'll send you reset instructions
                </p>
              </div>

              {error && (
                <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm font-semibold">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-wl-purple focus:ring-4 focus:ring-wl-purple/20 transition"
                    placeholder="you@school.co.uk"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  loading={loading}
                >
                  Send Reset Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link to="/signin" className="text-wl-purple hover:text-wl-purple-dark font-semibold flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Sign In
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Check Your Email
                </h2>
                <p className="text-gray-600 mb-8">
                  We've sent password reset instructions to <strong>{email}</strong>
                </p>
                
                <div className="bg-wl-teal/10 border-2 border-wl-teal rounded-lg p-6 mb-8">
                  <p className="text-sm text-gray-700">
                    <strong>Didn't receive the email?</strong><br/>
                    Check your spam folder or{' '}
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-wl-purple hover:underline font-semibold"
                    >
                      try again
                    </button>
                  </p>
                </div>

                <Link to="/signin">
                  <Button variant="primary" size="lg" className="w-full">
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-white hover:text-gray-200 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;