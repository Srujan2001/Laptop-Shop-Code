// Dummy data for initial items
export const initialItems = [
  {
    id: '1',
    userId: 'demo-user-1',
    userName: 'John Doe',
    userEmail: 'john@example.com',
    category: 'Paper',
    title: 'Old Newspapers',
    description: 'Collection of newspapers from last month',
    quantity: '50 kg',
    location: 'New York, NY',
    image: null,
    status: 'Pending',
    approved: false,
    createdAt: new Date('2024-01-15').toISOString(),
    points: 50
  },
  {
    id: '2',
    userId: 'demo-user-2',
    userName: 'Jane Smith',
    userEmail: 'jane@example.com',
    category: 'Plastic',
    title: 'Plastic Bottles',
    description: 'Clean plastic bottles ready for recycling',
    quantity: '30 kg',
    location: 'Los Angeles, CA',
    image: null,
    status: 'Picked Up',
    approved: true,
    createdAt: new Date('2024-01-10').toISOString(),
    points: 30
  },
  {
    id: '3',
    userId: 'demo-user-3',
    userName: 'Bob Johnson',
    userEmail: 'bob@example.com',
    category: 'Metal',
    title: 'Aluminum Cans',
    description: 'Various aluminum cans',
    quantity: '20 kg',
    location: 'Chicago, IL',
    image: null,
    status: 'Completed',
    approved: true,
    createdAt: new Date('2024-01-05').toISOString(),
    points: 20
  },
  {
    id: '4',
    userId: 'demo-user-4',
    userName: 'Alice Brown',
    userEmail: 'alice@example.com',
    category: 'E-waste',
    title: 'Old Laptops',
    description: 'Two old laptops that need recycling',
    quantity: '2 units',
    location: 'Houston, TX',
    image: null,
    status: 'Pending',
    approved: false,
    createdAt: new Date('2024-01-20').toISOString(),
    points: 100
  }
];

// Initialize localStorage with dummy data if empty
export const initializeData = () => {
  const storage = require('../utils/localStorage').storage;
  
  // Initialize categories
  storage.getCategories();
  
  // Initialize items if empty
  const existingItems = storage.getItems();
  if (existingItems.length === 0) {
    storage.saveItems(initialItems);
  }
};

