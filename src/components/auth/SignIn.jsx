import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';

// Import new components
import StudentLogin from './StudentLogin';
import TeacherParentLogin from './TeacherParentLogin';

const SignIn = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  // Role Selection Screen
  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back to WonderLeap!
            </h1>
            <p className="text-xl text-gray-600">
              Who are you logging in as?
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Teacher Card */}
            <div
              onClick={() => setSelectedRole('teacher')}
              className="cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-6xl text-center mb-4">👩‍🏫</div>
              <h3 className="text-2xl font-bold text-center mb-2">Teacher</h3>
              <p className="text-center text-gray-700 text-sm">
                Manage your classes and students
              </p>
            </div>

            {/* Student Card */}
            <div
              onClick={() => setSelectedRole('student')}
              className="cursor-pointer bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-teal-500"
            >
              <div className="text-6xl text-center mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-center mb-2">Student</h3>
              <p className="text-center text-gray-700 text-sm">
                Play missions and earn badges
              </p>
            </div>

            {/* Parent Card */}
            <div
              onClick={() => setSelectedRole('parent')}
              className="cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-6xl text-center mb-4">👨‍👩‍👧</div>
              <h3 className="text-2xl font-bold text-center mb-2">Parent</h3>
              <p className="text-center text-gray-700 text-sm">
                Track your child's progress
              </p>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-teal-600 hover:text-teal-700 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show role-specific login form
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Back Button */}
        <button
          onClick={() => setSelectedRole(null)}
          className="mb-4 text-gray-600 hover:text-gray-800 flex items-center font-semibold"
        >
          <span className="mr-2">←</span> Back to role selection
        </button>

        {/* Role-Specific Login Form */}
        {selectedRole === 'student' && <StudentLogin />}
        {(selectedRole === 'teacher' || selectedRole === 'parent') && (
          <TeacherParentLogin role={selectedRole} />
        )}
      </div>
    </div>
  );
};

export default SignIn;