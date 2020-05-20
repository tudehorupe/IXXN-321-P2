import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Nav.css";

export default function Nav() {
    return (
        <div className="nav">

        <div class="navbar">
            <Link to="/home" className="home-link link">Home</Link>
            <Link to="/about" className="about-link link">About</Link>
            <Link to="/Gallery" className="gallery-link link">Gallery</Link>
            <Link to="/Contact" className="contact-link link">Contact</Link>
        </div>

        <div class="social-links">
            <h2>FB</h2>
            <h2>IG</h2>
        </div>

        </div>



    )
}