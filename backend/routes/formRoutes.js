// backend/routes/formRoutes.js

const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');

// Rota para envio do formulário
router.post('/submit', submitForm);

module.exports = router;
