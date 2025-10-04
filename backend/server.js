// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const quoteRoutes = require('./routes/quoteRoutes');
const formRoutes = require('./routes/formRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/quotes', quoteRoutes);
app.use('/api/forms', formRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

