import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">
        <div className="card-content">
          <FaUsers className="icon red" />
          <div>10</div>
          <div>Encadrants</div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <FaUsers className="icon green" />
          <div>50</div>
          <div>Stagiaires</div>
        </div>
      </div>
      <div className="calendar-card">
        <IoMdCalendar className="calendar-icon" />
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
