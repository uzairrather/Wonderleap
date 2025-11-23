import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { authService } from '../../services/authService';
import Button from '../common/Button';
import { isValidEmail, isValidPassword, isValidName, getPasswordStrength } from '../../utils/validation';

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [step, setStep] = useState(1); // 1: Role Selection, 2: Details
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    schoolName: '',
    classCode: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    { 
      value: 'teacher', 
      label: 'Teacher', 
      icon: '👩‍🏫', 
      description: 'Manage classes and track student progress',
      color: 'from-wl-teal to-wl-teal-dark'
    },
    { 
      value: 'student', 
      label: 'Student', 
      icon: '🎓', 
      description: 'Play missions and explore career zones',
      color: 'from-wl-purple to-wl-purple-dark'
    },
    { 
      value: 'parent', 
      label: 'Parent', 
      icon: '👨‍👩‍👧', 
      description: 'Monitor your child\'s learning journey',
      color: 'from-wl-yellow to-wl-yellow-dark'
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const selectRole = (role) => {
    setFormData(prev => ({ ...prev, role }));
    setStep(2);
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName || !isValidName(formData.firstName)) {
      newErrors.firstName = 'Please enter a valid first name';
    }
    
    if (!formData.lastName || !isValidName(formData.lastName)) {
      newErrors.lastName = 'Please enter a valid last name';
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password || !isValidPassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, and numbers';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (formData.role === 'teacher' && !formData.schoolName) {
      newErrors.schoolName = 'School name is required';
    }
    
    if (formData.role === 'student' && !formData.classCode) {
      newErrors.classCode = 'Class code is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    try {
      const response = await authService.signUp(formData);
      login(response.user, response.token);
      
      // Redirect based on role
      const roleRedirects = {
        teacher: '/dashboard/teacher',
        student: '/dashboard/student',
        parent: '/dashboard/parent'
      };
      
      navigate(roleRedirects[formData.role] || '/');
    } catch (error) {
      setErrors({ submit: error.response?.data?.message || 'Sign up failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = formData.password ? getPasswordStrength(formData.password) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-wl-teal via-wl-purple to-wl-purple-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
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

        {/* Sign Up Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Step 1: Role Selection */}
          {step === 1 && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  Join WonderLeap
                </h2>
                <p className="text-gray-600">
                  Choose your role to get started
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    onClick={() => selectRole(role.value)}
                    className="group relative bg-white border-4 border-gray-200 rounded-2xl p-8 hover:border-wl-purple transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    
                    <div className="relative text-center">
                      <div className="text-6xl mb-4">{role.icon}</div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                        {role.label}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {role.description}
                      </p>
                      <div className="text-wl-purple font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                        Select
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-wl-purple hover:text-wl-purple-dark font-bold">
                    Sign In
                  </Link>
                </p>
              </div>
            </>
          )}

          {/* Step 2: Registration Form */}
          {step === 2 && (
            <>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:text-gray-900 font-semibold flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <div className="text-center flex-1">
                  <h2 className="text-2xl font-display font-bold text-gray-900">
                    {roles.find(r => r.value === formData.role)?.label} Sign Up
                  </h2>
                </div>
                <div className="w-20"></div>
              </div>

              {errors.submit && (
                <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm font-semibold">{errors.submit}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition ${
                        errors.firstName 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                          : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition ${
                        errors.lastName 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                          : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                      }`}
                      placeholder="Smith"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                    }`}
                    placeholder="you@school.co.uk"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Conditional Fields */}
                {formData.role === 'teacher' && (
                  <div>
                    <label htmlFor="schoolName" className="block text-sm font-semibold text-gray-700 mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition ${
                        errors.schoolName 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                          : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                      }`}
                      placeholder="Greenfield Primary School"
                    />
                    {errors.schoolName && (
                      <p className="mt-1 text-sm text-red-600">{errors.schoolName}</p>
                    )}
                  </div>
                )}

                {formData.role === 'student' && (
                  <div>
                    <label htmlFor="classCode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Class Code
                    </label>
                    <input
                      type="text"
                      id="classCode"
                      name="classCode"
                      value={formData.classCode}
                      onChange={handleChange}
                      maxLength="6"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition uppercase tracking-widest text-center text-2xl font-bold ${
                        errors.classCode 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                          : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                      }`}
                      placeholder="ABC123"
                    />
                    {errors.classCode && (
                      <p className="mt-1 text-sm text-red-600">{errors.classCode}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      💡 Ask your teacher for your class code
                    </p>
                  </div>
                )}

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition ${
                        errors.password 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                          : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                      }`}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  {passwordStrength && (
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-${passwordStrength.color}-500 transition-all duration-300`}
                            style={{ width: passwordStrength.level === 'weak' ? '33%' : passwordStrength.level === 'medium' ? '66%' : '100%' }}
                          ></div>
                        </div>
                        <span className={`text-sm font-semibold text-${passwordStrength.color}-600 capitalize`}>
                          {passwordStrength.level}
                        </span>
                      </div>
                    </div>
                  )}
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition ${
                      errors.confirmPassword 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-300 focus:border-wl-purple focus:ring-wl-purple/20'
                    }`}
                    placeholder="Re-enter your password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-wl-purple border-gray-300 rounded focus:ring-wl-purple"
                    />
                    <span className="ml-3 text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-wl-purple hover:underline font-semibold">
                        Terms of Use
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="text-wl-purple hover:underline font-semibold">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  loading={loading}
                >
                  Create Account
                </Button>
              </form>
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

export default SignUp;