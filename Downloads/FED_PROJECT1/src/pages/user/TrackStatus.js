import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useItems } from '../../context/ItemContext';
import Header from '../../components/Header';
import styles from './TrackStatus.module.css';

const TrackStatus = () => {
  const { currentUser } = useAuth();
  const { getUserItems, updateItem, deleteItem } = useItems();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const userItems = getUserItems(currentUser?.id || '');

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditForm({
      title: item.title,
      description: item.description,
      quantity: item.quantity,
      location: item.location
    });
  };

  const handleSave = (itemId) => {
    updateItem(itemId, editForm);
    setEditingId(null);
    setEditForm({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleDelete = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(itemId);
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending':
        return '⏳';
      case 'Picked Up':
      case 'In Progress':
        return '🚚';
      case 'Completed':
        return '✅';
      default:
        return '📦';
    }
  };

  return (
    <div className={styles.trackStatus}>
      <Header />
      <main className={styles.main}>
        <h1>Track Pickup Status</h1>
        <p className={styles.subtitle}>Manage your posted recyclable items</p>

        {userItems.length === 0 ? (
          <div className={styles.empty}>
            <p>You haven't posted any items yet.</p>
            <a href="/user/post-item" className={styles.link}>Post your first item</a>
          </div>
        ) : (
          <div className={styles.itemsList}>
            {userItems.map(item => (
              <div key={item.id} className={styles.itemCard}>
                <div className={styles.itemHeader}>
                  <div className={styles.statusBadge} style={{ backgroundColor: getStatusColor(item.status) }}>
                    {getStatusIcon(item.status)} {item.status}
                  </div>
                  {!item.approved && (
                    <span className={styles.pendingBadge}>⏸️ Pending Approval</span>
                  )}
                </div>

                {item.image && (
                  <div className={styles.imageContainer}>
                    <img src={item.image} alt={item.title} />
                  </div>
                )}

                <div className={styles.itemContent}>
                  {editingId === item.id ? (
                    <div className={styles.editForm}>
                      <input
                        type="text"
                        value={editForm.title}
                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        className={styles.editInput}
                      />
                      <textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        className={styles.editTextarea}
                        rows="3"
                      />
                      <div className={styles.editRow}>
                        <input
                          type="text"
                          value={editForm.quantity}
                          onChange={(e) => setEditForm({ ...editForm, quantity: e.target.value })}
                          className={styles.editInput}
                          placeholder="Quantity"
                        />
                        <input
                          type="text"
                          value={editForm.location}
                          onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                          className={styles.editInput}
                          placeholder="Location"
                        />
                      </div>
                      <div className={styles.editActions}>
                        <button onClick={() => handleSave(item.id)} className={styles.saveBtn}>
                          Save
                        </button>
                        <button onClick={handleCancel} className={styles.cancelBtn}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3>{item.title}</h3>
                      <p className={styles.description}>{item.description}</p>
                      <div className={styles.details}>
                        <div className={styles.detail}>
                          <strong>Category:</strong> {item.category}
                        </div>
                        <div className={styles.detail}>
                          <strong>Quantity:</strong> {item.quantity}
                        </div>
                        <div className={styles.detail}>
                          <strong>Location:</strong> {item.location}
                        </div>
                        <div className={styles.detail}>
                          <strong>Points:</strong> {item.points || 0}
                        </div>
                        <div className={styles.detail}>
                          <strong>Posted:</strong> {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className={styles.actions}>
                        <button onClick={() => handleEdit(item)} className={styles.editBtn}>
                          ✏️ Edit
                        </button>
                        <button onClick={() => handleDelete(item.id)} className={styles.deleteBtn}>
                          🗑️ Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default TrackStatus;

