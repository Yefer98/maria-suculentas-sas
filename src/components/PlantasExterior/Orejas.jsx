import React from "react";
import Orejasg from "../../assets/orejas-gato.jpg"

const Orejas = () => {
  return (
    <div className="card">
      <h2>Suculenta Orejas de Gato</h2>
      <img src={Orejasg} alt="Suculenta Orejas de Gato" />
      <p>
        En el sol, su color es casi negro, lo que provoca un bello contraste con
        otras plantas en un jardín. Por otro lado, en la sombra parcial llega a
        tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Orejas;
