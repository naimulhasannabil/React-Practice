import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      setUserData(user.data || null);
    }
  }, []);

  const handleLogin = (role, data = null) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUserData(data);
    localStorage.setItem('user', JSON.stringify({ role, data }));
  };

  const handleRegister = (role, data) => {
    // In a real app, you would typically verify the registration first
    // For this demo, we'll automatically log them in after registration
    handleLogin(role, data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserData(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isAuthenticated && <Header userData={userData} onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={
              isAuthenticated ? 
                <Navigate to={userRole === 'admin' ? '/admin' : userRole === 'doctor' ? '/doctor' : '/'} /> 
                : <Login onLogin={handleLogin} />
            } />
            
            <Route path="/register" element={
              isAuthenticated ? 
                <Navigate to={userRole === 'admin' ? '/admin' : userRole === 'doctor' ? '/doctor' : '/'} /> 
                : <Register onRegister={handleRegister} />
            } />
            
            {/* Protected routes */}
            <Route path="/" element={
              isAuthenticated ? <Home userRole={userRole} /> : <Navigate to="/login" />
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
              isAuthenticated && userRole === 'patient' ? 
                <PatientDashboard userData={userData} /> : <Navigate to="/login" />
            } />
            <Route path="/doctor" element={
              isAuthenticated && userRole === 'doctor' ? 
                <DoctorDashboard userData={userData} /> : <Navigate to="/login" />
            } />
            <Route path="/admin" element={
              isAuthenticated && userRole === 'admin' ? 
                <AdminDashboard userData={userData} /> : <Navigate to="/login" />
            } />
            
            {/* Redirect any unknown paths */}
            <Route path="*" element={
              isAuthenticated ? 
                <Navigate to={userRole === 'admin' ? '/admin' : userRole === 'doctor' ? '/doctor' : '/'} /> 
                : <Navigate to="/login" />
            } />
          </Routes>
        </main>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;