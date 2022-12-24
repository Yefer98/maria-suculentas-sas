import React from "react";
import Sedumm from "../../assets/Sedum-morganianum-burrito.jpg"

const Sedum = () => {
  return (
    <div className="card">
      <h2>Sedum morganianum</h2>
      <img src={Sedumm} alt="Sedum morganianum" />
      <p>
        En el sol, su color es casi negro, lo que provoca un bello contraste con
        otras plantas en un jardín. Por otro lado, en la sombra parcial llega a
        tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Sedum;
