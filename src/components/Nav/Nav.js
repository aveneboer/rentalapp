import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = ({ isAuthenticated, handleLogout }) => {
    const slogan = "Discover Bali the way you like it";

    return (
        <nav>
            <div className="nav-left">
                <span className="logo">Rental Services</span>
                <span className="slogan">{ slogan }</span>
            </div>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bikes">Bikes</NavLink>
                </li>
                <li>
                    <NavLink to="/private-driver">Private Driver</NavLink>
                </li>
                {isAuthenticated && (
                    <li>
                        <NavLink to="/your-reservations">Your Reservations</NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/location">Location</NavLink>
                </li>
                {!isAuthenticated ? (
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                ) : (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;

