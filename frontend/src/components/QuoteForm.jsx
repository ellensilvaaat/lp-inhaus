// src/components/QuoteForm.jsx
import React, { useState } from 'react';
import '../styles/QuoteForm.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://lp-backend-oeql.onrender.com/api/quotes", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          suburb: '',
          service: '',
          message: '',
        });
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('An error occurred.');
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <h2>Request A Quote Today</h2>
      <input
        type="text"
        name="name"
        placeholder="Name *"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone *"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="suburb"
        placeholder="Suburb *"
        value={formData.suburb}
        onChange={handleChange}
        required
      />
      <select
        name="service"
        required
        value={formData.service}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
          What service are you interested in? *
        </option>
        <option value="kitchen">Kitchen Renovation</option>
        <option value="bathroom">Bathroom Renovation</option>
        <option value="full-home">Full Home Renovation</option>
        <option value="flooring">Flooring</option>
        <option value="benchtop">Bench Top</option>
        <option value="construction">Construction</option>
      </select>
      <textarea
        name="message"
        placeholder="Tell us about your project"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuoteForm;
