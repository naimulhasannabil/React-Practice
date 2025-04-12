import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthBridge</h3>
            <p className="text-blue-100">
              Connecting patients with quality healthcare providers for better health outcomes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white">Services</Link></li>
              <li><Link to="/doctors" className="text-blue-100 hover:text-white">Doctors</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-blue-100 hover:text-white">General Consultation</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white">Emergency Care</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white">Diagnostic Services</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white">Specialist Referrals</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white">Telemedicine</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-blue-100 space-y-2">
              <p>123 Medical Drive</p>
              <p>Healthville, HV 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthbridge.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} HealthBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;