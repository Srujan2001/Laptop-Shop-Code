import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link to="/admin/dashboard" className={isActive('/admin/dashboard')}>
          📊 Dashboard
        </Link>
        <Link to="/admin/control-panel" className={isActive('/admin/control-panel')}>
          ⚙️ Control Panel
        </Link>
        <Link to="/admin/payment-overview" className={isActive('/admin/payment-overview')}>
          💰 Payment Overview
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

