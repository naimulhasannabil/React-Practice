import React from 'react';
import Contact from '../components/Contact';
import AppointmentForm from '../components/AppointmentForm';

const ContactPage = () => {
  return (
    <div>
      <Contact />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;