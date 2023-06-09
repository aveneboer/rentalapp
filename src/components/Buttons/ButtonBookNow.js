import React from 'react';
import './ButtonBookNow.css';

const Button = ({ text, onClick }) => {
    const handleBookNow = () => {
        history.push('/reservation-calendar');
    };
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
