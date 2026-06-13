import React from 'react';
import '../App.css';

function Experience() {
  return (
    <div id="experience" className="experience-page">
      <span className="section-number">04</span>
      <span className="page-label">Work</span>
      <h1>Experience</h1>
      <p className="exp-intro">Projects and roles I've worked on so far.</p>

      <div className="exp-list">

        <div className="exp-item">
          <div className="exp-marker">
            <span className="exp-bracket">01</span>
            <span className="exp-line"></span>
          </div>
          <div className="exp-content">
            <div className="exp-header">
              <h2>Front End Developer / Portfolio</h2>
              <span className="exp-status">Current</span>
            </div>
            <span className="meta">Pampanga State University · 2022 – 2026</span>
            <p>
              Built this portfolio site from scratch using React, focusing on
              component structure, layout, and responsive design. Learned how
              to organize pages, style with CSS, and deploy a working front-end project.
            </p>
            <div className="exp-tags">
              <span className="exp-tag">React</span>
              <span className="exp-tag">CSS</span>
              <span className="exp-tag">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="exp-item">
          <div className="exp-marker">
            <span className="exp-bracket">02</span>
            <span className="exp-line"></span>
          </div>
          <div className="exp-content">
            <div className="exp-header">
              <h2>[Another Project Name]</h2>
            </div>
            <span className="meta">Personal Project · [Year]</span>
            <p>[Description of the project and tech used.]</p>
            <div className="exp-tags">
              <span className="exp-tag">[Tech]</span>
              <span className="exp-tag">[Tech]</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;