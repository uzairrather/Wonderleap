import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';

// Import new components
import TeacherSignUp from './TeacherSignUp';
import StudentSignUp from './StudentSignUp';
import ParentSignUp from './ParentSignUp';

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  // Role Selection Screen
  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Join WonderLeap
            </h1>
            <p className="text-xl text-gray-600">
              Choose your role to get started
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
              <p className="text-center text-gray-700">
                Create classes and track student progress
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Manage classes</li>
                <li>✓ Assign missions</li>
                <li>✓ View reports</li>
              </ul>
            </div>

            {/* Student Card */}
            <div
              onClick={() => setSelectedRole('student')}
              className="cursor-pointer bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-teal-500"
            >
              <div className="text-6xl text-center mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-center mb-2">Student</h3>
              <p className="text-center text-gray-700">
                Play missions and earn badges
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ Join with class code</li>
                <li>✓ Choose avatar</li>
                <li>✓ Simple PIN login</li>
              </ul>
            </div>

            {/* Parent Card */}
            <div
              onClick={() => setSelectedRole('parent')}
              className="cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-6xl text-center mb-4">👨‍👩‍👧</div>
              <h3 className="text-2xl font-bold text-center mb-2">Parent</h3>
              <p className="text-center text-gray-700">
                Monitor your child's progress
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✓ View child's skills</li>
                <li>✓ See achievements</li>
                <li>✓ Download reports</li>
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/signin')}
              className="text-gray-600 hover:text-gray-800"
            >
              Already have an account? <span className="font-semibold">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show role-specific signup form
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Back Button */}
        <button
          onClick={() => setSelectedRole(null)}
          className="mb-4 text-gray-600 hover:text-gray-800 flex items-center"
        >
          <span className="mr-2">←</span> Back to role selection
        </button>

        {/* Role-Specific Form */}
        {selectedRole === 'teacher' && <TeacherSignUp />}
        {selectedRole === 'student' && <StudentSignUp />}
        {selectedRole === 'parent' && <ParentSignUp />}
      </div>
    </div>
  );
};

export default SignUp;