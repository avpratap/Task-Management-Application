import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../../frontend/src/components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import { useAuth } from '../../frontend/src/context/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Routes>
    </>
  );
};

export default App;
