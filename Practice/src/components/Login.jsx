import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'patient'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (loginError) setLoginError('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setLoginError('');
    
    try {
      // Simulate API call - replace with actual authentication logic
      const response = await simulateLoginApiCall(formData);
      
      if (response.success) {
        onLogin(formData.userType, {
          email: formData.email,
          name: response.userName || formData.email.split('@')[0]
        });
        
        // Redirect based on user type
        const redirectPath = formData.userType === 'admin' ? '/admin' : 
                           formData.userType === 'doctor' ? '/doctor' : '/';
        navigate(redirectPath);
      } else {
        setLoginError(response.message || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again later.');
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock API function - replace with actual API call
  const simulateLoginApiCall = async (data) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // This is just for demo - in a real app, verify credentials with your backend
        if (data.password.length >= 6) {
          resolve({
            success: true,
            userName: data.email.split('@')[0]
          });
        } else {
          resolve({
            success: false,
            message: 'Invalid email or password'
          });
        }
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">HealthBridge</h1>
          <p className="text-gray-600 mt-2">Connecting Patients and Doctors Digitally</p>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Login to Your Account</h2>
        
        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {loginError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="userType">I am a</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
              autoComplete="username"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
            
            <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 text-sm">
              Forgot password?
            </Link>
          </div>
          
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-800 font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;