import React, { useState } from 'react';
import '../styles/QuoteForm.css';

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
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
    <form className="quote-form" onSubmit={handleSubmit}>
      <h2>Request A Quote Today</h2>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name *" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" required />
      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone *" required />
      <input type="text" name="suburb" value={form.suburb} onChange={handleChange} placeholder="Suburb *" required />
      <select name="service" value={form.service} onChange={handleChange} required>
        <option value="" disabled hidden>What service are you interested in? *</option>
        <option value="kitchen">Kitchen Renovation</option>
        <option value="bathroom">Bathroom Renovation</option>
        <option value="full-home">Full Home Renovation</option>
        <option value="flooring">Flooring</option>
        <option value="benchtop">Bench Top</option>
        <option value="construction">Construction</option>
      </select>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuoteForm;
