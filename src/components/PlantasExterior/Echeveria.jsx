import React from "react";
import Echeverias from "../../assets/Echeveria.jpg"

const Echeveria = () => {
  return (
    <div className="card">
      <h2>Echeveria Setosa</h2>
      <img src={Echeverias} alt="Echeveria Setosa" />
      <p>
        En el sol, su color es casi negro, lo que provoca un bello contraste con
        otras plantas en un jardín. Por otro lado, en la sombra parcial llega a
        tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Echeveria;
