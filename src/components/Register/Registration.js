import React, {useState} from 'react';
import axios from 'axios';
import './Register.css';

const Register = ({onComplete}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [error, setError] = useState('');

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
                    .put('http://localhost:8080/customers/link-to-user', null, {
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
    const validateForm = () => {
        let isValid = true;
        setError('');

        if (password.length < 8) {
            setError('Password must be at least 8 characters.');
            isValid = false;
        }

        if (!validateEmail(email)) {
            setError('Invalid email address.');
            isValid = false;
        }

        return isValid;
    };

    const validateEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleRegisterSubmit();
        }
    };


        return (
            <div>
                <h4 className="register">Please complete your registration</h4>
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
                    placeholder="Email used for booking"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit}>Register</button>
                {error && <p className="error">{error}</p>}
                {confirmation && <p className="confirmation"> {confirmation}</p>}
            </div>
        );
    };

    export default Register;
