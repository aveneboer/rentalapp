import React from 'react';
import './Bikes.css'
import Footer from "../../components/Footer/Footer";
import BikeKnaap from "../../../../rentalapp/src/assets/BikeKnaap.webp";
import VehicleDetails from "../../components/Vehicles/VehicleDetails";
import "../../styles/global.css";
import "../../components/Buttons/ButtonBookNow.js";
import Button from "../../components/Buttons/ButtonBookNow";
import "../../components/Vehicles/VehicleDetails.css";

const Bikes = () => {
    const handleBookNow = () => {
        // Implementeer hier de logica voor het afhandelen van de "Book Now" actie
    };
    return (
        <div className="main">
            <header>
                <div className="background">
                    <div className="white-bar">
                        <div className="column1">
                            <h4>One size, one model, fits all...</h4>

                            <img src={BikeKnaap} alt="Bike"/>
                        </div>
                        <div className="column2">
                            <p>Tough & Robust - the Knaap Fatbike, an electric fat bike from Dutch soil, has a tough
                                look and a comfortable riding position with its Black Edition version and thick
                                aluminum frame.</p>
                            <p>
                                The E-bike gives you the ultimate feeling of freedom, because this fat bike has a
                                great range of up to 140 kilometers*. As a result, you will never suffer from range
                                anxiety with this fat bike.</p>

                            <p> This fat bike is sustainable because it produces no emissions, due to the pedaling
                                system and the electric drive. This way you can quickly cover large distances in an
                                environmentally friendly way. The fat bike itself has a weight of 30 kg, but can
                                carry a weight of up to 180 kg.</p>
                            <p>
                                This Knaap electric fat bike drives up to 25 km/h, so you can ride on the bike path
                                without a helmet. A registration number and liability insurance are not required. So
                                you, but also your children can ride this cool bike without any problems.</p>
                        </div>
                    </div>
                </div>
            </header>
            <body>
            <div className="column" style={{margin: '20px'}}>
                <VehicleDetails
                    image={BikeKnaap}
                    alt="Electric Bike"
                    title={"Knaap e-bike"}
                    dayPrice={"70K"}
                    weekPrice={"400K"}
                    includes={[
                        "Rain coat",
                        "Road assistance",
                        "Holds up to two persons and one child"
                    ]}
                >
                    <Button text="Book Now" onClick={handleBookNow} />
                </VehicleDetails>
            </div>

            </body>


            <footer className="process-container">
                <Footer/>
            </footer>
        </div>
    );
};

export default Bikes;