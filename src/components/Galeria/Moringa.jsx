import React from "react";
import semillaMoringa from "../../assets/semilla-moringa.jpg";
import moringa from "../../assets/moringa.jpg";

const overMoringa = () => {
  const semillaMoringa = document.querySelector("#semillaMoringa");
  const moringa = document.querySelector("#moringa");
  moringa.style.transform = "translateX(0%)";
  semillaMoringa.style.transform = "translateX(100%)";
};

const outMoringa = () => {
  const semillaMoringa = document.querySelector("#semillaMoringa");
  const moringa = document.querySelector("#moringa");
  moringa.style.transform = "translateX(-100%)";
  semillaMoringa.style.transform = "translateX(0%)";
};

const Moringa = () => {
  return (
    <div className="contenedor-semilla">
      <div
        className="imagenes"
        onMouseOver={overMoringa}
        onMouseOut={outMoringa}
      >
        <img className="imagen" id="moringa" src={moringa} alt="moringa" />
        <img
          className="imagen"
          id="semillaMoringa"
          src={semillaMoringa}
          alt="semillaMoringa"
        />
      </div>
      <h4>Semillas Moringa</h4>
    </div>
  );
};

export default Moringa;
