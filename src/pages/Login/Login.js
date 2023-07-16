import React, {useContext, useState} from 'react';
import {AuthContext} from '../../components/AuthProvider/AuthProvider';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Footer from "../../components/Footer/Footer";
import './Login.css';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            });
            login(result.data.jwt);
            navigate('/your-reservations');

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <div className="main">
                <header>
                    <div className="background">
                        <div className="white-bar">
                            <div className="login">
                                <h3>Please login to view your reservation details:</h3>

                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="username">
                                        Username:
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </label>

                                    <label htmlFor="password-field">
                                        Password:
                                        <input
                                            type="password"
                                            id="password-field"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </label>
                                    {error &&
                                        <p className="error">The combination username and password is incorrect</p>}

                                    <button
                                        type="submit"
                                        className="form-button"
                                    >
                                        Log in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </header>

                <footer className="process-container">
                    <Footer/>
                </footer>
            </div>

        </>
    );
}

export default SignIn;