
import React, { useState } from 'react';
import "./ramNavbar.css";
import logo from "./logo.png";
import IconButton from '@mui/material/IconButton';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import LiveTvIcon from '@mui/icons-material/LiveTv';
function RamNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='navram'>
    <nav className="navbar navbar-expand-lg navbar-light bg-blue shadow-md fixed-top" >
      <div className="container">
        <a className="navbar-brand me-auto order-first" href="#"><img className='logo me-auto order-first' src={logo} alt="logo"s/></a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"><IconButton><AccountCircleIcon />Dashboard</IconButton></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><IconButton><EmojiPeopleIcon />social media</IconButton></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><IconButton><SchoolIcon />classroom</IconButton></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><IconButton><LiveTvIcon /> live classes</IconButton></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
export default RamNavbar
