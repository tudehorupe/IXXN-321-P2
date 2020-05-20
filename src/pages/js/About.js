import React from 'react';
import '../css/About.css';
import assets from "../../assets/hydrangea-about-image.jpg";
import ContactCard from '../../components/ContactCard';



export default function Home() {
    
    
    return (
         <div className="about-page">



            <div class="landing-section">


            <section class="about-landing">
                <div class="hero">
                    <img class="about-image" src={assets} alt="lgo" width="400" height="300" />
                    <h1 class="page-name">About</h1>
				    <div class="slider"></div>
                </div>
            </section>

            </div>


            <div class="white-page">
                <div class="red-vertical-line"></div>
                <div class="quote">
                    <h1 class="quote-mark">“</h1>
                    <h3 class="quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
            </div>
            
            <div class="green-page">
                <img class="home-landing-image" src={assets} alt="lgo" />
                <h2>Lee Wroxton</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


            <div class="white-page">
                <h3>quote</h3>
                

                <div class="about-landing-section">
                <img class="about-image" src={assets} alt="lgo" width="400" height="300" />

                    <div class="about-title">
                        <h1>About</h1>
                    </div>

            </div>
            </div>

            


          </div>
    )

    
}
