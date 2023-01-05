import React from "react";
import semillaSancha from "../../assets/semilla-sancha.jpg";
import sancha from "../../assets/sancha.jpg";

const overSancha = () => {
  const semillaSancha = document.querySelector("#semillaSancha");
  const sancha = document.querySelector("#sancha");
  sancha.style.transform = "translateX(0%)";
  semillaSancha.style.transform = "translateX(100%)";
};

const outSancha = () => {
  const semillaSancha = document.querySelector("#semillaSancha");
  const sancha = document.querySelector("#sancha");
  sancha.style.transform = "translateX(-100%)";
  semillaSancha.style.transform = "translateX(0%)";
};

const SanchaInchi = () => {
  return (
    <div className="contenedor-semilla">
      <div className="imagenes" onMouseOver={overSancha} onMouseOut={outSancha}>
        <img className="imagen" id="sancha" src={sancha} alt="sancha" />
        <img
          className="imagen"
          id="semillaSancha"
          src={semillaSancha}
          alt="semillaSancha"
        />
      </div>
      <h4>Semillas Sancha Inchi</h4>
    </div>
  );
};

export default SanchaInchi;
