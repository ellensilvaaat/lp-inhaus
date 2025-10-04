// backend/controllers/formController.js

const Form = require('../models/Form');

// Função para salvar formulário
const submitForm = async (req, res) => {
  try {
    const { name, email, phone, suburb, service, message } = req.body;

    // Validação simples
    if (!name || !email || !phone || !suburb || !service) {
      return res.status(400).json({ error: 'All required fields must be filled.' });
    }

    // Cria e salva no banco
    const form = new Form({ name, email, phone, suburb, service, message });
    await form.save();

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).json({ error: 'Server error while submitting form.' });
  }
};

module.exports = { submitForm };
