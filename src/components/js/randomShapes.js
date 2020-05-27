import React from 'react';
import "../css/randomShapes.css";

import shapeOne from "../../assets/shapeOne.svg";


export default function randomShapes() {
    return (
        <div>
            <div class="random-shapes">
                <img class="shape-image" src={shapeOne} alt="lgo" width="400" height="300" />
            </div>
        </div>
    )
}



