import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">HealthBridge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <button 
              onClick={handleLogout}
              className="btn-secondary ml-4"
            >
              Logout
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/doctors" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Doctors</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <button 
                onClick={handleLogout}
                className="btn-secondary w-full text-center"
              >
                Logout
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;