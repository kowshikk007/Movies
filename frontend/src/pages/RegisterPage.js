import React from 'react';
import Register from '../components/Register';

const RegisterPage = () => {
    return (
        <div style={{ backgroundColor: '#121212', color: '#e0e0e0', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: 'auto' }}>
            {/* <h2 style={{ textAlign: 'center' }}>Register</h2>  <-- Removed This */}
            <Register />
        </div>
    );
};

export default RegisterPage;
