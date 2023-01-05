import React from "react";
import mammi from "../../assets/mammillaria.jpg";

const cardout = () => {
  const stats16 = document.querySelector("#stats16");
  const parrafo16 = document.querySelector("#parrafo16");
  stats16.style.opacity = "0";
  parrafo16.style.opacity = "1";
};

const cardover = () => {
  const stats16 = document.querySelector("#stats16");
  const parrafo16 = document.querySelector("#parrafo16");
  stats16.style.opacity = "1";
  parrafo16.style.opacity = "0";
};

const CMammillaria = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Mammillaria</h2>
      <img src={mammi} alt="mammillaria" />
      <p className="parrafo" id="parrafo16">
        Es una especie de pequeño tamaño, como máximo 13 cm de altura. Los
        tallos (hasta unos 4 cm de diámetro), de color verde azulado, son algo
        globosos o cilíndricos, profusamente ramificados.
      </p>
      <div className="stats" id="stats16">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Cactus</li>
          <li>Tamaño: 20 cm de diámetro y 40 cm de altura</li>
          <li>Cantidad: 75</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default CMammillaria;
