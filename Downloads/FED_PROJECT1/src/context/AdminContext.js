import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for admin session
    setIsAdmin(storage.getAdminSession());
  }, []);

  const login = (email, password) => {
    // Allow a set of hardcoded admin credentials (useful for demo/dev)
    const allowedAdmins = [
      { email: 'admin@recycling.com', password: 'admin123' },
      { email: 'srujanravuri2001@gmail.com', password: 'srujan' },
      { email: 'rezvanashaa1@gmail.com', password: 'Rezvanaa@1' }
    ];

    const matched = allowedAdmins.some(a => a.email === email && a.password === password);
    if (matched) {
      storage.setAdminSession(true);
      setIsAdmin(true);
      return true;
    }

    throw new Error('Invalid admin credentials');
  };

  const logout = () => {
    storage.setAdminSession(false);
    setIsAdmin(false);
  };

  const getAllUsers = () => {
    return storage.getUsers();
  };

  const getAllRewards = () => {
    return storage.getRewards();
  };

  const markRewardAsSent = (rewardId) => {
    const rewards = storage.getRewards();
    const index = rewards.findIndex(r => r.id === rewardId);
    if (index !== -1) {
      rewards[index].paymentStatus = 'PAID';
      storage.saveRewards(rewards);
      return rewards[index];
    }
    return null;
  };

  const value = {
    isAdmin,
    login,
    logout,
    getAllUsers,
    getAllRewards,
    markRewardAsSent
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

