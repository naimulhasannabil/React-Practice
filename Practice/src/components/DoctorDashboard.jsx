import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard = ({ userData }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Doctor Dashboard</h2>
        <Link to="/home" className="text-blue-600 hover:text-blue-800">
          Go to Home
        </Link>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Welcome, Dr. {userData?.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium">Today's Appointments</h4>
            <p className="text-gray-600">5 appointments scheduled</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium">Patient Messages</h4>
            <p className="text-gray-600">3 unread messages</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-medium">Medical Records</h4>
            <p className="text-gray-600">Access patient files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;