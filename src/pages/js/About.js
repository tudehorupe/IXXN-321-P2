import React from 'react';
import '../css/About.css';
import hydrangeaInField from "../../assets/hydrangeaInField.jpg";
import inShopTwo from "../../assets/inShopTwo.jpg";
import inShopThree from "../../assets/inShopThree.jpg";
import pinkBuds from "../../assets/pinkBuds.jpg";


import ContactCard from '../../components/ContactCard';

import data from "../../data/bodyContent.json";



export default function Home() {
    
    
    return (
         <div className="about-page">



            <div class="landing-section">


            <section class="about-landing">
                <div class="hero">
                    <img class="about-image" src={hydrangeaInField} alt="lgo" width="400" height="300" />
                    <h1 class="page-name">About</h1>
				    <div class="slider"></div>
                </div>
            </section>

            </div>


            <div class="white-page">
                <section class="white-body">
                    <div class="white-body-text">
                        <h2>Who we are</h2>
                        <div class="white-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img class="white-body-image" src={inShopTwo} alt="lgo" />

                </section>
            </div>
            
            <div class="green-page">
                <section class="green-body">
                    <img class="green-body-image" src={inShopThree} alt="lgo" />
                    <div class="green-body-text">
                        <h2>Our Ethics</h2>
                        <div class="green-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section>
            </div>

            <div class="white-page">
                <section class="white-body">
                    <div class="white-body-text">
                        <h2>What we do</h2>
                        <div class="white-body-bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img class="white-body-image" src={pinkBuds} alt="lgo" />

                </section>
            </div>


{/* 
                        <div class="white-page">
                <h3>quote</h3>
                <ContactCard />

                {data.GreenSection.map(i => <ContactCard userImg={i.userImg} lastName={i.lastName} />)}
            </div> */}

            


          </div>
    )

    
}
