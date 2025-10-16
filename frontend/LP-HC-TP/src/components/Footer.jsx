import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <div className="contact-info">
          <p>Contact us</p>
          <p>(02) 8359 1679</p>
          <p>info@inhausliving.com.au</p>
          <p>Unit 2/175 Taren Point Rd, Caringbah NSW 2229</p>
        </div>
        <div className="copyright">
          © 2025 INHAUS LIVING, ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
