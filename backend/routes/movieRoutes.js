const express = require('express');
const Movie = require('../models/Movie');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// Add a new movie (Authenticated users only)
router.post('/', async (req, res) => {

    const { title, description, releaseYear, imageUrl } = req.body;


    const newMovie = new Movie({ title, description, releaseYear, imageUrl });

    await newMovie.save();

    res.json({ message: 'Movie added successfully' });
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Movie.findByIdAndDelete(id);
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting movie' });
    }
});

module.exports = router;
