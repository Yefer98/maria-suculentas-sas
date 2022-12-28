import React from "react";
import Echeverias from "../../assets/Echeveria.jpg";

const Echeveria = () => {
  return (
    <div className="card">
      <h2>Echeveria Setosa</h2>
      <img src={Echeverias} alt="Echeveria Setosa" />
      <p>
        Surge de una roseta suculenta casi sin tallo con 7 - 15 cm de altura
        según la variedad y de la que surgen de 4 a 6 inflorescencias ramosas
        que alcanzan los 20 cm de altura. Flores rojas y amarillas en la
        primavera y principios de verano.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Echeveria;
