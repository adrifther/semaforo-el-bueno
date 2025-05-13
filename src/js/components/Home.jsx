import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

//create your first component
const Home = () => {
  const [actualColor, setActualColor] = useState("rojo");

  return (
    <div className="d-flex flex-column justify-content-center text-center contenedor">
      <div
        className={` ${actualColor === "rojo" ? "redLightOn" : "redLightOff"}`}
        onClick={() => setActualColor("rojo")}
      ></div>
      <div
        className={` ${
          actualColor === "amarillo" ? "yellowLightOn" : "yellowLightOff"
        }`}
        onClick={() => setActualColor("amarillo")}
      ></div>
      <div
        className={` ${
          actualColor === "verde" ? "greenLightOn" : "greenLightOff"
        }`}
        onClick={() => setActualColor("verde")}
      ></div>
    </div>
  );
};

export default Home;
