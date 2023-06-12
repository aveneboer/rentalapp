import React, { useState } from 'react';
import './ReservationForm.css'

const ReservationForm = () => {
    const [service, setService] = useState('');
    const [bikeCount, setBikeCount] = useState(1);
    const [passengerCount, setPassengerCount] = useState(1);
    const [selectedDates, setSelectedDates] = useState([]);
    const [pickupTime, setPickupTime] = useState('');
    const [returnTime, setReturnTime] = useState('');

    const handleServiceChange = (event) => {
        setService(event.target.value);
    };

    const handleBikeCountChange = (event) => {
        setBikeCount(parseInt(event.target.value));
    };

    const handlePassengerCountChange = (event) => {
        setPassengerCount(parseInt(event.target.value));
    };

    const handleDateChange = (event) => {
        const selected = Array.from(event.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setSelectedDates(selected);
    };

    const handlePickupTimeChange = (event) => {
        setPickupTime(event.target.value);
    };

    const handleReturnTimeChange = (event) => {
        setReturnTime(event.target.value);
    };

    return (
        <form className="reservation-form">
            <div>
                <label htmlFor="service">Select service:</label>
                <select id="service" value={service} onChange={handleServiceChange}>
                    <option value="">Choose an option</option>
                    <option value="bike">Bike</option>
                    <option value="car">Private driver</option>
                </select>
            </div>

            {service === 'bike' && (
                <div>
                    <label htmlFor="bikeCount">Select how many bikes:</label>
                    <select id="bikeCount" value={bikeCount} onChange={handleBikeCountChange}>
                        {[1, 2, 3, 4, 5].map((count) => (
                            <option key={count} value={count}>{count}</option>
                        ))}
                        <option value="contact">Contact us for more</option>
                    </select>
                </div>
            )}

            {service === 'car' && (
                <div>
                    <label htmlFor="passengerCount">Select number of passengers:</label>
                    <select id="passengerCount" value={passengerCount} onChange={handlePassengerCountChange}>
                        {[1, 2, 3, 4].map((count) => (
                            <option key={count} value={count}>{count}</option>
                        ))}
                        <option value="contact">Contact us for more</option>
                    </select>
                </div>
            )}

            <div>
                <label htmlFor="dates">Select dates:</label>
                <input type="date" id="dates" value={selectedDates} onChange={handleDateChange} multiple />
            </div>

            <div>
                <label htmlFor="pickupTime">Pick up time:</label>
                <input type="time" id="pickupTime" value={pickupTime} onChange={handlePickupTimeChange} />
            </div>

            <div>
                <label htmlFor="returnTime">Return time:</label>
                <input type="time" id="returnTime" value={returnTime} onChange={handleReturnTimeChange} />
            </div>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" />
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" />
            </div>

            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" />
            </div>

            <div>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" />
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" />
            </div>

            <div>
                <label htmlFor="paymentMethod">Preferred Payment Method:</label>
                <select id="paymentMethod">
                    <option value="cash">Cash</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="bankCard">Bank Card</option>
                </select>
            </div>


            <button type="submit">Submit</button>
        </form>
    );
};

export default ReservationForm;
