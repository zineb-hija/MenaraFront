import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search"><i className="fas fa-search"></i></div>
      <div className="notification"><i className="fas fa-bell"></i></div>
      <div className="profile">
        <span>Zineb Hijaoui</span>
        <span>RH</span>
        <img src="profile.jpg" alt="RH" />
      </div>
    </div>
  );
};

export default Header;
