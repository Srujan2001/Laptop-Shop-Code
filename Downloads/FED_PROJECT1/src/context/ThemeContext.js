import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = storage.getTheme();
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    storage.setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const value = {
    theme,
    toggleTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

