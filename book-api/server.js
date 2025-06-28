const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./book-api/routes/books');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// ➕ Added root route for Render or browser testing
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book Manager API!');
});

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Server listen (Render uses PORT environment variable)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
