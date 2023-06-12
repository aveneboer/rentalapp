import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ReservationForm from "../../components/ReservationForm/ReservationForm";

const ReservationPage = () => {
    const [showPage, setShowPage] = useState(false);

    const handleBookNowClick = () => {
        setShowPage(true);
    };

    if (!showPage) {
        return (
            <div>
                <button onClick={handleBookNowClick}>Book Now</button>
            </div>
        );
    }

    return (
        <>
            <div className="main">
                <header>
                    <div className="background"></div>
                    <ReservationForm />
                </header>

                <body></body>

                <footer className="process-container">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default ReservationPage;
