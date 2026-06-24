import { useState } from 'react';
import './Navbar.css';
import ProfilePic from '../assets/Picture1.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ProfilePic} alt="Carl" className="navbar-avatar" />
        <span className="logo-text">Carl<span className="logo-italic">.</span></span>
      </div>

      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '[ close ]' : '[ menu ]'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home"       onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li><a href="#about"      onClick={(e) => handleScroll(e, 'about')}>About</a></li>
        <li><a href="#techstack"  onClick={(e) => handleScroll(e, 'techstack')}>Tech Stack</a></li>
        <li><a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a></li>
        <li><a href="#contact"    onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;