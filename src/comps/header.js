import React from "react";
import './all.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <header>

                <img src={logo} />

                <h4><Link to="/home" className="nav-item">Home</Link></h4>
                <h4><Link to="/home"className="nav-item">About</Link></h4>
                <h4><Link to="/explore"className="nav-item">Events</Link></h4>
                <h4><Link to="/home"className="nav-item">Contact Us</Link></h4>


            </header>
            <div className="signup">
                <h4>Sign Up</h4>
            </div>
        </div>
    );
}

export default Header;