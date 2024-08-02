import React from 'react';
import './Sidebar.css';
import { FaHome, FaUserTie, FaUserGraduate, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">MENARA</div>
      <ul>
        <li onClick={() => navigate('/')}>
          <FaHome className="icon" /> Accueil
        </li>
        <li onClick={() => navigate('/encadrant')}>
          <FaUserTie className="icon" /> Encadrant
        </li>
        <li onClick={() => navigate('/stagiaire')}>
          <FaUserGraduate className="icon" /> Stagiaire
        </li>
        <li onClick={() => navigate('/horaire')}>
          <FaClock className="icon" /> Horaire
        </li>
        <li onClick={() => navigate('/planning')}>
          <FaCalendarAlt className="icon" /> Planning
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
