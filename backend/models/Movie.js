const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    description: String,
    releaseYear: Number,
    imageUrl: String 
});


module.exports = mongoose.model('Movie', MovieSchema);
