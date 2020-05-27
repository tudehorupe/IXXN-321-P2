import React from 'react';
import '../css/Home.css';
import hydrangeaCloseUp from "../../assets/hydrangeaCloseUp.jpg";
import galleryShortcut from "../../assets/pinkWhiteRoses.jpg";
import contactUsShortcut from "../../assets/contactUsShortcut.jpg";

import ContactCard from '../../components/ContactCard';
import data from "../../data/bodyContent.json";



export default function Home() {
    
    
    return (
         <div className="home-page">


            <div class="landing-section">


                <section class="home-landing">
                    <div class="home-hero">
                        <img class="home-image" src={hydrangeaCloseUp} alt="lgo" width="400" height="300" />
                        <h1 class="home-page-name">Lee Wroxton</h1>
                        <div class="slider"></div>
                    </div>
                </section>

                {/* <div class="landing-image-title">

                    <img class="home-landing-image" src={assets} alt="lgo" />

                    <div class="title">
                        <h1>Lee Wroxton</h1>
                    </div>
                </div> */}
            </div>




            {/* <section id="link-down-page"></section> */}

            <div class="white-page">
                <div class="red-vertical-line"></div>
                <div class="quote">
                    <h1 class="quote-mark">“</h1>
                    <h3 class="quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
            </div>
            
            <div class="green-page">
                <section class="green-body">
                    <img class="green-body-image" src={hydrangeaCloseUp} alt="lgo" />
                    <div class="green-body-text">
                        <h2>Lee Wroxton</h2>
                        <div class="green-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section>
            </div>


            {/* <div class="white-page">
                <h3>quote</h3>
                <ContactCard />

                {data.Employees.map(i => <ContactCard firstName={i.firstName} lastName={i.lastName} />)}
            </div> */}
            <div class="white-page">
                <section class="shortcut-white-body">
                    <div class="gallery-shortcut">
                        <div class="hover-shortcuts">
                            <img class="gallery-shortcut-image" src={galleryShortcut} alt="lgo" />
                            <div class="shortcuts-hover-overlay"></div>

                            </div>
                            <div class="white-shortcut-body-text">
                                <h2>Gallery</h2>
                                <div class="shortcut-body-bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                    </div>



                    <div class="contact-shortcut">
                        <img class="contact-shortcut-image" src={contactUsShortcut} alt="lgo" />

                        <div class="white-shortcut-body-text">
                            <h2>Contact</h2>
                            <div class="shortcut-body-bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                </section>
            </div>

            


          </div>
    )

    
}
