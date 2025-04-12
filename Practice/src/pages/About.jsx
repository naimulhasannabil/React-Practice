import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About HealthBridge</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At HealthBridge, we are dedicated to bridging the gap between patients and healthcare providers. 
                Our mission is to make quality healthcare accessible, convenient, and personalized for everyone.
              </p>
              <p className="text-gray-600">
                We believe that everyone deserves exceptional medical care, and we work tirelessly to connect 
                patients with the right specialists and services for their unique needs.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Medical team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2015 by a team of healthcare professionals and technology experts, 
                HealthBridge began with a simple idea: to create a seamless connection between 
                patients and healthcare providers.
              </p>
              <p className="text-gray-600">
                What started as a small local service has grown into a comprehensive healthcare 
                network serving thousands of patients across the region.
              </p>
            </div>
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Hospital building" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4 text-blue-600">❤️</div>
                <h4 className="font-semibold mb-2">Compassion</h4>
                <p className="text-gray-600">We treat every patient with empathy and understanding.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-blue-600">🏆</div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-gray-600">We maintain the highest standards of medical care.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-blue-600">🤝</div>
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-gray-600">We re honest, transparent, and ethical in all we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;