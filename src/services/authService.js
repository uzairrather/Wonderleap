// import api from './api';

// export const authService = {
//   // Sign In
//   signIn: async (email, password) => {
//     const response = await api.post('/auth/signin', { email, password });
//     return response.data;
//   },

//   // Sign Up
//   signUp: async (userData) => {
//     const response = await api.post('/auth/signup', userData);
//     return response.data;
//   },

//   // Forgot Password
//   forgotPassword: async (email) => {
//     const response = await api.post('/auth/forgot-password', { email });
//     return response.data;
//   },

//   // Reset Password
//   resetPassword: async (token, newPassword) => {
//     const response = await api.post('/auth/reset-password', { token, newPassword });
//     return response.data;
//   },

//   // Verify Email
//   verifyEmail: async (token) => {
//     const response = await api.post('/auth/verify-email', { token });
//     return response.data;
//   },

//   // Get Current User
//   getCurrentUser: async () => {
//     const response = await api.get('/auth/me');
//     return response.data;
//   }
// };

// Mock user database (in-memory for testing)
let mockUsers = [
  {
    id: 1,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@wonderleap.com',
    password: 'Admin1234',
    role: 'admin'
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Smith',
    email: 'teacher@school.com',
    password: 'Teacher123',
    role: 'teacher',
    schoolName: 'Demo School'
  }
];

