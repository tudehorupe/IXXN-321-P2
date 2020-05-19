import React from 'react';
import '../css/Home.css';
import assets from "../../assets/hydrangea-landing-image.jpg";
import ContactCard from '../../components/ContactCard';



export default function Home() {
    
    
    return (
         <div className="home-page">


            <div class="landing-section">

                <div class="landing-image-title">

                    <img class="landing-image" src={assets} alt="lgo" />

                    <div class="title">
                        <h1>Lee Wroxton</h1>
                    </div>
                </div>




            </div>


            <div class="white-page">
                <div class="red-vertical-line"></div>
                <div class="quote">
                    <h1 class="quote-mark">“</h1>
                    <h3 class="quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
            </div>
            
            <div class="green-page">
                <img class="landing-image" src={assets} alt="lgo" />
                <h2>Lee Wroxton</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


            <div class="white-page">
                <h3>quote</h3>
            </div>

            


          </div>
    )

    
}
