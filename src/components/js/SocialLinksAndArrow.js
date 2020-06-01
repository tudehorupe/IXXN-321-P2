import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import "../css/SocialLinksAndArrow.css";

import fb from "../../assets/fb-logo.svg";
import ig from "../../assets/ig-logo.svg";
import downArrow from "../../assets/down-arrow.svg";


export default function Nav() {
    return (
        <div className="">

            <div className="link-down-page">
                <a href="#link-down-page"><img src={downArrow} alt="Arrow pointing down the page" /></a>
            </div>

            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank"><img src={fb} alt="Facebook Logo" /></a>
                <a href="https://www.instagram.com/" target="_blank"> <img src={ig} alt="Instagram Logo" /></a>
            </div>

        </div>

    )
}