import React from "react";
import suculenta_negra from "../../assets/suculenta_negra.jpg";

const Snegra = () => {
  return (
    <div className="card">
      <h2>Suculenta Negra</h2>
      <img src={suculenta_negra} alt="Suculenta Negra" />
      <p>
        Esta planta en el sol, su color es casi negro, lo que provoca un bello
        contraste con otras plantas en un jardín. Por otro lado, en la sombra
        parcial llega a tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Snegra;
