import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Buttons/ButtonBookNow.css';


const ButtonBookNow = () => {
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate('/reservationPage'); // Navigate to the ReservationPage when the button is clicked
    };

    return (
        <button className="button" onClick={handleBookNowClick}>
            Book Now
        </button>
    );
};

export default ButtonBookNow;
