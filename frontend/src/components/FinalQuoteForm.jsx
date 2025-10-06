// src/components/FinalQuoteForm.jsx
import React, { useState } from 'react';
import '../styles/FinalQuoteForm.css';

const FinalQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suburb: '',
    mobile: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Quote submitted successfully!');
        setFormData({
          name: '',
          email: '',
          suburb: '',
          mobile: '',
          service: '',
          message: '',
        });
      } else {
        alert('Failed to submit quote.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('An error occurred.');
    }
  };

  return (
    <section className="final-quote-section" id="final-quote">
      <form className="final-quote-form" onSubmit={handleSubmit}>
        <h2>Request A Quote Today</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Suburb *</label>
            <input type="text" name="suburb" value={formData.suburb} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mobile *</label>
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row full">
          <div className="form-group">
            <label>Interested Service *</label>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="" disabled>Choose a service</option>
              <option value="kitchen">Kitchen Renovation</option>
              <option value="bathroom">Bathroom Renovation</option>
              <option value="full-home">Full Home Renovation</option>
              <option value="flooring">Flooring</option>
              <option value="benchtop">Bench Top</option>
              <option value="construction">Construction</option>
            </select>
          </div>
        </div>

        <div className="form-row full">
          <div className="form-group">
            <label>Tell us about your project</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" />
          </div>
        </div>

        <button type="submit">
          <span className="corner left"></span>
          Submit
          <span className="corner right"></span>
        </button>
      </form>
    </section>
  );
};

export default FinalQuoteForm;
