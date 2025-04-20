// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
    }
  }, []);

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('user', JSON.stringify({ role }));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={
              isAuthenticated ? 
                <Navigate to={userRole === 'admin' ? '/admin' : userRole === 'doctor' ? '/doctor' : '/'} /> 
                : <Login onLogin={handleLogin} />
            } />
            
            {/* Protected routes */}
            <Route path="/" element={
              isAuthenticated ? <Home /> : <Navigate to="/login" />
            } />
            <Route path="/about" element={
              isAuthenticated ? <About /> : <Navigate to="/login" />
            } />
            <Route path="/services" element={
              isAuthenticated ? <Services /> : <Navigate to="/login" />
            } />
            <Route path="/doctors" element={
              isAuthenticated ? <Doctors /> : <Navigate to="/login" />
            } />
            <Route path="/contact" element={
              isAuthenticated ? <Contact /> : <Navigate to="/login" />
            } />
            <Route path="/patient" element={
              isAuthenticated && userRole === 'patient' ? <PatientDashboard /> : <Navigate to="/login" />
            } />
            <Route path="/doctor" element={
              isAuthenticated && userRole === 'doctor' ? <DoctorDashboard /> : <Navigate to="/login" />
            } />
            <Route path="/admin" element={
              isAuthenticated && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />
            } />
            
            {/* Redirect any unknown paths to login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;