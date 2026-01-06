import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ItemProvider } from './context/ItemContext';
import { AdminProvider } from './context/AdminContext';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import UserLogin from './pages/user/UserLogin';
import UserRegister from './pages/user/UserRegister';
import UserDashboard from './pages/user/UserDashboard';
import PostItem from './pages/user/PostItem';
import TrackStatus from './pages/user/TrackStatus';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ControlPanel from './pages/admin/ControlPanel';
import PaymentOverview from './pages/admin/PaymentOverview';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ItemProvider>
          <AdminProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/register" element={<UserRegister />} />
                <Route
                  path="/user/dashboard"
                  element={
                    <ProtectedRoute>
                      <UserDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/user/post-item"
                  element={
                    <ProtectedRoute>
                      <PostItem />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/user/track-status"
                  element={
                    <ProtectedRoute>
                      <TrackStatus />
                    </ProtectedRoute>
                  }
                />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminProtectedRoute>
                      <AdminDashboard />
                    </AdminProtectedRoute>
                  }
                />
                <Route
                  path="/admin/control-panel"
                  element={
                    <AdminProtectedRoute>
                      <ControlPanel />
                    </AdminProtectedRoute>
                  }
                />
                <Route
                  path="/admin/payment-overview"
                  element={
                    <AdminProtectedRoute>
                      <PaymentOverview />
                    </AdminProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </AdminProvider>
        </ItemProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

