import React from "react";
import Echeverias from "../../assets/Echeveria.jpg";

const cardout = () => {
  const stats = document.querySelector("#stats");
  const parrafo = document.querySelector("#parrafo");
  stats.style.opacity = "0";
  parrafo.style.opacity = "1";
};

const cardover = () => {
  const stats = document.querySelector("#stats");
  const parrafo = document.querySelector("#parrafo");
  stats.style.opacity = "1";
  parrafo.style.opacity = "0";
};

const Echeveria = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Echeveria Setosa</h2>
      <img src={Echeverias} alt="Echeveria Setosa" />
      <p className="parrafo" id="parrafo">
        Surge de una roseta suculenta casi sin tallo con 7 - 15 cm de altura
        según la variedad y de la que surgen de 4 a 6 inflorescencias ramosas
        que alcanzan los 20 cm de altura. Flores rojas y amarillas en la
        primavera y principios de verano.
      </p>
      <div className="stats" id="stats">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para exterior</li>
          <li>Tamaño: 7 - 15 cm de altura</li>
          <li>Cantidad: 100</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Echeveria;
