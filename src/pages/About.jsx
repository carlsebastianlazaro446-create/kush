import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="page about-page">
      <span className="section-number">02</span>
      <span className="page-label">About</span>
      <h1>About me</h1>
      <p>
        My name is Carl. I'm currently learning web development with a focus
        on React. I enjoy solving problems through code and I'm building
        this portfolio as part of my journey into front-end development.
      </p>

      <div className="about-traits">
        <div className="trait">
          <span className="trait-label">Role</span>
          <span className="trait-value">Full Stack Developer</span>
        </div>
        <div className="trait">
          <span className="trait-label">Stack</span>
          <span className="trait-value">React, Node.js, MySQL, MongoDB</span>
        </div>
        <div className="trait">
          <span className="trait-label">Focus</span>
          <span className="trait-value">Scalable, user-friendly solutions</span>
        </div>
      </div>

      <hr className="section-divider" />

      <span className="page-label">Education</span>
      <div className="edu-card">
        <div className="edu-timeline">
          <span className="edu-year">2022</span>
          <div className="edu-line"></div>
          <span className="edu-year">2026</span>
        </div>
        <div className="edu-content">
          <h2>Bachelor of Science in Information Technology</h2>
          <span className="meta">Pampanga State University</span>
          <p>
            I'm a Full Stack Developer skilled in building web applications using
            React, Node.js, and databases like MySQL and MongoDB. With a background
            in Information Technology, I enjoy creating scalable, user-friendly
            solutions and continuously improving my coding and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;