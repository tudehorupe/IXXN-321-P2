import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css";

export default function Footer() {
    return (
        <div className="footer">
			<a href="#top-link">Return to top</a>

            {/* <Link to="/home" className="return-top link">Home</Link>
            <Link to="/pageone" className="about-link link">About</Link>
            <Link to="/welcome" className="gallery-link link">Gallery</Link>
            <Link to="/welcome" className="contact-link link">Contact</Link> */}
        </div>
    )
}
