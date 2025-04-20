import React from 'react';

const PatientDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-blue-800">Patient Dashboard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-700">Upcoming Appointments</h4>
          <div className="space-y-3">
            <div className="border-b pb-2">
              <p className="font-medium">Dr. Sarah Johnson</p>
              <p className="text-sm text-gray-600">Cardiology - May 15, 2024 at 10:00 AM</p>
            </div>
            <button className="btn-primary w-full">Book New Appointment</button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-700">Medical Records</h4>
          <div className="space-y-2">
            <button className="btn-secondary w-full">View Prescriptions</button>
            <button className="btn-secondary w-full">View Test Results</button>
            <button className="btn-secondary w-full">Medical History</button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-700">Quick Actions</h4>
          <div className="space-y-2">
            <button className="btn-primary w-full">Telemedicine</button>
            <button className="btn-secondary w-full">Find Doctors</button>
            <button className="btn-secondary w-full">Emergency Contact</button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-4 text-blue-700">Health Monitoring</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">❤️</span>
            </div>
            <p className="text-sm">Heart Rate</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🩸</span>
            </div>
            <p className="text-sm">Blood Pressure</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🥗</span>
            </div>
            <p className="text-sm">Diet Log</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">💊</span>
            </div>
            <p className="text-sm">Medication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;