const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // ✅ Import CORS package
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes'); // Import movie routes

require('dotenv').config();

const app = express();

// ✅ Enable CORS (Allow frontend to access backend)
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes); // Register movie routes


const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
