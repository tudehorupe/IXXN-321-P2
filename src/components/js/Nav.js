import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Nav.css";

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/home" className="home-link link">Home</Link>
            <Link to="/pageone" className="about-link link">About</Link>
            <Link to="/welcome" className="gallery-link link">Gallery</Link>
            <Link to="/welcome" className="contact-link link">Contact</Link>
        </div>
    )
}