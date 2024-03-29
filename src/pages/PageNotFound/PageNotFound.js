import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (counter === 0) {
            navigate('/');
        }
    }, [counter, navigate]);

    return (
        <>
            <h1>PageNotFound</h1>
            <p>
                This page has not been found and you will be redirected in {' '}
                <strong>{counter} sec.</strong>
            </p>
            <hr />
        </>
    );
};

export default PageNotFound;
