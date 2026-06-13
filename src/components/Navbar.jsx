import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    { id: 'home', label: '01 Home' },
    { id: 'about', label: '02 About' },
    { id: 'techstack', label: '03 Stack' },
    { id: 'experience', label: '04 Work' },
    { id: 'contact', label: '05 Contact' },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo" onClick={(e) => handleClick(e, 'home')}>
        Carl <span className="logo-italic">Sebastian</span>
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✕' : 'Menu'}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;