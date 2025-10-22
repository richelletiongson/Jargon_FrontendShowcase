import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to="/home" className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}>
        <div className="nav-icon">🏠</div>
      </Link>
      <Link to="/course" className={`nav-item ${location.pathname === '/course' ? 'active' : ''}`}>
        <div className="nav-icon">📚</div>
      </Link>
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <div className="nav-icon">✨</div>
        <span className="nav-text">AI</span>
      </Link>
      <Link to="/charts" className={`nav-item ${location.pathname === '/charts' ? 'active' : ''}`}>
        <div className="nav-icon">🏆</div>
      </Link>
      <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
        <div className="nav-icon">👷</div>
      </Link>
    </div>
  );
};

export default NavBar;
