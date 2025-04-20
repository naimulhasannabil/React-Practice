import React from 'react';

const AdminDashboard = () => {
  const stats = [
    { title: "Total Patients", value: "1,245", change: "+12%", trend: "up" },
    { title: "Active Doctors", value: "48", change: "+5%", trend: "up" },
    { title: "Appointments Today", value: "87", change: "-3%", trend: "down" },
    { title: "Revenue", value: "$28,450", change: "+18%", trend: "up" }
  ];

  const recentActivities = [
    { action: "New patient registered", time: "10 mins ago" },
    { action: "Dr. Chen updated availability", time: "25 mins ago" },
    { action: "System maintenance completed", time: "1 hour ago" },
    { action: "New admin user added", time: "2 hours ago" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-blue-800">Admin Dashboard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-1">{stat.title}</p>
            <div className="flex justify-between items-end">
              <p className="text-2xl font-bold text-blue-800">{stat.value}</p>
              <span className={`text-sm ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {stat.change} {stat.trend === "up" ? "↑" : "↓"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg lg:col-span-2">
          <h4 className="font-semibold mb-4 text-blue-700">System Overview</h4>
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Server Status</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Operational</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Database Usage</span>
              <span className="text-gray-600">64% of 500GB</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Last Backup</span>
              <span className="text-gray-600">Today, 2:00 AM</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="btn-primary">Manage Users</button>
            <button className="btn-secondary">System Settings</button>
            <button className="btn-secondary">View Audit Logs</button>
            <button className="btn-secondary">Generate Reports</button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-4 text-blue-700">Recent Activities</h4>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="bg-white p-3 rounded-lg">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            ))}
            <button className="btn-secondary w-full">View All Activities</button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-4 text-blue-700">Quick Access</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn-secondary">Doctor Management</button>
          <button className="btn-secondary">Patient Records</button>
          <button className="btn-secondary">Appointments</button>
          <button className="btn-secondary">Billing</button>
          <button className="btn-secondary">Inventory</button>
          <button className="btn-secondary">Support Tickets</button>
          <button className="btn-secondary">Analytics</button>
          <button className="btn-secondary">Notifications</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;