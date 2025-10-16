import React from 'react';
import '../styles/WhyChooseUs.css';
import houseImg from '../assets/house-sketch.png'; 

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="content">
        <h2>Why choose us</h2>
        <div className="underline" />
        <p className="description">
          We understand that every renovation is special. That’s why we take the time to learn about your style, needs, and budget.
        </p>
        <div className="features">
          <div className="feature">
            <span className="number">01</span>
            <p>Over 20 Years <br/><strong>Experience</strong></p>
          </div>
          <div className="feature">
            <span className="number">02</span>
            <p>Complete Project <br/><strong>Management</strong></p>
          </div>
          <div className="feature">
            <span className="number">03</span>
            <p>Tailored Designs <br/><strong>for Every Home</strong></p>
          </div>
          <div className="feature">
            <span className="number">04</span>
            <p>Free Quotes <br/><strong>& Inspections</strong></p>
          </div>
          <div className="feature">
            <span className="number">05</span>
            <p>Innovative and <br/><strong>Functional Designs</strong></p>
          </div>
          <div className="feature">
            <span className="number">06</span>
            <p>High-Quality <br/> <strong>Materials</strong></p>
          </div>
        </div>

        <a href="#final-quote" className="cta-button">
  Request a Free Quote
</a>

      </div>

      <img src={houseImg} alt="House Sketch" className="background-image" />
    </section>
  );
};

export default WhyChooseUs;
