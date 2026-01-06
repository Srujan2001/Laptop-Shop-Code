import React, { useState } from 'react';
import { useItems } from '../../context/ItemContext';
import { useAdmin } from '../../context/AdminContext';
import { useAuth } from '../../context/AuthContext';
import { storage } from '../../utils/localStorage';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './ControlPanel.module.css';

const ControlPanel = () => {
  const { items, approveItem, rejectItem, updateStatus, addCategory, deleteCategory, categories, deleteItem } = useItems();
  const { getAllUsers } = useAdmin();
  const { updateUserPoints } = useAuth();
  const [newCategory, setNewCategory] = useState('');

  const [, setRefresh] = useState(0);
  const users = getAllUsers();

  const handleDeleteUser = (userId) => {
    if (!window.confirm('Are you sure you want to permanently delete this user and all their items?')) return;

    // Delete user's items via ItemContext helper (updates items state)
    const userItems = items.filter(i => i.userId === userId);
    userItems.forEach(it => deleteItem(it.id));

    // Remove user from storage
    const allUsers = storage.getUsers();
    const remaining = allUsers.filter(u => u.id !== userId);
    storage.saveUsers(remaining);

    // Remove any rewards for this user
    const rewards = storage.getRewards().filter(r => r.userId !== userId);
    storage.saveRewards(rewards);

    // Trigger re-render
    setRefresh(r => r + 1);
  };

  const handleApprove = (itemId) => {
    approveItem(itemId);
  };

  const handleReject = (itemId) => {
    rejectItem(itemId);
  };

  const handleStatusChange = (itemId, newStatus) => {
    updateStatus(itemId, newStatus);
    
    // Award points when status changes to Completed
    const item = items.find(i => i.id === itemId);
    if (newStatus === 'Completed' && item && item.approved) {
      // Check if reward already exists
      const rewards = storage.getRewards();
      const existingReward = rewards.find(r => r.itemId === itemId);
      
      if (!existingReward) {
        const reward = {
          id: `reward-${Date.now()}`,
          userId: item.userId,
          itemId: itemId,
          points: item.points || 0,
          status: 'Completed',
          paymentStatus: 'PENDING',
          createdAt: new Date().toISOString()
        };
        storage.addReward(reward);
        updateUserPoints(item.userId, item.points || 0);
      }
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      addCategory(newCategory.trim());
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (category) => {
    if (window.confirm(`Are you sure you want to delete the category "${category}"?`)) {
      deleteCategory(category);
    }
  };

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
    <div className={styles.controlPanel}>
      <Header isAdmin={true} />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Control Panel</h1>

          <div className={styles.section}>
            <h2>Approve/Reject Items</h2>
            <div className={styles.itemsList}>
              {items.filter(item => !item.approved).length === 0 ? (
                <div className={styles.empty}>No pending items</div>
              ) : (
                items
                  .filter(item => !item.approved)
                  .map(item => (
                    <div key={item.id} className={styles.itemCard}>
                      <div className={styles.itemHeader}>
                        <h3>{item.title}</h3>
                        <span className={styles.category}>{item.category}</span>
                      </div>
                      <p className={styles.description}>{item.description}</p>
                      <div className={styles.details}>
                        <div><strong>User:</strong> {item.userName}</div>
                        <div><strong>Quantity:</strong> {item.quantity}</div>
                        <div><strong>Location:</strong> {item.location}</div>
                        <div><strong>Points:</strong> {item.points || 0}</div>
                      </div>
                      <div className={styles.actions}>
                        <button
                          onClick={() => handleApprove(item.id)}
                          className={styles.approveBtn}
                        >
                          ✅ Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className={styles.rejectBtn}
                        >
                          ❌ Reject
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>

          <div className={styles.section}>
            <h2>Update Pickup Status</h2>
            <div className={styles.itemsList}>
              {items.filter(item => item.approved).length === 0 ? (
                <div className={styles.empty}>No approved items</div>
              ) : (
                items
                  .filter(item => item.approved)
                  .map(item => (
                    <div key={item.id} className={styles.itemCard}>
                      <div className={styles.itemHeader}>
                        <h3>{item.title}</h3>
                        <span
                          className={styles.statusBadge}
                          style={{ backgroundColor: getStatusColor(item.status) }}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className={styles.description}>{item.description}</p>
                      <div className={styles.details}>
                        <div><strong>User:</strong> {item.userName}</div>
                        <div><strong>Category:</strong> {item.category}</div>
                        <div><strong>Quantity:</strong> {item.quantity}</div>
                      </div>
                      <div className={styles.statusActions}>
                        <button
                          onClick={() => handleStatusChange(item.id, 'Pending')}
                          className={item.status === 'Pending' ? styles.activeBtn : styles.statusBtn}
                        >
                          Pending
                        </button>
                        <button
                          onClick={() => handleStatusChange(item.id, 'In Progress')}
                          className={item.status === 'In Progress' ? styles.activeBtn : styles.statusBtn}
                        >
                          In Progress
                        </button>
                        <button
                          onClick={() => handleStatusChange(item.id, 'Completed')}
                          className={item.status === 'Completed' ? styles.activeBtn : styles.statusBtn}
                        >
                          Completed
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>

          <div className={styles.section}>
            <h2>Manage Categories</h2>
            <div className={styles.categorySection}>
              <div className={styles.addCategory}>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter new category name"
                  className={styles.categoryInput}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
                />
                <button onClick={handleAddCategory} className={styles.addBtn}>
                  Add Category
                </button>
              </div>
              <div className={styles.categoriesList}>
                {categories.map(category => (
                  <div key={category} className={styles.categoryItem}>
                    <span>{category}</span>
                    {categories.length > 1 && (
                      <button
                        onClick={() => handleDeleteCategory(category)}
                        className={styles.deleteCategoryBtn}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>All Users</h2>
            <div className={styles.usersTable}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Total Points</th>
                    <th>Items Posted</th>
                    <th>Joined</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => {
                    const userItemsCount = items.filter(i => i.userId === user.id).length;
                    const userPoints = storage.getUserTotalPoints(user.id);
                    return (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone || '—'}</td>
                        <td>{user.location || '—'}</td>
                        <td>{userPoints}</td>
                        <td>{userItemsCount}</td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className={styles.deleteUserBtn}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ControlPanel;

