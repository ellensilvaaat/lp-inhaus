const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// POST /api/quotes
router.post('/', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    console.error('❌ Failed to save quote:', error);
    res.status(500).json({ message: 'Failed to submit quote' });
  }
});

module.exports = router;

