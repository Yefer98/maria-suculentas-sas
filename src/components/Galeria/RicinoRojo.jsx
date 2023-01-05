import React from "react";
import semillaRicinoR from "../../assets/semilla-ricinoR.jpg";
import ricinoR from "../../assets/ricinoR.jpg";

const overRicinoR = () => {
  const semillaRicinoR = document.querySelector("#semillaRicinoR");
  const ricinoR = document.querySelector("#ricinoR");
  ricinoR.style.transform = "translateX(0%)";
  semillaRicinoR.style.transform = "translateX(100%)";
};

const outRicinoR = () => {
  const semillaRicinoR = document.querySelector("#semillaRicinoR");
  const ricinoR = document.querySelector("#ricinoR");
  ricinoR.style.transform = "translateX(-100%)";
  semillaRicinoR.style.transform = "translateX(0%)";
};

const RicinoRojo = () => {
  return (
    <div className="contenedor-semilla">
      <div
        className="imagenes"
        onMouseOver={overRicinoR}
        onMouseOut={outRicinoR}
      >
        <img className="imagen" id="ricinoR" src={ricinoR} alt="ricinoR" />
        <img
          className="imagen"
          id="semillaRicinoR"
          src={semillaRicinoR}
          alt="semillaRicinoR"
        />
      </div>
      <h4>Semillas Ricino Rojo</h4>
    </div>
  );
};

export default RicinoRojo;
