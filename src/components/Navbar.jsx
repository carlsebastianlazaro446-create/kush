import React, { useState } from 'react';
import '../App.css';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="logo-box">CS</span>
        <span className="logo-text">Carl<span className="logo-italic">Sebastian</span></span>
      </a>

      <span className="menu-icon" onClick={() => setActive(!active)}>
        {active ? 'Close' : 'Menu'}
      </span>

      <ul className={`nav-links ${active ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setActive(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setActive(false)}>About</a></li>
        <li><a href="#stack" onClick={() => setActive(false)}>Stack</a></li>
        <li><a href="#experience" onClick={() => setActive(false)}>Experience</a></li>
        <li><a href="#contact" onClick={() => setActive(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;