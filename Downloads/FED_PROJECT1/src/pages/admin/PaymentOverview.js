import React, { useState, useEffect, useCallback } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useItems } from '../../context/ItemContext';
import { storage } from '../../utils/localStorage';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './PaymentOverview.module.css';

const PaymentOverview = () => {
  const { getAllRewards, markRewardAsSent } = useAdmin();
  const { items } = useItems();
  const [rewards, setRewards] = useState([]);
  const [filter, setFilter] = useState('All');

  const loadRewards = useCallback(() => {
    const allRewards = getAllRewards();
    // Enrich rewards with item and user info
    const enrichedRewards = allRewards.map(reward => {
      const item = items.find(i => i.id === reward.itemId);
      const users = storage.getUsers();
      const user = users.find(u => u.id === reward.userId);
      return {
        ...reward,
        itemTitle: item?.title || 'N/A',
        userName: user?.name || 'N/A',
        userEmail: user?.email || 'N/A',
        category: item?.category || 'N/A'
      };
    });
    setRewards(enrichedRewards);
  }, [getAllRewards, items]);

  useEffect(() => {
    loadRewards();
  }, [loadRewards]);

  const handleMarkAsSent = (rewardId) => {
    markRewardAsSent(rewardId);
    loadRewards();
  };

  const filteredRewards = filter === 'All' 
    ? rewards 
    : rewards.filter(r => r.paymentStatus === filter);

  const totalPending = rewards.filter(r => r.paymentStatus === 'PENDING').length;
  const totalPaid = rewards.filter(r => r.paymentStatus === 'PAID').length;
  const totalPoints = rewards.reduce((sum, r) => sum + (r.points || 0), 0);
  const pendingPoints = rewards
    .filter(r => r.paymentStatus === 'PENDING')
    .reduce((sum, r) => sum + (r.points || 0), 0);

  return (
    <div className={styles.paymentOverview}>
      <Header isAdmin={true} />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Payment/Reward Overview</h1>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>Total Rewards</h3>
              <p className={styles.statNumber}>{rewards.length}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Pending Payment</h3>
              <p className={styles.statNumber}>{totalPending}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Paid</h3>
              <p className={styles.statNumber}>{totalPaid}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Total Points</h3>
              <p className={styles.statNumber}>{totalPoints}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Pending Points</h3>
              <p className={styles.statNumber}>{pendingPoints}</p>
            </div>
          </div>

          <div className={styles.filterSection}>
            <label>Filter by Payment Status: </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={styles.select}
            >
              <option value="All">All</option>
              <option value="PENDING">Pending</option>
              <option value="PAID">Paid</option>
            </select>
          </div>

          <div className={styles.tableSection}>
            <h2>Reward Payments</h2>
            {filteredRewards.length === 0 ? (
              <div className={styles.empty}>No rewards found</div>
            ) : (
              <div className={styles.tableContainer}>
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Item</th>
                      <th>Category</th>
                      <th>Points</th>
                      <th>Status</th>
                      <th>Payment Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRewards.map(reward => (
                      <tr key={reward.id}>
                        <td>
                          <div className={styles.userInfo}>
                            <strong>{reward.userName}</strong>
                            <small>{reward.userEmail}</small>
                          </div>
                        </td>
                        <td>{reward.itemTitle}</td>
                        <td>{reward.category}</td>
                        <td className={styles.points}>{reward.points || 0}</td>
                        <td>
                          <span className={styles.statusBadge}>
                            {reward.status}
                          </span>
                        </td>
                        <td>
                          <span
                            className={styles.paymentBadge}
                            style={{
                              backgroundColor: reward.paymentStatus === 'PAID' ? '#27ae60' : '#f39c12'
                            }}
                          >
                            {reward.paymentStatus}
                          </span>
                        </td>
                        <td>{new Date(reward.createdAt).toLocaleDateString()}</td>
                        <td>
                          {reward.paymentStatus === 'PENDING' && (
                            <button
                              onClick={() => handleMarkAsSent(reward.id)}
                              className={styles.markPaidBtn}
                            >
                              Mark as Paid
                            </button>
                          )}
                          {reward.paymentStatus === 'PAID' && (
                            <span className={styles.paidLabel}>✓ Paid</span>
                          )}
                        </td>
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

export default PaymentOverview;

