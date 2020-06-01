import React from 'react';

import "../css/Footer.css";

import footer from "../../assets/footer.svg";

export default function Footer() {
    return (
        <div className="footer">

            <a href="#top-link" className="footer-link"> <img src={footer} alt="Up arrow with a green circular background" /></a>

        </div>
    )
}
