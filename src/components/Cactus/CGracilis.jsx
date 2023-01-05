import React from "react";
import graci from "../../assets/gracilis.jfif";

const cardout = () => {
  const stats15 = document.querySelector("#stats15");
  const parrafo15 = document.querySelector("#parrafo15");
  stats15.style.opacity = "0";
  parrafo15.style.opacity = "1";
};

const cardover = () => {
  const stats15 = document.querySelector("#stats15");
  const parrafo15 = document.querySelector("#parrafo15");
  stats15.style.opacity = "1";
  parrafo15.style.opacity = "0";
};

const CGracilis = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Gracilis</h2>
      <img src={graci} alt="gracilis" />
      <p className="parrafo" id="parrafo15">
        Se trata de una planta que crece por separado con tallos esféricos o
        cilíndricos, y alcanza un diámetro de 30 cm y una altura de 150
        centímetros. Tiene entre 16 y 24 costillas, con 7 a 13 espinas centrales
        de color rojo, ligeramente curvadas en gancho y de color amarillo de
        hasta 7 cm de largo. Los cuatro espinas principales están dispuestos en
        pares opuestos.
      </p>
      <div className="stats" id="stats15">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Cactus</li>
          <li>Tamaño: Diámetro de 30 cm y una altura de 150 centímetros</li>
          <li>Cantidad: 75</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default CGracilis;
