import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>
        &copy; {year} <span className="highlight">Shiva</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
