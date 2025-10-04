// backend/models/Form.js

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  suburb: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String } // opcional
}, {
  timestamps: true
});

module.exports = mongoose.model('Form', formSchema);
