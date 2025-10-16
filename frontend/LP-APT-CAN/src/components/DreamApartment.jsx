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
            Transform your apartment in Canberra into a stylish, functional, and modern living space with an apartment renovation by Inhaus Living. 
          </p>
          <p>
            Experience beautiful design, quality craftsmanship and personalised service with a full-service
            team dedicated to making your dreams a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamApartment;
