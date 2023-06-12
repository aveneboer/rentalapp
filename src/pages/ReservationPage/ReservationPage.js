import React from 'react';
import Footer from '../../components/Footer/Footer';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import './ReservationPage.css';
import '../../styles/global.css';

const ReservationPage = () => {
    return (
        <div className="main">
            <header>
                <div className="wide-bar">
                    <div className="content">
                <ReservationForm className="form"/>
                    </div>
                </div>
            </header>

            <body></body>

            <footer className="process-container">
                <Footer />
            </footer>
        </div>
    );
};

export default ReservationPage;
