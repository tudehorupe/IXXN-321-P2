import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import "../css/Nav.css";
import DynamicScrollToTop from "./DynamicScrollToTop";

import fb from "../../assets/fb-logo.svg";
import ig from "../../assets/ig.svg";
import downArrow from "../../assets/down-arrow.svg";


export default function Nav() {
    return (
        <div className="navigation">


            {/* <DynamicScrollToTop /> */}




        <div class="navbar">
            <NavLink to="/home" href="#top-link" activeClassName="active" className="home-link link">Home</NavLink>
            <NavLink to="/about" href="#top-link" activeClassName="active" className="about-link link">About</NavLink>
            <NavLink to="/Gallery" href="#top-link" className="gallery-link link">Gallery</NavLink>
            <NavLink to="/Contact" href="#top-link" className="contact-link link">Contact</NavLink>
        </div>

        {/* <a href="#top-link" class="our-portfolio-link"> <img src={footer} alt="Logo" /></a> */}


        {/* <div class="social-links">

            <div class="link-down-page">
                <a href="#link-down-page"><img src={downArrow} alt="Arrow pointing down the page" /></a>
            </div>
            <a href="https://www.facebook.com/" target="_blank"><img src={fb} alt="Facebook Logo" /></a>
            <a href="https://www.instagram.com/" target="_blank"> <img src={ig} alt="Instagram Logo" /></a>

        </div> */}

        

        </div>



    )
}