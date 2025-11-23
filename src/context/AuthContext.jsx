import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('wonderleap_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('wonderleap_user', JSON.stringify(userData));
    localStorage.setItem('wonderleap_token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('wonderleap_user');
    localStorage.removeItem('wonderleap_token');
    setUser(null);
  };

  const updateUser = (userData) => {
    localStorage.setItem('wonderleap_user', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};