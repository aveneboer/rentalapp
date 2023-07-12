import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        token: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuth({
                isAuth: true,
                token: token,
                status: 'done',
            });
        } else {
            setIsAuth({
                isAuth: false,
                token: null,
                status: 'done',
            });
        }
    }, []);

    function login(token) {
        localStorage.setItem('token', token);
        setIsAuth({
            isAuth: true,
            token: token,
            status: 'done',
        });
    }

    function logout() {
        localStorage.removeItem('token');
        setIsAuth({
            isAuth: false,
            token: null,
            status: 'done',
        });
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        token: isAuth.token,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
