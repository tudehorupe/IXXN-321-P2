import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import "../css/Nav.css";

export default function Nav() {
    return (
        <div className="navigation">

                <div className="navbar">
                    <NavLink to="/home" href="#top-link" activeClassName="active" className="home-link link">Home</NavLink>
                    <NavLink to="/about" href="#top-link" activeClassName="active" className="about-link link">About</NavLink>
                    <NavLink to="/Gallery" href="#top-link" className="gallery-link link">Gallery</NavLink>
                    <NavLink to="/Contact" href="#top-link" className="contact-link link">Contact</NavLink>
                </div>

        </div>
    )
}