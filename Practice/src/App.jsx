// Update src/App.js with protected routes
import React from 'react';
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

function App() {
  // In a real app, these would come from authentication context
  const user = { role: 'patient' }; // 'patient', 'doctor', or 'admin'
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes */}
            <Route path="/patient" element={
              user.role === 'patient' ? <PatientDashboard /> : <Navigate to="/login" />
            } />
            <Route path="/doctor" element={
              user.role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/login" />
            } />
            <Route path="/admin" element={
              user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;