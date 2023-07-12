import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onComplete }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleRegisterSubmit = () => {
        const userData = {
            username,
            password,
            email,
            enabled: true,
        };

        axios
            .post('http://localhost:8080/users/create_user', userData)
            .then((response) => {
                setConfirmation('Your account has been created.');

                axios
                    .put('http://localhost:8080/customers/link-to-user', null,{
                        params: {
                            username: userData.username,
                            email: userData.email,
                        },
                    })
                    .then(() => {
                        onComplete(userData);
                    })
                    .catch((error) => {
                        console.error('Error occurred while linking user to customer:', error);
                    });
            })
            .catch((error) => {
                console.error('Error occurred while creating your account:', error);
                setConfirmation('Error occurred while creating your account.');
            });
    };

    return (
        <div>
            <h3>Please complete your registration</h3>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleRegisterSubmit}>Register</button>
            {confirmation && <p>{confirmation}</p>}
        </div>
    );
};

export default Register;
