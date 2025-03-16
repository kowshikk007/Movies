const mongoose = require('mongoose');
const Movie = require('./models/Movie');

// Temporarily set MONGO_URI directly for testing
const MONGO_URI = "mongodb+srv://kowshik:kowshik@base.sixql.mongodb.net/moviedb?retryWrites=true&w=majority";

console.log('MONGO_URI:', MONGO_URI); // Log the MONGO_URI for debugging
const movies = [
    { title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', releaseYear: 2010, imageUrl: 'https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png?format=2500w' },
    { title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', releaseYear: 2014, imageUrl: 'https://saichintala.com/wp-content/uploads/2014/11/interstellar-3.jpg' },

];

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('✅ MongoDB connected');
        await Movie.deleteMany(); // Clear existing movies
        await Movie.insertMany(movies); // Insert sample movies
        console.log('✅ Sample movies added');
        mongoose.connection.close();
    })
    .catch(err => console.error('❌ MongoDB connection error:', err));
