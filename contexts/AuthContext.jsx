import React, { createContext, useContext, useState, useEffect } from 'react';
import { authUtils, authAPI, driverAPI } from '@/services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const currentUser = authUtils.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      authUtils.saveUser(response.data);
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Driver login function
  const loginDriver = async (credentials) => {
    try {
      const response = await driverAPI.loginDriver(credentials);
      authUtils.saveUser(response.data);
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      const response = await authAPI.signup(userData);
      authUtils.saveUser(response.data);
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Driver signup function
  const signupDriver = async (driverData) => {
    try {
      const response = await driverAPI.registerDriver(driverData);
      authUtils.saveUser(response.data);
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    authUtils.logout();
    setUser(null);
  };

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      const response = await authAPI.updateProfile(profileData);
      const updatedUser = { ...user, ...response.data.user };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Get user profile
  const getProfile = async () => {
    try {
      const response = await authAPI.getProfile();
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    loginDriver,
    signup,
    signupDriver,
    logout,
    updateProfile,
    getProfile,
    isLoggedIn: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 