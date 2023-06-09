import React, { useState } from 'react';
import './PageNotFound.css'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 3000);
    const [counter, setCounter] = useState(3);

    setInterval(() => {
        setCounter(counter - 1);
    }, 1000);

    return (
        <>
            <h1>PageNotFound</h1>
            <p>Dit is de PageNotFound pagina en stuurt je automatisch terug naar home in <strong>{ counter } sec.</strong></p>
            <hr/>
        </>
    );
};

export default PageNotFound;