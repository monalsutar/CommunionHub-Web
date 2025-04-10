import React, { useState } from "react";
import './header.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu hidden by default

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <header>
            <img src={logo} alt="Logo" />
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/" className="nav-item">About</Link>
                <Link to="/events" className="nav-item">Events</Link>
                <Link to="/contact" className="nav-item">Contact Us</Link>
            </nav>

            <div className="header-right">
                <Link to="/login" className="sign-in-button">Sign In</Link>
            </div>
        </header>
    );
}

export default Header;