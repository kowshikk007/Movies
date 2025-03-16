import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        setIsLoggedIn(false); // Update state
        navigate("/"); // Redirect to home after logout
    };

    return (
        <nav style={{ backgroundColor: '#1e1e1e', padding: '10px' }}> {/* Dark background for navbar */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'inline', margin: '0 15px' }}>
                    <Link to="/" style={{ color: '#e0e0e0' }}>Home</Link>
                </li>
                <li style={{ display: 'inline', margin: '0 15px' }}>
                    <Link to="/movies" style={{ color: '#e0e0e0' }}>Movie List</Link>
                </li>
                <li style={{ display: 'inline', margin: '0 15px' }}>
                    <Link to="/add-movie" style={{ color: '#e0e0e0' }}>Add Movie</Link>
                </li>

                {!isLoggedIn ? ( // Show Login & Register only if user is NOT logged in
                    <>
                        <li style={{ display: 'inline', margin: '0 15px' }}>
                            <Link to="/login" style={{ color: '#e0e0e0' }}>Login</Link>
                        </li>
                        <li style={{ display: 'inline', margin: '0 15px' }}>
                            <Link to="/register" style={{ color: '#e0e0e0' }}>Register</Link>
                        </li>
                    </>
                ) : (
                    <li style={{ display: 'inline', margin: '0 15px' }}>
                        <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '16px' }}>
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
