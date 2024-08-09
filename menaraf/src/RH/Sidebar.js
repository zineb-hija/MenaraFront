import React from 'react';
import './Sidebar.css';
import { FaHome, FaUserTie, FaUserGraduate, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Importation directe de l'image

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        MENARA
      </div>
      <ul>
        <li onClick={() => navigate('/rh')}>
          <FaHome className="icon" /> Accueil
        </li>
        <li onClick={() => navigate('/addencadrant')}>
          <FaUserTie className="icon" /> Encadrant
        </li>
        <li onClick={() => navigate('/addstagiaire')}>
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
