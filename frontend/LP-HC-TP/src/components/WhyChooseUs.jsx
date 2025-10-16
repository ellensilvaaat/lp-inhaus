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
          Building a home is more than just a project; it’s an investment in your future. With Inhaus Living, you’ll have a trusted partner in every step of the process, from initial design to final build. We offer tailored construction solutions to suit your needs, preferences, and budget, making sure your home exceeds your expectations.
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
            <p>Tailored Home <br/><strong>Construction Solutions</strong></p>
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
