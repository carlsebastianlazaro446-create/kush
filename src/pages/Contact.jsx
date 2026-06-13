import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('carlsebastianlazaro446@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="page contact-page">
      <span className="section-number">05</span>
      <span className="page-label">Contact</span>
      <h1>Get in touch</h1>
      <p>Feel free to reach out through any of the platforms below.</p>

      <div className="contact-list">
        <a href="mailto:carlsebastianlazaro446@gmail.com" className="contact-item">
          <span className="contact-icon">✉</span>
          <span className="contact-text">
            <span className="label">Email</span>
            <span className="value">carlsebastianlazaro446@gmail.com</span>
          </span>
          <span className="contact-arrow">→</span>
        </a>

        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="contact-item">
          <span className="contact-icon">in</span>
          <span className="contact-text">
            <span className="label">LinkedIn</span>
            <span className="value">linkedin.com/in/yourname</span>
          </span>
          <span className="contact-arrow">→</span>
        </a>

        <a href="https://github.com/carlsebastian" target="_blank" rel="noreferrer" className="contact-item">
          <span className="contact-icon">⌥</span>
          <span className="contact-text">
            <span className="label">GitHub</span>
            <span className="value">github.com/carlsebastian</span>
          </span>
          <span className="contact-arrow">→</span>
        </a>
      </div>

      <div className="copy-row">
        <button className="copy-btn" onClick={handleCopyEmail}>
          {copied ? 'Copied to clipboard' : 'Copy email address'}
        </button>
      </div>
    </div>
  );
}

export default Contact;