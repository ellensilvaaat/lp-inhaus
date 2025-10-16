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
          Ready To Elevate Your <span>Home Construction</span> in Caringbah?
        </h2>
        <p>
          Let our renovation experts at <span><strong>Inhaus Living</strong></span> bring your vision to life.
          <br />
          Reach out today to schedule a consultation.
        </p>
        <div className="contact-box">
          <span>Contact us now</span>
          <a className="phone-button" href="tel:+610283591679">
            PHONE: (02) 8359 1679
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
