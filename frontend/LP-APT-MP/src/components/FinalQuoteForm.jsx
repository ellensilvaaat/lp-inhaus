import React, { useState } from 'react';
import '../styles/FinalQuoteForm.css';

const FinalQuoteForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    suburb: '',
    mobile: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Quote submitted successfully!');
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
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Suburb *</label>
            <input type="text" name="suburb" value={form.suburb} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Mobile *</label>
            <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row full">
          <div className="form-group">
            <label>Interested Service *</label>
            <select name="service" value={form.service} onChange={handleChange} required>
              <option value="" disabled hidden>What service are you interested in? *</option>
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
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" />
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

