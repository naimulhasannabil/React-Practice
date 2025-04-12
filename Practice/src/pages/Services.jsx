import React from 'react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    title: "General Consultation",
    description: "Our primary care physicians provide comprehensive health assessments, diagnose and treat common illnesses, and develop personalized treatment plans. Regular check-ups help monitor your health and prevent potential issues.",
    icon: "🏥",
    features: [
      "Annual physical exams",
      "Illness diagnosis and treatment",
      "Chronic disease management",
      "Health screenings",
      "Vaccinations"
    ]
  },
  {
    title: "Emergency Care",
    description: "Our 24/7 emergency department is staffed with experienced physicians ready to handle critical conditions. We prioritize urgent cases while maintaining high standards of care for all patients.",
    icon: "🚑",
    features: [
      "24/7 availability",
      "Trauma care",
      "Cardiac emergencies",
      "Stroke treatment",
      "Pediatric emergencies"
    ]
  },
  {
    title: "Diagnostic Services",
    description: "We offer state-of-the-art diagnostic testing to accurately identify health conditions. Our advanced laboratory and imaging services provide quick results to guide treatment decisions.",
    icon: "🔬",
    features: [
      "Blood tests",
      "MRI and CT scans",
      "X-rays",
      "Ultrasound",
      "EKG and stress tests"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Healthcare Services</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-4xl mr-6">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-blue-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-semibold mb-2 text-blue-800">Service Includes:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary inline-block">Book This Service</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Can't Find What You Need?</h3>
          <p className="text-center max-w-2xl mx-auto mb-6 text-blue-100">
            We offer many more specialized services. Contact us to discuss your specific healthcare needs 
            and we'll connect you with the right specialist or service.
          </p>
          <div className="text-center">
            <Link to="/contact" className="btn-secondary inline-block bg-white text-blue-800 hover:bg-blue-100">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;