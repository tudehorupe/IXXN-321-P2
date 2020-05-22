import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css";
import footer from "../../assets/footer.svg";

export default function Footer() {
    return (
        <div className="footer">

            {/* <a href="#top-link" class="our-portfolio-link">.f></a> */}


            <a href="#top-link" class="our-portfolio-link"> <img src={footer} alt="Logo" /></a>




            {/* <Link to="/home" className="return-top link">Home</Link>
            <Link to="/pageone" className="about-link link">About</Link>
            <Link to="/welcome" className="gallery-link link">Gallery</Link>
            <Link to="/welcome" className="contact-link link">Contact</Link> */}
        </div>
    )
}
