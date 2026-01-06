import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';
import { initializeData } from '../data/dummyData';

const ItemContext = createContext();

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within ItemProvider');
  }
  return context;
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Initialize dummy data
    initializeData();
    
    // Load items and categories
    setItems(storage.getItems());
    setCategories(storage.getCategories());
  }, []);

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: `item-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Pending',
      approved: false,
      points: item.points || 0
    };
    
    storage.addItem(newItem);
    setItems(storage.getItems());
    return newItem;
  };

  const updateItem = (itemId, updates) => {
    const updated = storage.updateItem(itemId, updates);
    if (updated) {
      setItems(storage.getItems());
    }
    return updated;
  };

  const deleteItem = (itemId) => {
    storage.deleteItem(itemId);
    setItems(storage.getItems());
  };

  const approveItem = (itemId) => {
    return updateItem(itemId, { approved: true });
  };

  const rejectItem = (itemId) => {
    return updateItem(itemId, { approved: false });
  };

  const updateStatus = (itemId, status) => {
    return updateItem(itemId, { status });
  };

  const addCategory = (category) => {
    const updated = [...categories, category];
    storage.saveCategories(updated);
    setCategories(updated);
  };

  const deleteCategory = (category) => {
    const updated = categories.filter(c => c !== category);
    storage.saveCategories(updated);
    setCategories(updated);
  };

  const getUserItems = (userId) => {
    return items.filter(item => item.userId === userId);
  };

  const value = {
    items,
    categories,
    addItem,
    updateItem,
    deleteItem,
    approveItem,
    rejectItem,
    updateStatus,
    addCategory,
    deleteCategory,
    getUserItems
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

