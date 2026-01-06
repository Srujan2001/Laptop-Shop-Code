import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import Header from '../../components/Header';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.adminLogin}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1>🔐 Admin Login</h1>
          {/* demo credentials removed */}
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter admin email"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? 'Logging in...' : 'Login as Admin'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;

