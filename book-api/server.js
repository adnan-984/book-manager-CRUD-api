const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/books');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Server running on port ${process.env.PORT || 3000}`);
  });
})
.catch(err => console.error('❌ MongoDB connection error:', err));
