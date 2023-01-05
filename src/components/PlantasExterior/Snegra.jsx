import React from "react";
import suculenta_negra from "../../assets/suculenta_negra.jpg";

const cardout = () => {
  const stats5 = document.querySelector("#stats5");
  const parrafo5 = document.querySelector("#parrafo5");
  stats5.style.opacity = "0";
  parrafo5.style.opacity = "5";
};

const cardover = () => {
  const stats5 = document.querySelector("#stats5");
  const parrafo5 = document.querySelector("#parrafo5");
  stats5.style.opacity = "5";
  parrafo5.style.opacity = "0";
};

const Snegra = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Negra</h2>
      <img src={suculenta_negra} alt="Suculenta Negra" />
      <p className="parrafo" id="parrafo5">
        Esta planta en el sol, su color es casi negro, lo que provoca un bello
        contraste con otras plantas en un jardín. Por otro lado, en la sombra
        parcial llega a tomar un color púrpura con tonos verdes al centro.
      </p>
      <div className="stats" id="stats5">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Planta para exterior</li>
          <li>Tamaño: 60-90 cm de alto y 15-20 cm de ancho</li>
          <li>Cantidad: 30</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Snegra;
