import React, { useState } from 'react';
import './ReservationForm.css';
import axios from 'axios';
import DriverLicenseUpload from "../DriverLicense/DriverLicenseUpload";


const ReservationForm = ({ isVisible }) => {
    const [confirmation, setConfirmation] = useState('');
    const [reservationFormSubmitted, setReservationFormSubmitted] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [service, setService] = useState('');
    const [bikeQuantity, setBikeQuantity] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [documentUploaded, setDocumentUploaded] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const reservationData = {
            startDate,
            endDate,
            type: service,
            customer: {
                firstName,
                lastName,
                phoneNo: phoneNumber,
                email,
                address
            },
            bikeQuantity
        };

        axios
            .post('http://localhost:8080/reservations/create_reservation', reservationData)
            .then((response) => {
                console.log(response.data);
                setConfirmation('Your reservation was successful.');
                setReservationFormSubmitted(true);
            })
            .catch((error) => {
                console.error('Fout bij het maken van de reservering:', error);
                setConfirmation('Error occurred while creating reservation.');
            });
    };

    const handleDocumentUpload = (isUploaded) => {
        setDocumentUploaded(isUploaded);
    };

    return (
        <form className={`reservation-form ${isVisible ? 'visible' : 'hidden'}`} onSubmit={handleSubmit}>
            <div>
                <h3> Make your reservation: </h3>
                <br/>
                <label htmlFor="service">Select service:</label>
                <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">Choose an option</option>
                    <option value="bike">Bike</option>
                    <option value="car">Private driver</option>
                </select>
            </div>

            {service === 'bike' && (
                <div>
                    <label htmlFor="bikeCount">Select how many bikes:</label>
                    <select id="bikeCount" value={bikeQuantity} onChange={(e) => setBikeQuantity(parseInt(e.target.value))}>
                        {[1, 2, 3, 4, 5].map((count) => (
                            <option key={count} value={count}>
                                {count}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>

            <div>
                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>

            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            {documentUploaded && <button type="submit">Submit</button>}

            {!documentUploaded && (
                <DriverLicenseUpload handleDocumentUpload={handleDocumentUpload} />
            )}

            {reservationFormSubmitted && <DriverLicenseUpload reservationFormSubmitted={reservationFormSubmitted} />}
            {confirmation && <p>{confirmation}</p>}
        </form>
    );
};

export default ReservationForm;
