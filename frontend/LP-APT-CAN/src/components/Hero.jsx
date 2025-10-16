// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';
import bg from '../assets/bg.png';
import QuoteForm from './QuoteForm';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Canberra, ACT <br />
            Apartment <span>Renovation</span>
          </h1>
          <p>
            Discover affordable luxury with your apartment renovation in Canberra with <span><strong>Inhaus Living</strong></span>
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
};

export default Hero;
