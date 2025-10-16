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
          <p>(02) 9662 3509</p>
          <p>info@inhausliving.com.au</p>
          <p>Shop 10/2A Todman Ave, Kensington NSW 2033</p>
        </div>
        <div className="copyright">
          © 2025 INHAUS LIVING, ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
