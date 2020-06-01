import React from 'react';
import '../css/About.css';
import RandomShape from "../../components/js/randomShapes";

import hydrangeaInField from "../../assets/hydrangeaInField.jpg";
import inShopTwo from "../../assets/inShopTwo.jpg";
import inShopThree from "../../assets/inShopThree.jpg";
import pinkBuds from "../../assets/pinkBuds.jpg";

export default function Home() {
    
    return (
         <div className="about-page">

            <div class="landing-section">

                <RandomShape top="102px" left="-5%" shape={3} />
                <RandomShape top="250px" left="95%" shape={4} />
                <RandomShape bottom="-10vh" left="96%" shape={2} />
                <RandomShape bottom="15vh" left="40%" shape={4} />
                <RandomShape top="185vh" left="-2%" shape={1} />
                <RandomShape bottom="-290vh" left="90%" shape={3} />
                <RandomShape top="87vh" left="65%" shape={2} />
                <RandomShape bottom="-405vh" left="75%" shape={2} />
                <RandomShape bottom="-440vh" left="6%" shape={4} />


                <section class="about-landing">
                    <div class="hero">
                        <img class="about-image" src={hydrangeaInField} alt="Hydrangeas in the field" width="400" height="300" />
                        <h1 class="page-name">About</h1>
                        <div class="slider"></div>
                    </div>
                </section>

            </div>


            <div class="about-white-page">
                <section class="white-body">
                    <div class="white-body-text">
                        <h2>Who we are</h2>
                        <div class="white-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img class="white-body-image" src={inShopTwo} alt="Two workers of Lee Wroxton wrapping a bouquet" />

                </section>
            </div>
            
            <div class="home-green-page">
                <section class="green-body">
                    <img class="green-body-image" src={inShopThree} alt="Close up of stock with worker blurred in the background" />
                    <div class="green-body-text">
                        <h2>Our Ethics</h2>
                        <div class="green-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section>
            </div>

            <div class="about-white-page">
                <section class="white-body">
                    <div class="white-body-text">
                        <h2>What we do</h2>
                        <div class="white-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img class="white-body-image" src={pinkBuds} alt="Bunch of pink peony buds" />

                </section>
            </div>

          </div>
    )

    
}
