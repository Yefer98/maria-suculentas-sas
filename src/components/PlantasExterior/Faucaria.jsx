import React from "react";
import Faucari from "../../assets/Faucaria-tigrina.jpg"

const Faucaria = () => {
  return (
    <div className="card">
      <h2>Faucaria Tigrina</h2>
      <img src={Faucari} alt="Faucaria-tigrina" />
      <p>
        En el sol, su color es casi negro, lo que provoca un bello contraste con
        otras plantas en un jardín. Por otro lado, en la sombra parcial llega a
        tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Faucaria;
