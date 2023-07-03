import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import Availability from '../../components/Availability/Availability';
import './ReservationPage.css';
import '../../styles/global.css';

const ReservationPage = () => {
    const [isAvailabilityChecked, setIsAvailabilityChecked] = useState(false);

    const handleAvailabilityChecked = (availabilityStatus) => {
        if (
            availabilityStatus === 'Bikes are available.' ||
            availabilityStatus === 'Car is available.'
        ) {
            setIsAvailabilityChecked(true);
        } else {
            setIsAvailabilityChecked(false);
        }
    };

    return (
        <div className="main">
            <header>
                <div className="wide-bar-reservation">
                    <div className="content1">
                        <div className="availability">
                            <Availability onAvailabilityChecked={handleAvailabilityChecked} />
                        </div>
                        {isAvailabilityChecked && (
                            <div className="reservation-form-container">
                                <ReservationForm isVisible={isAvailabilityChecked} className="form" />
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <footer className="process-container">
                <Footer />
            </footer>
        </div>
    );
};

export default ReservationPage;

