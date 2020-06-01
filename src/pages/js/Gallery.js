import React from 'react';
import '../css/Gallery.css';
import RandomShape from "../../components/js/randomShapes";


import galleryLanding from "../../assets/galleryLanding.jpg";
import paleRoses from "../../assets/paleRoses.jpg";
import hydrangeaCloseUp from "../../assets/hydrangeaCloseUp.jpg";
import pinkWhiteRoses from "../../assets/pinkWhiteRoses.jpg";
import colouredBunch from "../../assets/colouredBunch.jpg";
import pinkBuds from "../../assets/pinkBuds.jpg";
import driedRoses from "../../assets/driedRoses.jpg";


export default function Gallery() {
    
    return (
         <div className="about-page">

            <div className="landing-section">

                <RandomShape top="102px" left="90%" shape={1} />
                <RandomShape top="82vh" left="7%" shape={2} />
                <RandomShape top="170vh" left="95%" shape={3} />
                <RandomShape top="230vh" left="38%" shape={4} />
                <RandomShape top="330vh" left="3%" shape={1} />
                <RandomShape top="280vh" left="92%" shape={2} />
                <RandomShape top="410vh" left="85%" shape={1} />
                <RandomShape top="440vh" left="15%" shape={3} />
                <RandomShape top="490vh" left="65%" shape={4} />

                <section className="about-landing">
                    <div className="hero">
                        <img className="about-image" src={galleryLanding} width="400" height="300" 
                        alt="close up of a bouquet made at Lee Wroxton"/>
                        <h1 className="page-name">Gallery</h1>
                        <div className="slider"></div>
                    </div>
                </section>
            </div>


            <div className="gallery-white-page">
                <section className="gallery-white-body">
                    <div className="left-gallery">

                        <div className="gallery-body-text">
                            <h2>Scroll to view</h2>
                            <div className="white-body-bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="container-outer">
                            <div className="container">
                                <img className="g-image" src={hydrangeaCloseUp} alt="Hydrangea bunch close up" />
                                <div className="g-h-overlay">
                                    <div className="text">
                                        <h2>Hydrangea bunch</h2>
                                        <div className="gallery-hover-bar"></div>
                                        <h4>$20.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-outer">
                            <div className="container">
                                <img className="g-image" src={colouredBunch} alt="Winter bouquet of flowers and berries" />
                                <div className="g-h-overlay">
                                    <div className="text">
                                        <h2>Winter bouquet</h2>
                                        <div className="gallery-hover-bar"></div>
                                      <h4>$60.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-outer">
                            <div className="container">
                                <img className="g-image" src={driedRoses} alt="Dried roses bunch" />
                                <div className="g-h-overlay">
                                    <div className="text">
                                        <h2>Dried roses bunch</h2>
                                        <div className="gallery-hover-bar"></div>
                                        <h4>$25.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="right-gallery">

                        <div className="container-outer">
                            <div className="container">
                                <img className="g-image" src={paleRoses} alt="Mixed variation bouquet" />
                                <div className="g-h-overlay">
                                    <div className="text">
                                        <h2>Mixed variation bouquet</h2>
                                        <div className="gallery-hover-bar"></div>
                                        <h4>$65.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-outer">
                            <div className="container">
                                <img className="g-image" src={pinkWhiteRoses} alt="Mixed roses bouquet" />
                                <div className="g-h-overlay">
                                    <div className="text">
                                        <h2>Mixed roses bouquet</h2>
                                        <div className="gallery-hover-bar"></div>
                                        <h4>$40.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                        <div className="container-outer">
                            <div className="container">
                                <img className="g-image" src={pinkBuds} alt="Bunch of pink peony buds" />
                                <div className="g-h-overlay">
                                    <div className="text">
                                        <h2>Pink peony bunch</h2>
                                        <div className="gallery-hover-bar"></div>
                                        <h4>$15.00</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

          </div>
    )

    
}
