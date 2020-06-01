import React from 'react';
import '../css/Contact.css';
import RandomShape from "../../components/js/randomShapes";


import contactLanding from "../../assets/contactLanding.jpg";
import arrowtownMap from "../../assets/arrowtownMap.jpg";
import shopFront from "../../assets/shopFront.jpg";
import redFb from "../../assets/redFb.svg";
import redIg from "../../assets/redIg.svg";

export default function Home() {
    
    return (
         <div className="about-page">

            <div className="landing-section">

                <RandomShape top="80vh" left="85vw" shape={4} />
                <RandomShape top="120vh" left="-10%" shape={3} />
                <RandomShape top="195vh" left="90%" shape={1} />
                <RandomShape top="270vh" left="3%" shape={4} />
                <RandomShape top="365vh" left="-3%" shape={1} />
                <RandomShape top="310vh" left="85%" shape={2} />
                <RandomShape top="410vh" left="85%" shape={3} />


                <section className="pages-landing">
                    <div className="hero">
                        <img className="about-image" src={contactLanding} alt="Close up of a bunch from Lee Wroxton" width="400" height="300" />
                        <h1 className="page-name">Contact</h1>
                        <div className="slider"></div>
                    </div>
                </section>

            </div>


            <div className="contact-white-page">
                <section className="white-body">
                    <div className="contact-white-body-text">
                        <h2>Talk to us</h2>
                        <div className="white-body-bar"></div>
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
                    <img className="white-body-image" src={arrowtownMap} alt="Map of where Lee Wroxton is in Arrowtown, Otago" />

                </section>
            </div>

            
            <div className="contact-green-page">
                <section className="green-body">
                    <img className="green-body-image" src={shopFront} alt="Shop front of Lee Wroxton with various bunches and bouquets out front" />
                    <div className="green-body-text">
                        <h2>Hours</h2>
                        <div className="green-body-bar"></div>
                        <div className="contact-hours">
                            <p className="contact-day">Monday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div className="contact-hours">
                            <p className="contact-day">Tuesday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div className="contact-hours">
                            <p className="contact-day">Wednesday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div className="contact-hours">
                            <p className="contact-day">Thursday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div className="contact-hours">
                            <p className="contact-day">Friday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">8:00 am - 5:00 pm</p>
                        </div>
                        <div className="contact-hours">
                            <p className="contact-day">Saturday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">8:00 am - 4:00 pm</p>
                        </div>
                        <div className="contact-hours">
                            <p className="contact-day">Sunday</p>
                            <p className="contact-spacer">-</p>
                            <p className="contact-time">closed</p>
                        </div>

                    </div>
                </section>
            </div>

            <div className="white-page">
                <section className="contact-white-body">
                    <h2>Lee Wroxton</h2>
                    <div className="contact-white-body-bar"></div>
                    <h3>Find us on</h3>

                    <div className="contact-social-links">
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
