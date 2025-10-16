// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Inhaus Living Logo" className="logo" />
      <a className="call-now" href="tel:+610261762807">Call Now</a>
    </nav>
  );
};

export default Navbar;
