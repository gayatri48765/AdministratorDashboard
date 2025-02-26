 import React, { useState } from 'react';
import './css/header.css';
import Logo from './images/header/TestLogo.png';
import Home from './images/icons/home.png';
import Group from './images/icons/group.png';
import Calendar from './images/icons/calendar.png';
import Chat from './images/icons/chat_bubble.png';
import Card from './images/icons/credit_card.png';
import moreVert from './images/icons/more_vert.png';
import user from './images/icons/user.png';
import Setting from './images/icons/settings.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="menu">
        <div className="hamburger" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li>
            <img src={Home} alt="Overview" />
            <a href="/">Overview</a>
          </li>
          <li className="active">
            <img src={Group} alt="Patients" />
            <a href="/Patients">Patients</a>
          </li>
          <li>
            <img src={Calendar} alt="Schedule" />
            <a href="/schedule">Schedule</a>
          </li>
          <li>
            <img src={Chat} alt="Message" />
            <a href="/message">Message</a>
          </li>
          <li>
            <img src={Card} alt="Transactions" />
            <a href="/transactions">Transactions</a>
          </li>
        </ul>
      </nav>
      <div className="user-info">
        <div className="user-details">
          <img src={user} alt="User" className="user-avatar" />
          <div className="user-text">
            <span className="user-name">Dr. Jose Simmons</span>
            <span className="user-role">General Practitioner</span>
          </div>
        </div>
        <div className="user-actions">
          <img src={Setting} alt="Setting" className="setting-icon" />
          <img src={moreVert} alt="Menu" className="menu-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;