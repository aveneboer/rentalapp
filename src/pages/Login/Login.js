import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const handleLoginSubmit = () => {
        const userData = {
            username,
            password
        };

        axios
            .post('http://localhost:8080/authenticate', userData)
            .then((response) => {
                console.log(response.data);
                setConfirmation('Login successful.');
                handleLogin();
            })
            .catch((error) => {
                console.error('Username or password incorrect', error);
                setConfirmation('Error occurred during login.');
            });
    };

    const handleRegisterSubmit = () => {
        const userData = {
            username,
            password,
            email
        };

        axios
            .post('http://localhost:8080/users', userData)
            .then((response) => {
                console.log(response.data);
                setConfirmation('Your account has been created.');
                handleLogin();
            })
            .catch((error) => {
                console.error('Username or password not allowed or incorrect', error);
                setConfirmation('Error occurred while creating your account.');
            });
    };

    const handleToggleMode = () => {
        setIsRegisterMode(!isRegisterMode);
        setUsername('');
        setPassword('');
        setEmail('');
        setConfirmation('');
    };

    return (
        <div className="login-container">
            <h1 className="login-title">{isRegisterMode ? 'Register' : 'Login'}</h1>
            <p className="login-description">
                {isRegisterMode ? 'Create your account to get access to your reservation.' : 'Enter your credentials to login.'}
            </p>
            {isRegisterMode && (
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
            )}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            {isRegisterMode ? (
                <button onClick={handleRegisterSubmit} className="login-button">
                    Register
                </button>
            ) : (
                <button onClick={handleLoginSubmit} className="login-button">
                    Login
                </button>
            )}
            {confirmation && <p className="login-confirmation">{confirmation}</p>}
            <button onClick={handleToggleMode} className="login-toggle-button">
                {isRegisterMode ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Login;
