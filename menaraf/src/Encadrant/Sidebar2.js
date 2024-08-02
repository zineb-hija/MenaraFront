import React from 'react';
import './Sidebar2.css';
import { FaHome, FaUserTie, FaUserGraduate, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo">MENARA</div>
      <ul>
        <li onClick={() => navigate('/')}>
          <FaHome className="icon" /> Accueil
        </li>
        <li onClick={() => navigate('/projet')}>
          <FaUserTie className="icon" /> Projet
        </li>
        <li onClick={() => navigate('/stagiaire')}>
          <FaUserGraduate className="icon" /> Stagiaire
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar2;
