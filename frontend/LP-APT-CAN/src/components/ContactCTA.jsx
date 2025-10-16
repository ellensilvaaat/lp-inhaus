import React from 'react';
import '../styles/ContactCTA.css';
import bgCTA from '../assets/cta-bg.png'; // nome da imagem com overlay embutido

const ContactCTA = () => {
  return (
    <section
      className="contact-cta"
      style={{ backgroundImage: `url(${bgCTA})` }}
    >
      <div className="cta-content">
        <h2>
          Ready To Elevate Your <span>Apartment Renovation</span> in Canberra?
        </h2>
        <p>
          Let our renovation experts at <span><strong>Inhaus Living</strong></span> bring your vision to life.
          <br />
          Reach out today to schedule a consultation.
        </p>
        <div className="contact-box">
          <span>Contact us now</span>
          <a className="phone-button" href="tel:+6126176 2807">
            PHONE: (02) 6176 2807
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
