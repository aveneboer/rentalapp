import React, { useEffect } from 'react';
import './vehicles.css';

function Vehicles(props) {
    useEffect(() => {
        const checkboxes = document.querySelectorAll('.included-checkbox');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true;
            checkbox.parentNode.classList.add('checked');
            checkbox.addEventListener('click', () => {
                checkbox.checked = true;
            });
        });
    }, []);

    return (
        <div className="vehicle">
            <img src={props.image} alt={props.alt} />
            <div className="includes">
                <h1>Includes</h1>
                {props.includes.map((item, index) => (
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
    );
}

export default Vehicles;
