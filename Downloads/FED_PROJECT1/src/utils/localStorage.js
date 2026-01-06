// localStorage utility functions

export const storage = {
  // Users
  getUsers: () => {
    const users = localStorage.getItem('recycling_users');
    return users ? JSON.parse(users) : [];
  },
  saveUsers: (users) => {
    localStorage.setItem('recycling_users', JSON.stringify(users));
  },
  addUser: (user) => {
    const users = storage.getUsers();
    users.push(user);
    storage.saveUsers(users);
  },
  getUserByEmail: (email) => {
    const users = storage.getUsers();
    return users.find(u => u.email === email);
  },

  // Items
  getItems: () => {
    const items = localStorage.getItem('recycling_items');
    return items ? JSON.parse(items) : [];
  },
  saveItems: (items) => {
    localStorage.setItem('recycling_items', JSON.stringify(items));
  },
  addItem: (item) => {
    const items = storage.getItems();
    items.push(item);
    storage.saveItems(items);
  },
  updateItem: (itemId, updates) => {
    const items = storage.getItems();
    const index = items.findIndex(i => i.id === itemId);
    if (index !== -1) {
      items[index] = { ...items[index], ...updates };
      storage.saveItems(items);
      return items[index];
    }
    return null;
  },
  deleteItem: (itemId) => {
    const items = storage.getItems();
    const filtered = items.filter(i => i.id !== itemId);
    storage.saveItems(filtered);
  },

  // Categories
  getCategories: () => {
    const categories = localStorage.getItem('recycling_categories');
    if (categories) {
      return JSON.parse(categories);
    }
    // Initialize with default categories
    const defaultCategories = ['Paper', 'Plastic', 'Metal', 'E-waste'];
    storage.saveCategories(defaultCategories);
    return defaultCategories;
  },
  saveCategories: (categories) => {
    localStorage.setItem('recycling_categories', JSON.stringify(categories));
  },

  // Rewards
  getRewards: () => {
    const rewards = localStorage.getItem('recycling_rewards');
    return rewards ? JSON.parse(rewards) : [];
  },
  saveRewards: (rewards) => {
    localStorage.setItem('recycling_rewards', JSON.stringify(rewards));
  },
  addReward: (reward) => {
    const rewards = storage.getRewards();
    rewards.push(reward);
    storage.saveRewards(rewards);
  },
  updateReward: (rewardId, updates) => {
    const rewards = storage.getRewards();
    const index = rewards.findIndex(r => r.id === rewardId);
    if (index !== -1) {
      rewards[index] = { ...rewards[index], ...updates };
      storage.saveRewards(rewards);
      return rewards[index];
    }
    return null;
  },
  getUserRewards: (userId) => {
    const rewards = storage.getRewards();
    return rewards.filter(r => r.userId === userId);
  },
  getUserTotalPoints: (userId) => {
    const rewards = storage.getRewards();
    return rewards
      .filter(r => r.userId === userId && r.status === 'Completed')
      .reduce((sum, r) => sum + (r.points || 0), 0);
  },

  // Auth
  getCurrentUser: () => {
    const user = localStorage.getItem('recycling_current_user');
    return user ? JSON.parse(user) : null;
  },
  setCurrentUser: (user) => {
    if (user) {
      localStorage.setItem('recycling_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('recycling_current_user');
    }
  },
  getAdminSession: () => {
    return localStorage.getItem('recycling_admin_session') === 'true';
  },
  setAdminSession: (isAdmin) => {
    if (isAdmin) {
      localStorage.setItem('recycling_admin_session', 'true');
    } else {
      localStorage.removeItem('recycling_admin_session');
    }
  },

  // Theme
  getTheme: () => {
    return localStorage.getItem('recycling_theme') || 'light';
  },
  setTheme: (theme) => {
    localStorage.setItem('recycling_theme', theme);
  }
};

