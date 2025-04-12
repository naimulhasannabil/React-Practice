import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Health Is Our <span className="text-blue-600">Top Priority</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Connecting patients with the best healthcare providers for comprehensive and personalized medical care.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-primary">Book Appointment</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Doctor with patient" 
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;