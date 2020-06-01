import React from "react";
import "../css/randomShapes.css";

import shapeOne from "../../assets/shapeOne.svg";
import shapeTwo from "../../assets/shapeTwo.svg";
import shapeThree from "../../assets/shapeThree.svg";
import shapeFour from "../../assets/shapeFour.svg";

export default function randomShapes(props) {
  const whichShape = () => {
    if (props.shape == 1) {
      return shapeOne;
    } else if (props.shape == 2) {
      return shapeTwo;
    } else if (props.shape == 3) {
      return shapeThree;
    } else if (props.shape == 4) {
      return shapeFour;
    }
  };
  return (
    <div className="shapes-overflow">
      <div
        className="random-shapes"
        style={{ top: props.top, left: props.left, bottom: props.bottom, right: props.right }}
      >
        <img
          className="shape-image"
          src={whichShape()}
          alt="red outline of a circular shape"
          width="200"
          height="200"
        />
      </div>
    </div>
  );
}




