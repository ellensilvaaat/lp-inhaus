// models/Quote.js
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  suburb: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String }, // <- campo opcional
}, { timestamps: true });

module.exports = mongoose.model('Quote', quoteSchema);
