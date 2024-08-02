import React from 'react';
import './Header2.css';

const Header2 = () => {
  return (
    <div className="header">
      <div className="search"><i className="fas fa-search"></i></div>
      <div className="notification"><i className="fas fa-bell"></i></div>
      <div className="profile">
        <span>Zineb Hijaoui</span>
        <span>Encadrant</span>
        <img src="profile.jpg" alt="Admin" />
      </div>
    </div>
  );
};

export default Header2;
