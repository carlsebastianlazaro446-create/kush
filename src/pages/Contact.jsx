import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('carlsebastianlazaro446@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div id="contact" className="contact-page">
      <div className="ct-top">
        <span className="ct-num">05</span>
        <span className="ct-sep" />
        <span className="ct-lbl">Contact</span>
      </div>
      <h1>Contact.</h1>
      <p className="ct-intro">Feel free to reach out through any of the platforms below.</p>

      <div className="ct-list">
        <a href="mailto:carlsebastianlazaro446@gmail.com" className="ct-item">
          <div className="ct-icon">✉</div>
          <div className="ct-text">
            <span className="ct-label">Email</span>
            <span className="ct-value">carlsebastianlazaro446@gmail.com</span>
          </div>
          <span className="ct-arrow">↗</span>
        </a>

        <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="ct-item">
          <div className="ct-icon">in</div>
          <div className="ct-text">
            <span className="ct-label">LinkedIn</span>
            <span className="ct-value">linkedin.com/in/yourname</span>
          </div>
          <span className="ct-arrow">↗</span>
        </a>

        <a href="https://github.com/carlsebastian" target="_blank" rel="noreferrer" className="ct-item">
          <div className="ct-icon">⌥</div>
          <div className="ct-text">
            <span className="ct-label">GitHub</span>
            <span className="ct-value">https://github.com/carlsebastianlazaro446-create/kush.git</span>
          </div>
          <span className="ct-arrow">↗</span>
        </a>
      </div>

      <div className="ct-copy-row">
        <button className={`ct-copy-btn${copied ? ' done' : ''}`} onClick={handleCopyEmail}>
          {copied ? 'Copied!' : 'Copy email address'}
        </button>
        <span className={`ct-copy-hint${copied ? ' show' : ''}`}>Copied to clipboard</span>
      </div>
    </div>
  );
}

export default Contact;