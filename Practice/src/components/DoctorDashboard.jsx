import React from 'react';

const DoctorDashboard = () => {
  const appointments = [
    { id: 1, patient: 'John Smith', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patient: 'Sarah Johnson', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, patient: 'Michael Brown', time: '2:15 PM', status: 'Pending' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-blue-800">Doctor Dashboard</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg lg:col-span-2">
          <h4 className="font-semibold mb-4 text-blue-700">Today's Appointments</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Patient</th>
                  <th className="py-2 text-left">Time</th>
                  <th className="py-2 text-left">Status</th>
                  <th className="py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(app => (
                  <tr key={app.id} className="border-b">
                    <td className="py-3">{app.patient}</td>
                    <td className="py-3">{app.time}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-4 text-blue-700">Quick Actions</h4>
          <div className="space-y-3">
            <button className="btn-primary w-full">Start Virtual Consultation</button>
            <button className="btn-secondary w-full">View Patient Records</button>
            <button className="btn-secondary w-full">Write Prescription</button>
            <button className="btn-secondary w-full">Update Availability</button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-4 text-blue-700">Patient Messages</h4>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Robert Johnson</p>
                <p className="text-sm text-gray-600">Regarding medication side effects</p>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Emily Davis</p>
                <p className="text-sm text-gray-600">Test results inquiry</p>
              </div>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
          </div>
          <button className="btn-secondary w-full">View All Messages</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;