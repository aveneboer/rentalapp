import React, { useState, useContext } from 'react';
import axios from 'axios';
import './YourReservations.css';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const YourReservations = () => {
    const { token, username, email } = useContext(AuthContext);
    const [customerData, setCustomerData] = useState(null);
    const [reservationData, setReservationData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/customers/link-to-user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    username: username,
                    email: email,
                },
            });
            const data = response.data;
            setCustomerData(data);
            setReservationData(data.reservations);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const renderCustomerData = () => {
        if (customerData) {
            return (
                <div>
                    <p>Customer ID: {customerData.customerId}</p>
                    <p>First Name: {customerData.firstName}</p>
                    <p>Last Name: {customerData.lastName}</p>
                    <p>Phone No: {customerData.phoneNo}</p>
                    <p>Email: {customerData.email}</p>
                    <p>Address: {customerData.address}</p>
                </div>
            );
        } else {
            return <p>Loading customer data...</p>;
        }
    };

    const renderReservationData = () => {
        return reservationData.map(reservation => (
            <div key={reservation.reservationId}>
                <p>Reservation ID: {reservation.reservationId}</p>
                <p>Start Date: {reservation.startDate}</p>
                <p>End Date: {reservation.endDate}</p>
                <p>Type: {reservation.type}</p>
                <hr/>
            </div>
        ));
    };

    return (
        <>
            <h1>Your Reservations</h1>
            <hr/>

            {renderCustomerData()}

            <button onClick={fetchData}>View your reservations</button>

            <div>
                {renderReservationData()}
            </div>
        </>
    );
};

export default YourReservations;
