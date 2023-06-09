import React from 'react';
import './Home.css';
import Vehicles from "../../components/Vehicles/Vehicles";
import Footer from "../../components/Footer/Footer";
import BikeKnaap from "../../../../rentalapp/src/assets/BikeKnaap.webp";
import CarToyota from "../../assets/CarToyota.jpg";
import "../../styles/global.css";
import Button from "../../components/Buttons/ButtonBookNow";



const Home = () => {
    const handleBookNow = () => {
        // Implementeer hier de logica voor het afhandelen van de "Book Now" actie
    };
    return (
        <div className="main">
            <header>
                <div className="wide-bar">
                    <div className="content">
                        <h1>Bali - Rent your Bike or Driver</h1>
                        <Button text="Book Now" onClick={handleBookNow} />
                    </div>
                </div>
            </header>

            <body>
            <div className="bar-container">
                <p>Since tourists are no longer allowed to drive scooters we offer you the best next thing or maybe even
                    better! Rent your own E-fatbike to discover Bali. You do not only help saving the planet, but it
                    also is a great alternative to discover Bali at your own pace, with minimal effort and without the
                    disturbing noise of the engine.</p> <br />
                <p>Not in the mood to cycle or prefer to cover bigger distances, rent our driver with car, not only do
                    you get the best local tips, but you also travel with great comfort.</p><br/>
                <h2>Experience the ultimate feeling of freedom!</h2>
                <Button text="Book Now" onClick={handleBookNow} />
            </div>

            <div className="process-container">
                <h2>This is how it works:</h2>
                <div className="checkboxes">
                    <div className="checkbox-item">
                        <input type="checkbox" id="availability" name="availability"/>
                        <label htmlFor="availability">Check availability</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox" id="booking" name="booking"/>
                        <label htmlFor="booking">Book your service</label>
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox" id="payment" name="payment"/>
                        <label htmlFor="payment">Choose your payment method</label>
                    </div>
                </div>
            </div>

            <div className="columns-container">
                <div className="column">
                    <h1>Knaap e-bike</h1>
                    <h3>Price</h3>
                    <h2>IDR 70K</h2>
                    <p>/ Day</p>
                    <h2>IDR 400.000</h2>
                    <p>/ Week</p>
                    <Vehicles
                        image={BikeKnaap}
                        alt="Electric Bike"
                        includes={[
                            "Rain coat",
                            "Road assistance",
                            "Holds up to two persons and one child"
                        ]}
                    />
                </div>
                <div className="column">
                    <h1>Private Driver</h1>
                    <h3>Price</h3>
                    <h2>IDR 500K</h2>
                    <p>/ Day</p>
                    <h2>IDR 2.000.000</h2>
                    <p>/ Week</p>
                    <div className="white-space">
                        <Vehicles
                            image={CarToyota}
                            alt="Car Toyota"
                            includes={[
                                "Group of 4 persons or less",
                                "6 hours tour with Balinese driver",
                                "Unlimited mileage"
                            ]}
                        />
                    </div>
                </div>
            </div>
            </body>

            <footer className="process-container">
                <Footer/>

            </footer>
        </div>


    )
        ;
};

export default Home;