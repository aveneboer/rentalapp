import React from 'react';

const Login = ({ handleLogin }) => {
    const handleTemporaryLogin = () => {
        handleLogin();
    };

    return (
        <div>
            <h1>Login</h1>
            <p>Log in om toegang te krijgen tot Your Reservations</p>
            <button onClick={handleTemporaryLogin}>Temporary Login</button>
        </div>
    );
};

export default Login;