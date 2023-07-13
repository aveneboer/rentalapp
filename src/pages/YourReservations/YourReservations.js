import React, {useState} from 'react';
import axios from 'axios';
import Footer from "../../components/Footer/Footer";
import './YourReservations.css';

const YourReservations = () => {
    const [lastName, setLastName] = useState('');
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');

        axios
            .get(`http://localhost:8080/customers/customer/${lastName}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setCustomer(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error occurred while fetching customer:', error);
                setError('Failed to fetch customer, please contact us.');
                setLoading(false);
            });

        setLastName('');
    };

    return (
        <div className="main">
            <header>
                <div className="background">
                    <div className="white-bar">
                        {customer ? (
                            <>
                                <h3 className="reservation-heading">
                                    {`Reservations for ${customer.firstName} ${customer.lastName}`}
                                </h3>
                                <div className="reservation-details column2">
                                    <h3>Customer Details:</h3>
                                    <div className="customer-info">
                                        <p>First Name: {customer.firstName}</p>
                                        <p>Last Name: {customer.lastName}</p>
                                        <p>Phone Number: {customer.phoneNo}</p>
                                        <p>Email: {customer.email}</p>
                                        <p>Address: {customer.address}</p>
                                        {customer.driverLicense && (
                                            <p>Driver License ID: {customer.driverLicense.id}</p>
                                        )}
                                    </div>

                                    {customer.reservations.length > 0 ? (
                                        <>
                                            <h3>Reservations:</h3>
                                            <ul className="reservation-list">
                                                {customer.reservations.map((reservation) => (
                                                    <li key={reservation.reservationId}>
                                                        <p>Reservation ID: {reservation.reservationId}</p>
                                                        <p>Start Date: {reservation.startDate}</p>
                                                        <p>End Date: {reservation.endDate}</p>
                                                        <p>Type: {reservation.type}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <p>No reservations found.</p>
                                    )}
                                </div>
                            </>
                        ) : (
                            <> <div className="column1">
                                <h3>Your Reservations</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>{error}</p>
                                ) : null}
                            </div>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <footer className="process-container">
                <Footer/>
            </footer>
        </div>
    );
};


export default YourReservations;
