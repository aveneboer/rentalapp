import React from 'react';
import './ButtonBookNow.css';

const Button = ({ text, onClick }) => {

    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
