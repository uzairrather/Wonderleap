import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = authService.getCurrentUser();
    const savedToken = authService.getToken();

    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }

    setLoading(false);
  }, []);

  // Sign Up
  const signup = async (userData) => {
    try {
      const { user: newUser, token: newToken } = await authService.signUp(userData);

      // Save to state
      setUser(newUser);
      setToken(newToken);

      // Save to localStorage
      localStorage.setItem('wonderleap_user', JSON.stringify(newUser));
      localStorage.setItem('wonderleap_token', newToken);

      return newUser;
    } catch (error) {
      throw error;
    }
  };

  // Sign In
  const login = async (credentials) => {
    try {
      const { user: loggedInUser, token: newToken } = await authService.signIn(credentials);

      // Save to state
      setUser(loggedInUser);
      setToken(newToken);

      // Save to localStorage
      localStorage.setItem('wonderleap_user', JSON.stringify(loggedInUser));
      localStorage.setItem('wonderleap_token', newToken);

      return loggedInUser;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = () => {
    authService.logout();
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    loading,
    signup,      // ✅ Make sure this is here
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};