import React from "react";
import Aloes from "../../assets/aloe.jpg";

const cardout = () => {
  const stats6 = document.querySelector("#stats6");
  const parrafo6 = document.querySelector("#parrafo6");
  stats6.style.opacity = "0";
  parrafo6.style.opacity = "1";
  stats6.style.transition = "1s";
  parrafo6.style.transition = "1s";
};

const cardover = () => {
  const stats6 = document.querySelector("#stats6");
  const parrafo6 = document.querySelector("#parrafo6");
  stats6.style.opacity = "1";
  parrafo6.style.opacity = "0";
  stats6.style.transition = "1s";
  parrafo6.style.transition = "1s";
};

const Aloe = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Antorcha Aloe</h2>
      <img src={Aloes} alt="Aloe" />
      <p className="parrafo" id="parrafo6">
        La planta forma un rosetón pequeño (15 a 30 cm de diámetro), sin tallo,
        con hojas dentadas y suculentas. El tallo floral sale del centro de la
        planta. Sus flores, ricas en néctar suelen atraer pájaros, abejas y
        avispas.
      </p>
      <div className="stats" id="stats6">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para interior</li>
          <li>Tamaño: 40-50 cm de largo por 10-15 cm de ancho</li>
          <li>Cantidad: 40</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Aloe;
