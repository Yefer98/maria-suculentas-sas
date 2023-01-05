import React from "react";
import semillaRicinoV from "../../assets/semilla-ricinoV.jpg";
import ricinoV from "../../assets/ricinoV.webp";

const overRicinoV = () => {
  const semillaRicinoV = document.querySelector("#semillaRicinoV");
  const ricinoV = document.querySelector("#ricinoV");
  ricinoV.style.transform = "translateX(0%)";
  semillaRicinoV.style.transform = "translateX(100%)";
};

const outRicinoV = () => {
  const semillaRicinoV = document.querySelector("#semillaRicinoV");
  const ricinoV = document.querySelector("#ricinoV");
  ricinoV.style.transform = "translateX(-100%)";
  semillaRicinoV.style.transform = "translateX(0%)";
};

const RicinoVerde = () => {
  return (
    <div className="contenedor-semilla">
      <div
        className="imagenes"
        onMouseOver={overRicinoV}
        onMouseOut={outRicinoV}
      >
        <img className="imagen" id="ricinoV" src={ricinoV} alt="ricinoV" />
        <img
          className="imagen"
          id="semillaRicinoV"
          src={semillaRicinoV}
          alt="semillaRicinoV"
        />
      </div>
      <h4>Semillas Ricino Verde</h4>
    </div>
  );
};

export default RicinoVerde;
