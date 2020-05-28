import React from 'react';
import '../css/Gallery.css';
import galleryLanding from "../../assets/galleryLanding.jpg";
import paleRoses from "../../assets/paleRoses.jpg";
import hydrangeaCloseUp from "../../assets/hydrangeaCloseUp.jpg";
import pinkWhiteRoses from "../../assets/pinkWhiteRoses.jpg";
import colouredBunch from "../../assets/colouredBunch.jpg";
import pinkBuds from "../../assets/pinkBuds.jpg";
import driedRoses from "../../assets/driedRoses.jpg";


import ContactCard from '../../components/ContactCard';



export default function Gallery() {
    
    
    return (
         <div className="about-page">



            <div class="landing-section">


            <section class="about-landing">
                <div class="hero">
                    <img class="about-image" src={galleryLanding} alt="lgo" width="400" height="300" />
                    <h1 class="page-name">Gallery</h1>
				    <div class="slider"></div>
                </div>
            </section>

            </div>



            {/* <div class="white-page"> */}


            <div class="gallery-white-page">
                <section class="gallery-white-body">
                    <div class="left-gallery">

                            <div class="gallery-body-text">
                                <h2>Scroll to view</h2>
                                <div class="white-body-bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div class="this">
                            <img class="gallery-image" src={hydrangeaCloseUp} alt="lgo" />
                            <div class="gallery-hover-overlay"></div>
                            </div>

                            <div class="this">
                            <img class="gallery-image" src={colouredBunch} alt="lgo" />
                            <div class="gallery-hover-overlay"></div>
                            </div>

                            <img class="gallery-image" src={driedRoses} alt="lgo" />

                            
                    </div>



                    <div class="right-gallery">
                        <img class="gallery-image" src={paleRoses} alt="lgo" />
                        <img class="gallery-image" src={pinkWhiteRoses} alt="lgo" />
                        <img class="gallery-image" src={pinkBuds} alt="lgo" />




                    </div>

                </section>
            </div>

            {/* <div class="gallery-white-page">
                <section class="gallery-body">
                    <div class="white-body-text">
                        <h2>Scroll to view</h2>
                        <div class="white-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img class="gallery-body-image" src={paleRoses} alt="lgo" />


                </section>
            </div> */}
            
            

            


          </div>
    )

    
}
