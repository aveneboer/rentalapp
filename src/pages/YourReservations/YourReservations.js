import React from 'react';

import Footer from "../../components/Footer/Footer";

const YourReservations = () => {


    return (
        <div className="main">
            <header>
                <div className="background">
                    <div className="white-bar">
                        <h2>Your Reservations</h2>

                        ) : (
                            <p>No reservations found.</p>
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
