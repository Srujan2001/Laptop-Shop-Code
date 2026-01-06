import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAdmin } from '../context/AdminContext';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

const Header = ({ isAdmin = false }) => {
  const auth = useAuth();
  const admin = useAdmin();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isAdmin) {
      admin.logout();
    } else {
      auth.logout();
    }
    navigate(isAdmin ? '/admin/login' : '/');
  };

  const currentUser = auth.currentUser;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={isAdmin ? '/admin/dashboard' : '/'} className={styles.logo}>
          ♻️ Recycling Marketplace
        </Link>
        <nav className={styles.nav}>
          {isAdmin ? (
            <>
              <Link to="/admin/dashboard">Dashboard</Link>
              <Link to="/admin/control-panel">Control Panel</Link>
              <Link to="/admin/payment-overview">Payment Overview</Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              {currentUser ? (
                <>
                  <Link to="/user/dashboard">Dashboard</Link>
                  <Link to="/user/post-item">Post Item</Link>
                  <Link to="/user/track-status">Track Status</Link>
                </>
              ) : (
                <>
                  <Link to="/user/login">Login</Link>
                  <Link to="/user/register">Register</Link>
                </>
              )}
              {/* Admin login visible only when not in admin mode AND no user is logged in */}
              {!isAdmin && !currentUser && (
                <Link to="/admin/login" className={styles.adminLoginBtn}>
                  Admin Login
                </Link>
              )}
            </>
          )}
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {currentUser && !isAdmin && (
            <div className={styles.userInfo}>
              <span>{currentUser.name}</span>
              <span className={styles.points}>{currentUser.points || 0} pts</span>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          )}
          {isAdmin && (
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

