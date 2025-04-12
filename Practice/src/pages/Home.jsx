import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import AppointmentForm from '../components/AppointmentForm';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Doctors />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;