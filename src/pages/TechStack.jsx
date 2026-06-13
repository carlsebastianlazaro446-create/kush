import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiVercel, SiNetlify } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import '../App.css';

function TechStack() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#2965F1' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#C9A227' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#6CC24A' },
    { name: 'Express.js', icon: <SiExpress />, color: '#ECEAE4' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'SQL', icon: <TbSql />, color: '#C9A227' },
    { name: 'Vercel', icon: <SiVercel />, color: '#ECEAE4' },
    { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
  ];

  return (
    <div className="page techstack-page" id="stack">
      <span className="section-number">03</span>
      <span className="page-label mono">Stack</span>
      <h1>Skills &amp; tech stack</h1>
      <p>Technologies I'm currently learning and building with.</p>

      <div className="tech-list">
        {skills.map((skill, index) => (
          <div className="tech-row" key={index}>
            <span className="tech-badge" style={{ borderColor: skill.color }}>
              <span className="tech-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
            </span>
            <span className="tech-name mono">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;