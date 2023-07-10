import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);


    const handleLogin = (token, username, email) => {
        setToken(token);
        setUsername(username);
        setEmail(email);
    };

    const handleLogout = () => {
        setToken(null);
        setUsername(null);
        setEmail(null);
    };


    return (
        <AuthContext.Provider value={{ token, username, email, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
