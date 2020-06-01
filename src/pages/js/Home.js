import React from "react";
import "../css/Home.css";
import { NavLink } from "react-router-dom";

import RandomShape from "../../components/js/randomShapes";
import hydrangeaCloseUp from "../../assets/hydrangeaCloseUp.jpg";
import inShopOne from "../../assets/inShopOne.jpg";

import galleryShortcut from "../../assets/pinkWhiteRoses.jpg";
import contactUsShortcut from "../../assets/contactUsShortcut.jpg";

export default function Home() {
  return (
    <div className="home-page">
      <div className="landing-section">
        <section className="home-landing">
          <img
            className="home-image"
            src={hydrangeaCloseUp}
            alt="Hydrangea bunch close up"
            width="400"
            height="300"
          />
          <h1 className="home-page-name">Lee Wroxton</h1>
        </section>
      </div>

      <div className="quote-white-page">
        <RandomShape top="-80px" left="-5%" shape={1} />
        <RandomShape top="-400px" left="95%" shape={2} />
        <RandomShape bottom="-110vh" left="96%" shape={4} />
        <RandomShape bottom="-85vh" left="20%" shape={3} />
        <RandomShape bottom="-180vh" left="-4%" shape={2} />
        <RandomShape bottom="-325vh" left="90%" shape={1} />
        <RandomShape bottom="-250vh" left="38%" shape={2} />
        <RandomShape bottom="-347vh" left="-1%" shape={4} />

        <div className="red-vertical-line"></div>
        <div className="quote">
          <h1 className="quote-mark">“</h1>
          <h3 className="quote-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
      </div>

      <div className="home-green-page">
        <section className="green-body">
          <img className="green-body-image" src={inShopOne} alt="Florist at Lee Wroxton working behind the shop counter" />
          <div className="green-body-text">
            <h2>Lee Wroxton</h2>
            <div className="green-body-bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </div>

      <div className="shortcuts-white-page">
        <section className="shortcut-white-body">
          <div className="gallery-shortcut">
              <img
                className="gallery-shortcut-image"
                src={galleryShortcut}
                alt="Mixed roses bouquet"
              />
            <div className="white-shortcut-body-text">
              <h2>Gallery</h2>
              <div className="shortcut-body-bar"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <NavLink
                to="/Gallery"
                href="#top-link"
                className="shortcut-button-link"
              >
                View more
              </NavLink>
            </div>
          </div>

          <div className="contact-shortcut">
            <img
              className="contact-shortcut-image"
              src={contactUsShortcut}
              alt="Work bench at Lee Wroxton before a bouquet is assembled"
            />

            <div className="white-shortcut-body-text">
              <h2>Contact</h2>
              <div className="shortcut-body-bar"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <NavLink
                to="/Contact"
                href="#top-link"
                className="shortcut-button-link"
              >
                View more
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
