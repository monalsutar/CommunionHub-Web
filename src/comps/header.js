import React,{ useState } from "react";
import './all.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

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
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item">Events</a>
                <a href="#" className="nav-item">Contact Us</a>
            </nav>
        </header>
    );
}

export default Header;