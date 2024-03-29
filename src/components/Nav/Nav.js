import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import {AuthContext} from "../AuthProvider/AuthProvider";

const Nav = () => {
    const { isAuth, logout } = useContext(AuthContext);
    const slogan = 'Discover Bali the way you like it';

    return (
        <nav>
            <div className="nav-left">
                <span className="logo">Rental Services</span>
                <span className="slogan">{slogan}</span>
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
                <li>
                    <NavLink to="/your-reservations">Your Reservations</NavLink>
                </li>
                {isAuth ? (
                    <li>
                        <button className="button-nav" onClick={logout}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;
