import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session
    const user = storage.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  const register = (userData) => {
    const { email, password, name, phone, location } = userData;
    
    // Check if user already exists
    const existingUser = storage.getUserByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      email,
      password, // In real app, this would be hashed
      name,
      phone: phone || '',
      location: location || '',
      createdAt: new Date().toISOString(),
      points: 0
    };

    storage.addUser(newUser);
    storage.setCurrentUser(newUser);
    setCurrentUser(newUser);
    return newUser;
  };

  const login = (email, password) => {
    const user = storage.getUserByEmail(email);
    
    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    storage.setCurrentUser(user);
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    storage.setCurrentUser(null);
    setCurrentUser(null);
  };

  const updateUserPoints = (userId, points) => {
    const users = storage.getUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      users[userIndex].points = (users[userIndex].points || 0) + points;
      storage.saveUsers(users);
      
      // Update current user if it's the logged-in user
      if (currentUser && currentUser.id === userId) {
        const updatedUser = { ...currentUser, points: users[userIndex].points };
        storage.setCurrentUser(updatedUser);
        setCurrentUser(updatedUser);
      }
    }
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
    updateUserPoints,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

