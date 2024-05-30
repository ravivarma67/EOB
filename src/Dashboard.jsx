import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="profile-section">
          <div className="profile-icon">Admin Profile</div>
          <button>Update Profile</button>
          <button>Change Password</button>
        </div>
        <div className="logo-section">
          <h1>Logo</h1>
        </div>
        <div className="datetime-section">
          <p>Date & Time</p>
          <button>Logoff</button>
        </div>
      </header>
      <main className="dashboard-main">
        <nav className="sidebar">
          <ul>
            <li>Home</li>
            <li>
              <span>Department</span>
              <ul>
                <li>Create</li>
                <li>View</li>
                <li>Delete</li>
              </ul>
            </li>
            <li>
              <span>Sub-Department</span>
              <ul>
                <li>Create</li>
                <li>View</li>
                <li>Delete</li>
              </ul>
            </li>
            <li>
              <span>Roles</span>
              <ul>
                <li>Create</li>
                <li>View</li>
                <li>Delete</li>
              </ul>
            </li>
            <li>
              <span>Employee</span>
              <ul>
                <li>List All</li>
                <li>Department</li>
                <li>Sub-Department</li>
                <li>Roles</li>
                <li>Active</li>
                <li>Inactive</li>
              </ul>
            </li>
            <li>Onboarding</li>
            <li>Off-boarding</li>
          </ul>
        </nav>
        <section className="dashboard-content">
          <div className="stats">
            <div>Departments: 5</div>
            <div>Sub-Dept: 15</div>
            <div>Roles: 0</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
