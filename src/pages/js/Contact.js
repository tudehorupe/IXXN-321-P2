import React from 'react';
import '../css/Contact.css';
import contactLanding from "../../assets/contactLanding.jpg";

import hydrangeaInField from "../../assets/hydrangeaInField.jpg";
import arrowtownMap from "../../assets/arrowtownMap.jpg";
import shopFront from "../../assets/shopFront.jpg";

import redFb from "../../assets/redFb.svg";
import redIg from "../../assets/redIg.svg";

import hydrangeaCloseUp from "../../assets/hydrangeaCloseUp.jpg";


import ContactCard from '../../components/ContactCard';

import data from "../../data/bodyContent.json";



export default function Home() {
    
    
    return (
         <div className="about-page">



            <div class="landing-section">


            <section class="pages-landing">
                <div class="hero">
                    <img class="about-image" src={contactLanding} alt="lgo" width="400" height="300" />
                    <h1 class="page-name">Contact</h1>
				    <div class="slider"></div>
                </div>
            </section>

            </div>


            <div class="contact-white-page">
                <section class="white-body">
                    <div class="contact-white-body-text">
                        <h2>Talk to us</h2>
                        <div class="white-body-bar"></div>
                        <h3>Lee Wroxton</h3>

                        <br></br>
                        <h4>Location</h4>
                        <p>33 Ramshaw Lane</p>
                        <p>Arrowtown, Otago</p>

                        <br></br>
                        <h4>Contact</h4>
                        <p>enquiries@leewroxton.co.nz</p>
                        <p>+64 3 651 0280</p>

                    </div>
                    <img class="white-body-image" src={arrowtownMap} alt="lgo" />

                </section>
            </div>

            
            <div class="contact-green-page">
                <section class="green-body">
                    <img class="green-body-image" src={shopFront} alt="lgo" />
                    <div class="green-body-text">
                        <h2>Hours</h2>
                        <div class="green-body-bar"></div>
                        <div class="contact-hours">
                            <p class="contact-day">Monday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div class="contact-hours">
                            <p class="contact-day">Tuesday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div class="contact-hours">
                            <p class="contact-day">Wednesday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div class="contact-hours">
                            <p class="contact-day">Thursday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div class="contact-hours">
                            <p class="contact-day">Friday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div class="contact-hours">
                            <p class="contact-day">Saturday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">8:00 am - 4:00 pm</p>
                        </div>
                        <div class="contact-hours">
                            <p class="contact-day">Sunday</p>
                            <p class="contact-spacer">-</p>
                            <p class="contact-time">closed</p>
                        </div>

                        
                    </div>
                </section>
            </div>


            <div class="white-page">
                <section class="contact-white-body">
                    <h2>Lee Wroxton</h2>
                    <div class="contact-white-body-bar"></div>
                    <h3>Find us on</h3>

                <div class="contact-social-links">
                    <div>
                        <a href="https://www.facebook.com/" target="_blank"><img src={redFb} alt="Facebook Logo" /></a>
                        <p>Facebook</p>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/" target="_blank"> <img src={redIg} alt="Instagram Logo" /></a>
                        <p>Instagram</p>

                    </div>

                </div>


                </section>
            </div>


            


          </div>
    )

    
}
