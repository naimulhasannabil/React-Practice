import React from 'react';

const testimonials = [
  {
    quote: "HealthBridge connected me with an excellent cardiologist when I needed it most. The service was fast and professional.",
    author: "Robert Johnson",
    role: "Patient"
  },
  {
    quote: "As a busy professional, I appreciate the telemedicine option. The doctors are knowledgeable and caring.",
    author: "Sarah Williams",
    role: "Patient"
  },
  {
    quote: "The preventive care program helped me identify health issues early. I'm grateful for their comprehensive approach.",
    author: "Michael Brown",
    role: "Patient"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Patient Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-blue-800">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;