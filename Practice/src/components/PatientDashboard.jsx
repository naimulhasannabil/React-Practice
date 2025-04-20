import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = ({ userData }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Patient Dashboard</h2>
        <Link to="/home" className="text-blue-600 hover:text-blue-800">
          Go to Home
        </Link>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Welcome, {userData?.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium">Upcoming Appointments</h4>
            <p className="text-gray-600">No upcoming appointments</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium">Medical Records</h4>
            <p className="text-gray-600">View your health history</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium">Prescriptions</h4>
            <p className="text-gray-600">Current medications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;