// Mock delay to simulate network request
const MOCK_DELAY = 1000;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  // Sign Up (Register new user)
  signUp: async (userData) => {
    await delay(MOCK_DELAY);

    const { email, role } = userData;

    // Check if user already exists (for teacher/parent)
    if (role !== 'student') {
      const existingUser = mockUsers.find(u => u.email === email);
      if (existingUser) {
        throw new Error('Email already registered');
      }
    }

    let newUser;

    // Handle different role signups
    if (role === 'teacher') {
      newUser = {
        id: Date.now(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        schoolName: userData.schoolName,
        role: 'teacher',
        createdAt: new Date().toISOString()
      };
    } else if (role === 'student') {
      // Student signup with avatar + PIN
      newUser = {
        id: Date.now(),
        classCode: userData.classCode,
        avatar: userData.avatar,
        avatarEmoji: userData.avatarEmoji,
        pin: userData.pin, // In real app, this would be hashed
        role: 'student',
        firstName: userData.avatar.charAt(0).toUpperCase() + userData.avatar.slice(1), // Use avatar name as display name
        createdAt: new Date().toISOString()
      };
    } else if (role === 'parent') {
      newUser = {
        id: Date.now(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        childCode: userData.childCode || null,
        role: 'parent',
        createdAt: new Date().toISOString()
      };
    }

    // Add to mock database
    mockUsers.push(newUser);

    // Remove password from response
    const { password, pin, ...userWithoutPassword } = newUser;

    // Generate mock JWT token
    const token = 'mock-jwt-token-' + newUser.id + '-' + Date.now();

    return {
      user: userWithoutPassword,
      token
    };
  },

  // Sign In (Login)
  signIn: async (credentials) => {
    await delay(MOCK_DELAY);

    const { role } = credentials;
    let user;

    if (role === 'student') {
      // Student login: classCode + avatar + PIN
      const { classCode, avatar, pin } = credentials;

      // Find student by class code, avatar, and PIN
      user = mockUsers.find(
        u => u.role === 'student' &&
             u.classCode === classCode &&
             u.avatar === avatar &&
             u.pin === pin
      );

      if (!user) {
        throw new Error('Invalid class code, avatar, or PIN');
      }
    } else {
      // Teacher/Parent login: email + password
      const { email, password } = credentials;

      user = mockUsers.find(
        u => u.email === email &&
             u.password === password &&
             u.role === role
      );

      if (!user) {
        throw new Error('Invalid email or password');
      }
    }

    // Remove password/PIN from response
    const { password, pin, ...userWithoutPassword } = user;

    // Generate mock JWT token
    const token = 'mock-jwt-token-' + user.id + '-' + Date.now();

    return {
      user: userWithoutPassword,
      token
    };
  },

  // Forgot Password
  forgotPassword: async (email) => {
    await delay(MOCK_DELAY);

    const user = mockUsers.find(u => u.email === email);

    if (!user) {
      throw new Error('Email not found');
    }

    // Simulate sending password reset email
    console.log(`Password reset email sent to: ${email}`);

    return {
      message: 'Password reset email sent! Check your inbox.'
    };
  },

  // Get Current User (from localStorage)
  getCurrentUser: () => {
    const userStr = localStorage.getItem('wonderleap_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Get Token (from localStorage)
  getToken: () => {
    return localStorage.getItem('wonderleap_token');
  },

  // Logout
  logout: () => {
    localStorage.removeItem('wonderleap_user');
    localStorage.removeItem('wonderleap_token');
  },

  // Validate class code (for student signup/login)
  validateClassCode: async (classCode) => {
    await delay(500);

    // Mock validation - accept any 6-character code
    if (classCode.length === 6) {
      return {
        valid: true,
        className: 'Demo Class 4B',
        teacherName: 'Mrs. Smith'
      };
    }

    return {
      valid: false,
      message: 'Invalid class code'
    };
  },

  // Get available avatars for a class
  getClassAvatars: async (classCode) => {
    await delay(500);

    // Get all students in this class
    const studentsInClass = mockUsers.filter(
      u => u.role === 'student' && u.classCode === classCode
    );

    // Return avatars that are already taken
    const takenAvatars = studentsInClass.map(s => s.avatar);

    // Mock: return some avatars as examples
    const allAvatars = [
      { id: 'dog', emoji: '🐶', name: 'Dog' },
      { id: 'cat', emoji: '🐱', name: 'Cat' },
      { id: 'lion', emoji: '🦁', name: 'Lion' },
      { id: 'elephant', emoji: '🐘', name: 'Elephant' },
      { id: 'panda', emoji: '🐼', name: 'Panda' },
      { id: 'tiger', emoji: '🐯', name: 'Tiger' },
      { id: 'bear', emoji: '🐻', name: 'Bear' },
      { id: 'monkey', emoji: '🐵', name: 'Monkey' }
    ];

    return allAvatars.map(avatar => ({
      ...avatar,
      available: !takenAvatars.includes(avatar.id)
    }));
  },

  // Check if avatar is available in class
  checkAvatarAvailability: async (classCode, avatarId) => {
    await delay(300);

    const isUsed = mockUsers.some(
      u => u.role === 'student' &&
           u.classCode === classCode &&
           u.avatar === avatarId
    );

    return !isUsed;
  }
};

export default authService;

// ```

// ---

// ## 🎯 **Now Test the Complete Flow:**

// ### **1. Sign Up**
// ```
// Go to: http://localhost:5173/signup

// Fill in:
// - Role: Student
// - First Name: Emma
// - Last Name: Johnson
// - Email: emma@test.com
// - Password: Test1234
// - Confirm: Test1234
// - Class Code: ABC123
// - ✅ Agree to Terms

// Click: Create Account
// ```

// **✅ Should redirect to Student Dashboard!**

// ---

// ### **2. Test Student Dashboard**

// You should see:
// - ✅ Welcome message with your name
// - ✅ Stats (missions, zones, badges)
// - ✅ Next missions to play
// - ✅ Recent completed missions
// - ✅ Badge collection

// ---

// ### **3. Sign Out & Sign In Again**

// 1. Click your avatar in header
// 2. Click "Sign Out"
// 3. Go to Sign In
// 4. Enter: `emma@test.com` / `Test1234`
// 5. Click "Sign In"

// **✅ Should log you back in!**

// ---

// ### **4. Test Different Roles**

// **Sign up as Teacher:**
// ```
// Role: Teacher
// Name: Sarah Smith
// Email: sarah@test.com
// Password: Test1234
// School: Greenfield Primary
// ```
// **✅ Redirects to Teacher Dashboard**

// **Sign up as Parent:**
// ```
// Role: Parent
// Name: John Parent
// Email: john@test.com
// Password: Test1234
// ```
// **✅ Redirects to Parent Dashboard**

// **Sign up as Admin:**
// ```
// (Use signup but manually change role in localStorage)