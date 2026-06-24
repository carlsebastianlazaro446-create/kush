import React from 'react';
import '../App.css';

function Home() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero" id="home">
      <div className="hero-main">
        <div className="eyebrow mono">
          Portfolio — 2026 <span className="blink"></span>
        </div>
        <h1>
          Hi, I'm Carl.<br />
          I build <span>thoughtful</span><br />
          web experiences.
        </h1>
        <p>
          A developer learning React and front-end engineering, focused on
          writing clean code and building interfaces people enjoy using.
        </p>
        <div className="hero-links">
          <a href="#about" className="hero-btn primary" onClick={(e) => handleClick(e, 'about')}>About me</a>
          <a href="#contact" className="hero-btn secondary" onClick={(e) => handleClick(e, 'contact')}>Get in touch</a>
        </div>
      </div>
    </div>
  );
}

export default Home;