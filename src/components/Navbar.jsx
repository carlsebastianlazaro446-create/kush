import './Navbar.css';
import ProfilePic from '../assets/Picture1.jpg';  // ← import it here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={ProfilePic}   // ← use the imported variable here
          alt="Profile"
          className="navbar-avatar"
        />
        <span>Kush</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;