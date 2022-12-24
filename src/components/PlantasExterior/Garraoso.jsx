import React from "react";
import Garra from "../../assets/garra-oso.jpg"

const Garraoso = () => {
  return (
    <div className="card">
      <h2>Suculenta Garra de Oso</h2>
      <img src={Garra} alt="Suculenta Garra de oso" />
      <p>
        En el sol, su color es casi negro, lo que provoca un bello contraste con
        otras plantas en un jardín. Por otro lado, en la sombra parcial llega a
        tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Garraoso;
