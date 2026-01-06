import React, { useState, useEffect } from 'react';
import { useItems } from '../../context/ItemContext';
import { useAdmin } from '../../context/AdminContext';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
// Charts removed
import styles from './AdminDashboard.module.css';

// Chart registration removed

const AdminDashboard = () => {
  const { items } = useItems();
  const { getAllUsers } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let filtered = items;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedStatus !== 'All') {
      filtered = filtered.filter(item => item.status === selectedStatus);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.userName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [items, selectedCategory, selectedStatus, searchTerm]);

  const users = getAllUsers();

  // Chart data removed

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#f39c12';
      case 'Picked Up':
      case 'In Progress':
        return '#3498db';
      case 'Completed':
        return '#27ae60';
      default:
        return '#95a5a6';
    }
  };

  return (
    <div className={styles.adminDashboard}>
      <Header isAdmin={true} />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Admin Dashboard</h1>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>Total Items</h3>
              <p className={styles.statNumber}>{items.length}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Total Users</h3>
              <p className={styles.statNumber}>{users.length}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Pending Approval</h3>
              <p className={styles.statNumber}>{items.filter(i => !i.approved).length}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Completed</h3>
              <p className={styles.statNumber}>{items.filter(i => i.status === 'Completed').length}</p>
            </div>
          </div>

          {/* Charts removed */}

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
            <div className={styles.filterGroup}>
              <label>Category: </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.select}
              >
                <option value="All">All</option>
                <option value="Paper">Paper</option>
                <option value="Plastic">Plastic</option>
                <option value="Metal">Metal</option>
                <option value="E-waste">E-waste</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label>Status: </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className={styles.select}
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Picked Up">Picked Up</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className={styles.itemsSection}>
            <h2>All Posted Items ({filteredItems.length})</h2>
            {filteredItems.length === 0 ? (
              <div className={styles.empty}>No items found</div>
            ) : (
              <div className={styles.itemsTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>User</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Approved</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map(item => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.userName}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <span
                            className={styles.statusBadge}
                            style={{ backgroundColor: getStatusColor(item.status) }}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>{item.approved ? '✅' : '❌'}</td>
                        <td>{item.points || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

