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
            Create your dream bathroom renovation in Taren Point with Inhaus Living. Experience beautiful design, quality craftsmanship and personalised service with a full-service team dedicated to making your dreams a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamApartment;
