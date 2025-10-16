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
            Transform your kitchen in Moore Park into a stylish, modern and functional space with a kitchen renovation by Inhaus Living.
          </p>
          <p>
            From sleek modern designs to timeless classics, we bring your dream kitchen renovation in Moore Park to life with expert craftsmanship, high-quality materials, and personalised service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamApartment;
