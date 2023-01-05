import React from "react";
import semillaDrosera from "../../assets/semilla-drosera.jpg";
import drosera from "../../assets/drosera.jpg";

const overDrosera = () => {
  const semillaDrosera = document.querySelector("#semillaDrosera");
  const drosera = document.querySelector("#drosera");
  drosera.style.transform = "translateX(0%)";
  semillaDrosera.style.transform = "translateX(100%)";
};

const outDrosera = () => {
  const semillaDrosera = document.querySelector("#semillaDrosera");
  const drosera = document.querySelector("#drosera");
  drosera.style.transform = "translateX(-100%)";
  semillaDrosera.style.transform = "translateX(0%)";
};

const Drosera = () => {
  return (
    <div className="contenedor-semilla">
      <div
        className="imagenes"
        id="imagenesDrosera"
        onMouseOver={overDrosera}
        onMouseOut={outDrosera}
      >
        <img className="imagen" id="drosera" src={drosera} alt="drosera" />
        <img
          className="imagen"
          id="semillaDrosera"
          src={semillaDrosera}
          alt="semillaDrosera"
        />
      </div>
      <h4>Semillas Drosera</h4>
    </div>
  );
};

export default Drosera;
