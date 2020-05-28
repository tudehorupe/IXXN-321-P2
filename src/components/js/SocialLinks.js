import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import "../css/Nav.css";

import fb from "../../assets/fb-logo.svg";
import ig from "../../assets/ig.svg";
import downArrow from "../../assets/down-arrow.svg";


export default function Nav() {
    return (
        <div className="">

        {/* <div class="navbar">
            <NavLink to="/home" activeClassName="active" className="home-link link">Home</NavLink>
            <NavLink to="/about" activeClassName="active" className="about-link link">About</NavLink>
            <NavLink to="/Gallery" className="gallery-link link">Gallery</NavLink>
            <NavLink to="/Contact" className="contact-link link">Contact</NavLink>
        </div> */}

        <div class="link-down-page">
            <a href="#link-down-page"><img src={downArrow} alt="Arrow pointing down the page" /></a>
        </div>

        <div class="social-links">
            <a href="https://www.facebook.com/" target="_blank"><img src={fb} alt="Facebook Logo" /></a>
            <a href="https://www.instagram.com/" target="_blank"> <img src={ig} alt="Instagram Logo" /></a>
        </div>

        

        </div>



    )
}