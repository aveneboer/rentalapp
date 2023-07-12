import React from 'react';
import './PrivateDriver.css';
import "../../styles/global.css";
import LocalDriver from "../../assets/LocalDriver.jpg";
import VehicleDetails from "../../components/Vehicles/VehicleDetails";
import Footer from "../../components/Footer/Footer";
import CarToyota from "../../assets/CarToyota.jpg";
import Button from "../../components/Buttons/ButtonBookNow";
import "../../components/Vehicles/VehicleDetails.css";
import "../../components/Buttons/ButtonBookNow.css";



const PrivateDriver = () => {

    return (
        <>

            <div className="main">
                <header>
                    <div className="background">
                        <div className="white-bar">
                            <div className="column1">
                                <div className="image-box">
                                <img src={LocalDriver} alt="Local driver"/>
                            </div>
                            </div>
                            <div className="column2">
                                <h3>Book your own Balinese personal driver</h3>
                                <ul>
                                    <li>He can tell you everything about the culture, food, temples and rituals.</li>
                                    <li>He knows the secret spots.</li>
                                    <li>He is familiar with the traffic and driving customs.</li>
                                    <li>You can enjoy stunning views whilst he is driving.</li>
                                    <li>You can sit back, relax and enjoy your ride.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="column" style={{margin: '20px'}}>
                    <VehicleDetails
                        title={"Private driver"}
                        dayPrice={"800K"}
                        weekPrice={"4000K"}
                        image={CarToyota}
                        alt="Car Toyota"
                        includes={[
                            "Group of 4 persons or less",
                            "6 hours tour with Balinese driver",
                            "Unlimited mileage"
                        ]}
                    >
                        <Button />
                    </VehicleDetails>

                </div>


                <footer className="process-container">
                    <Footer/>
                </footer>
            </div>
        </>
    );
};

export default PrivateDriver;