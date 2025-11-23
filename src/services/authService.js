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

// Mock authentication - will be replaced with real API calls later
const MOCK_DELAY = 1000; // Simulate network delay

// Mock database
const mockUsers = [];

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  // Sign In
  signIn: async (email, password) => {
    await delay(MOCK_DELAY);
    
    // Find user
    const user = mockUsers.find(u => u.email === email);
    
    if (!user) {
      throw {
        response: {
          data: { message: 'User not found. Please sign up first.' }
        }
      };
    }
    
    if (user.password !== password) {
      throw {
        response: {
          data: { message: 'Incorrect password.' }
        }
      };
    }
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + Date.now()
    };
  },

  // Sign Up
  signUp: async (userData) => {
    await delay(MOCK_DELAY);
    
    // Check if user already exists
    if (mockUsers.find(u => u.email === userData.email)) {
      throw {
        response: {
          data: { message: 'Email already registered.' }
        }
      };
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password, // In real app, this would be hashed
      role: userData.role,
      schoolName: userData.schoolName || null,
      classCode: userData.classCode || null,
      createdAt: new Date().toISOString()
    };
    
    // Add to mock database
    mockUsers.push(newUser);
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;
    
    return {
      user: userWithoutPassword,
      token: 'mock-jwt-token-' + Date.now()
    };
  },

  // Forgot Password
  forgotPassword: async (email) => {
    await delay(MOCK_DELAY);
    
    const user = mockUsers.find(u => u.email === email);
    
    if (!user) {
      throw {
        response: {
          data: { message: 'No account found with this email.' }
        }
      };
    }
    
    return {
      message: 'Password reset email sent successfully!'
    };
  },

  // Reset Password
  resetPassword: async (token, newPassword) => {
    await delay(MOCK_DELAY);
    
    return {
      message: 'Password reset successful!'
    };
  },

  // Verify Email
  verifyEmail: async (token) => {
    await delay(MOCK_DELAY);
    
    return {
      message: 'Email verified successfully!'
    };
  },

  // Get Current User
  getCurrentUser: async () => {
    await delay(MOCK_DELAY);
    
    const userData = localStorage.getItem('wonderleap_user');
    if (!userData) {
      throw {
        response: {
          status: 401,
          data: { message: 'Not authenticated' }
        }
      };
    }
    
    return JSON.parse(userData);
  }
};
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