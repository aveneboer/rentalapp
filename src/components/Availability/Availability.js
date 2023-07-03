import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Availability/Availability.css';
import axios from 'axios';

const Availability = ({ onAvailabilityChecked }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [bikeQuantity, setBikeQuantity] = useState(1); // Initialize bike quantity with a default value
    const [bikeAvailability, setBikeAvailability] = useState('');
    const [carAvailability, setCarAvailability] = useState('');

    const handleCheckBikeAvailability = () => {
        axios
            .get('http://localhost:8080/bikes/checkAvailability', {
                params: {
                    startDate: startDate.toISOString().split('T')[0],
                    endDate: endDate.toISOString().split('T')[0],
                    bikeQuantity,
                },
            })
            .then((response) => {
                setBikeAvailability(response.data);
                onAvailabilityChecked(response.data);
            })
            .catch((error) => {
                console.error('Fout bij het ophalen van fietsbeschikbaarheid:', error);
            });
    };

    const handleCheckCarAvailability = () => {
        axios
            .get('http://localhost:8080/cars/checkAvailability', {
                params: {
                    startDate: startDate.toISOString().split('T')[0],
                    endDate: endDate.toISOString().split('T')[0],
                },
            })
            .then((response) => {
                setCarAvailability(response.data);
                onAvailabilityChecked(response.data);
            })
            .catch((error) => {
                console.error('Fout bij het ophalen van autobeschikbaarheid:', error);
            });
    };

    return (
        <div className="availability">
            <h1>Check Availability</h1>
            <div className="format">
                <DatePicker classname="custom-datepicker"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    dateFormat="yyyy-MM-dd"
                    endDate={endDate}
                />
                <DatePicker classname="custom-datepicker"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    dateFormat="yyyy-MM-dd"
                    endDate={endDate}
                    minDate={startDate}
                />
                <input
                    type="number"
                    value={bikeQuantity}
                    onChange={(e) => setBikeQuantity(parseInt(e.target.value))}
                    placeholder="Bike Quantity"
                />
                <button className="button-availability" onClick={handleCheckBikeAvailability}>
                    Check availability bikes
                </button>
                <button className="button-availability" onClick={handleCheckCarAvailability}>
                    Check availability Private Driver
                </button>
            </div>
            {bikeAvailability && <p>Bike: {bikeAvailability}</p>}
            {carAvailability && <p>Car: {carAvailability}</p>}
        </div>
    );
};

export default Availability;

