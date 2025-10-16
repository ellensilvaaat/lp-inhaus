import React from 'react';
import '../styles/DreamApartment.css';
import dreamImage from '../assets/dream-apartment.png';

const DreamApartment = () => {
  return (
    <section className="dream-apartment">
      <div className="dream-wrapper">
        <div className="image-container">
          <img src={dreamImage} alt="Bringing your dream apartment to life" />
        </div>
        <div className="text-container">
          <p>
            Create the home you’ve always envisioned with a home construction in Caringbah. At Inhaus Living, we bring your ideas to life with expert design, premium materials, and unparalleled craftsmanship to ensure your dream home becomes a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamApartment;
