import React, { use } from 'react';
import './header.css';
import Logo from './images/header/TestLogo.png';
import Home from './images/icons/home.png';
import Group from './images/icons/group.png'
import Calendar from './images/icons/calendar.png';
import Chat from './images/icons/chat_bubble.png';
import Card from './images/icons/credit_card.png';
import moreVert from './images/icons/more_vert.png';
import user from './images/icons/user.png'
import Setting from './images/icons/settings.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <nav className="menu">
        <ul>
          <li><img src={Home} alt="Overview" /><a href="/">Overview</a></li>
          <li><img src={Group} alt="Overview" /><a href="/Patients">Patients</a></li>
          <li><img src={Calendar} alt="Overview" /><a href="/schedule">Schedule</a></li>
          <li><img src={Chat} alt="Overview" /><a href="/message">Message</a></li>
          <li><img src={Card} alt="Overview" /><a href="/transactions">Transactions</a></li>
        </ul>
      </nav>
      <div className="user-info">
        <div className="user-details">
          <img src={user} alt="User" className="user-avatar" /> 
          <div className="user-text">
            <span className="user-name">John Doe</span>
            <span className="user-role">Administrator</span>
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