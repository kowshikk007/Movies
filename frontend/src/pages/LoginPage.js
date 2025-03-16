import React from 'react';
import Login from '../components/Login';

const LoginPage = ({ setIsLoggedIn }) => {
    return (
        <div style={{ backgroundColor: '#121212', color: '#e0e0e0', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: 'auto' }}> {/* Dark background for the login page */}
            <Login setIsLoggedIn={setIsLoggedIn} /> {/* Pass setIsLoggedIn to Login */}
        </div>
    );
};

export default LoginPage;
