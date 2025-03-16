import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie'; // Importing AddMovie component
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import RegisterPage from './pages/RegisterPage'; // Import the RegisterPage component
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} /> {/* Include the Navbar */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/add-movie" element={<AddMovie />} />
                <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} /> {/* Pass setIsLoggedIn to LoginPage */}
                <Route path="/register" element={<RegisterPage />} /> {/* Add the Register route */}
                <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
            </Routes>
        </Router>
    );
};

export default App;
