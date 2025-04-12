import React from 'react';

const services = [
  {
    title: "General Consultation",
    description: "Comprehensive health assessment and treatment plans by experienced physicians.",
    icon: "🏥"
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services with immediate attention for critical conditions.",
    icon: "🚑"
  },
  {
    title: "Diagnostic Services",
    description: "Advanced laboratory tests and imaging for accurate diagnosis.",
    icon: "🔬"
  },
  {
    title: "Specialist Referrals",
    description: "Access to top specialists in various medical fields.",
    icon: "👨‍⚕️"
  },
  {
    title: "Preventive Care",
    description: "Regular check-ups and screenings to maintain optimal health.",
    icon: "🩺"
  },
  {
    title: "Telemedicine",
    description: "Virtual consultations from the comfort of your home.",
    icon: "💻"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;