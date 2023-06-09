import React from 'react';
import './VehicleDetails.css';
import Button from "../Buttons/ButtonBookNow";
import "../../components/Buttons/ButtonBookNow.css"

const handleBookNow = () => {
    // Implementeer hier de logica voor het afhandelen van de "Book Now" actie
};

const VehicleDetails = ({image, alt, includes, title, dayPrice, weekPrice}) => {
    return (
        <div className="vehicle-details">
            <div className="flex-wrapper">
                <div className="description">
                    <h2 className="line">{title}</h2>
                    <h3>Price</h3>
                    <h4>IDR {dayPrice}</h4>
                    <p>/ Day</p>
                    <h4>IDR {weekPrice}</h4>
                    <p>/ Week</p>
                </div>

                <div className="includes">
                    <h2 className="line">Includes</h2>
                    {includes.map((item, index) => (
                        <div key={index} className="checkbox-container">
                            <div className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    id={`include-${index}`}
                                    className="included-checkbox"
                                />
                                <span className="checkbox-icon"></span>
                            </div>
                            <label htmlFor={`include-${index}`}>{item}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="image-container">
                <img src={image} alt={alt} className="vehicle-image"/>
                <Button text="Book Now" onClick={handleBookNow} />
            </div>
        </div>
    );
};

export default VehicleDetails;
