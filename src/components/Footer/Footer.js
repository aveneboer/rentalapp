import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer-container">
            <div>
                <h1>Contact us:</h1>
            </div>
            <div className="contact-info">
                <div className="icon-container">
                    <span className="icon">&#x2709;</span>
                    <p>Email: info@rentalservices.com</p>
                </div>
                <div className="icon-container">
                    <span className="icon">&#x260E;</span>
                    <p>Phone: +62 51448635154</p>
                </div>
                <div className="icon-container">
                    <span className="icon3">&#x2302;</span>
                    <p>
                        Jl. Gurung Seminyak
                        <br />
                        Padang Semanin Kelod
                        <br />
                        Denpasar Barat
                        <br />
                        Bali - Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;