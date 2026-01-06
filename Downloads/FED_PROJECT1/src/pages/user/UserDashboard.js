import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useItems } from '../../context/ItemContext';
import Header from '../../components/Header';
import styles from './UserDashboard.module.css';

const UserDashboard = () => {
  const { currentUser } = useAuth();
  const { items, categories } = useItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let filtered = items.filter(item => item.approved);

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [items, selectedCategory, searchTerm]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#f39c12';
      case 'Picked Up':
        return '#3498db';
      case 'Completed':
        return '#27ae60';
      default:
        return '#95a5a6';
    }
  };

  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <h1>Welcome, {currentUser?.name}!</h1>
            <p className={styles.points}>Total Points: <strong>{currentUser?.points || 0}</strong></p>
            {currentUser?.phone && (
              <p className={styles.phone}>Phone: <strong>{currentUser.phone}</strong></p>
            )}
          </div>
          <Link to="/user/post-item" className={styles.postBtn}>
            + Post New Item
          </Link>
        </div>

        <div className={styles.filters}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.categoryFilter}>
            <label>Category: </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.select}
            >
              <option value="All">All</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>My Items</h3>
            <p className={styles.statNumber}>
              {items.filter(i => i.userId === currentUser?.id).length}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Approved</h3>
            <p className={styles.statNumber}>
              {items.filter(i => i.userId === currentUser?.id && i.approved).length}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Completed</h3>
            <p className={styles.statNumber}>
              {items.filter(i => i.userId === currentUser?.id && i.status === 'Completed').length}
            </p>
          </div>
        </div>

        <div className={styles.itemsSection}>
          <h2>Browse Recyclable Items</h2>
          {filteredItems.length === 0 ? (
            <div className={styles.empty}>
              <p>No items found. Try adjusting your filters or post a new item!</p>
            </div>
          ) : (
            <div className={styles.itemsGrid}>
              {filteredItems.map(item => (
                <div key={item.id} className={styles.itemCard}>
                  {item.image && (
                    <div className={styles.imageContainer}>
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <h3>{item.title}</h3>
                      <span
                        className={styles.category}
                        style={{ backgroundColor: getCategoryColor(item.category) }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.itemDetails}>
                      <div className={styles.detail}>
                        <strong>Quantity:</strong> {item.quantity}
                      </div>
                      <div className={styles.detail}>
                        <strong>Location:</strong> {item.location}
                      </div>
                      <div className={styles.detail}>
                        <strong>Status:</strong>{' '}
                        <span style={{ color: getStatusColor(item.status) }}>
                          {item.status}
                        </span>
                      </div>
                      <div className={styles.detail}>
                        <strong>Points:</strong> {item.points || 0}
                      </div>
                    </div>
                    <div className={styles.itemFooter}>
                      <small>Posted by {item.userName}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const getCategoryColor = (category) => {
  const colors = {
    'Paper': '#3498db',
    'Plastic': '#e74c3c',
    'Metal': '#f39c12',
    'E-waste': '#9b59b6'
  };
  return colors[category] || '#95a5a6';
};

export default UserDashboard;

