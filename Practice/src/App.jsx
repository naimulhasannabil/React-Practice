import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    userRole: null,
    userData: null
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setAuth({
        isAuthenticated: true,
        userRole: user.role,
        userData: user.data
      });
    }
  }, []);

  const handleLogin = (role, data) => {
    const user = { role, data };
    setAuth({
      isAuthenticated: true,
      userRole: role,
      userData: data
    });
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      userRole: null,
      userData: null
    });
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {auth.isAuthenticated && <Header userData={auth.userData} onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              auth.isAuthenticated ? (
                <Navigate to={
                  auth.userRole === 'patient' ? '/patient' :
                  auth.userRole === 'doctor' ? '/doctor' :
                  '/admin'
                } />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="/login" element={
              auth.isAuthenticated ? (
                <Navigate to={
                  auth.userRole === 'patient' ? '/patient' :
                  auth.userRole === 'doctor' ? '/doctor' :
                  '/admin'
                } />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } />
            
            <Route path="/home" element={<Home />} />
            
            <Route path="/patient" element={
              auth.isAuthenticated && auth.userRole === 'patient' ? (
                <PatientDashboard userData={auth.userData} />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="/doctor" element={
              auth.isAuthenticated && auth.userRole === 'doctor' ? (
                <DoctorDashboard userData={auth.userData} />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="/admin" element={
              auth.isAuthenticated && auth.userRole === 'admin' ? (
                <AdminDashboard userData={auth.userData} />
              ) : (
                <Navigate to="/login" />
              )
            } />
            
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
        {auth.isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;