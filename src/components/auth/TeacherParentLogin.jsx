import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';

const TeacherParentLogin = ({ role }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const isTeacher = role === 'teacher';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await login({
        email: formData.email,
        password: formData.password,
        role: role
      });

      // Navigate to appropriate dashboard
      navigate(`/dashboard/${role}`);
    } catch (error) {
      setErrors({ submit: error.message || 'Invalid email or password' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{isTeacher ? '👩‍🏫' : '👨‍👩‍👧'}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {isTeacher ? 'Teacher Login' : 'Parent Login'}
        </h2>
        <p className="text-gray-600">
          {isTeacher
            ? 'Sign in to manage your classes'
            : 'Sign in to view your child\'s progress'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
              isTeacher ? 'focus:ring-blue-500' : 'focus:ring-purple-500'
            } ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder={isTeacher ? 'teacher@school.com' : 'parent@email.com'}
            autoFocus
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <Link
              to="/forgot-password"
              className={`text-sm font-semibold ${
                isTeacher
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-purple-600 hover:text-purple-700'
              }`}
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
              isTeacher ? 'focus:ring-blue-500' : 'focus:ring-purple-500'
            } ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center font-semibold">
              {errors.submit}
            </p>
          </div>
        )}

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className={`w-full ${
            isTeacher
              ? 'bg-gradient-to-r from-blue-500 to-blue-600'
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing In...
            </span>
          ) : (
            `Sign In 🚀`
          )}
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className={`font-semibold ${
              isTeacher
                ? 'text-blue-600 hover:text-blue-700'
                : 'text-purple-600 hover:text-purple-700'
            }`}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TeacherParentLogin;
// ```

// ---

// ## 📊 **COMPLETE FILE STRUCTURE - AUTH SYSTEM**
// ```
// src/components/auth/
// ├── SignIn.jsx ✅ UPDATED - Role selection then specific login
// ├── SignUp.jsx ✅ UPDATED - Role selection then specific signup
// ├── TeacherSignUp.jsx 🆕 NEW - Full form (name, email, password, school)
// ├── StudentSignUp.jsx 🆕 NEW - 3 steps (class code → avatar → PIN)
// ├── ParentSignUp.jsx 🆕 NEW - Full form (name, email, password, child code)
// ├── StudentLogin.jsx 🆕 NEW - 3 steps (class code → avatar → PIN)
// ├── TeacherParentLogin.jsx 🆕 NEW - Email + password login
// ├── AvatarSelector.jsx 🆕 NEW - 50 avatars with categories
// ├── PINEntry.jsx 🆕 NEW - 4-digit PIN with auto-focus
// ├── ForgotPassword.jsx ✅ Already exists
// └── RoleSelection.jsx ✅ Already exists (optional)
// ```

// ---

// ## 🎯 **USER FLOWS SUMMARY:**

// ### **TEACHER SIGNUP:**
// ```
// 1. Click "Sign Up" → Select "Teacher"
// 2. Fill form: First Name, Last Name, Email, School, Password
// 3. Submit → Navigate to /dashboard/teacher
// ```

// ### **TEACHER LOGIN:**
// ```
// 1. Click "Sign In" → Select "Teacher"
// 2. Enter: Email + Password
// 3. Submit → Navigate to /dashboard/teacher
// ```

// ---

// ### **STUDENT SIGNUP:**
// ```
// 1. Click "Sign Up" → Select "Student"
// 2. Enter class code: "ABC123"
// 3. Select avatar from 50 options: 🐶 Dog
// 4. Create 4-digit PIN: "1234"
// 5. Confirm PIN: "1234"
// 6. Submit → Navigate to /dashboard/student
// ```

// ### **STUDENT LOGIN:**
// ```
// 1. Click "Sign In" → Select "Student"
// 2. Enter class code: "ABC123"
// 3. Select avatar: 🐶 Dog (only shows avatars from this class)
// 4. Enter 4-digit PIN: "1234"
// 5. Auto-login when 4 digits entered → Navigate to /dashboard/student
// ```

// ---

// ### **PARENT SIGNUP:**
// ```
// 1. Click "Sign Up" → Select "Parent"
// 2. Fill form: First Name, Last Name, Email, Password
// 3. Optional: Child linking code
// 4. Submit → Navigate to /dashboard/parent
// ```

// ### **PARENT LOGIN:**
// ```
// 1. Click "Sign In" → Select "Parent"
// 2. Enter: Email + Password
// 3. Submit → Navigate to /dashboard/parent