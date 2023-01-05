import React from "react";
import Faucari from "../../assets/Faucaria-tigrina.jpg";

const cardout = () => {
  const stats1 = document.querySelector("#stats1");
  const parrafo1 = document.querySelector("#parrafo1");
  stats1.style.opacity = "0";
  parrafo1.style.opacity = "1";
};

const cardover = () => {
  const stats1 = document.querySelector("#stats1");
  const parrafo1 = document.querySelector("#parrafo1");
  stats1.style.opacity = "1";
  parrafo1.style.opacity = "0";
};

const Faucaria = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Faucaria Tigrina</h2>
      <img src={Faucari} alt="Faucaria-tigrina" />
      <p className="parrafo" id="parrafo1">
        Las faucarias amarillas o amarillo doradas, nacen solitarias o en
        parejas, son sésiles de unos 3 a 5 cm de diámetro y surgen del centro de
        cada roseta. La floración se da en otoño, en ejemplares de dos años o
        incluso más jóvenes.
      </p>
      <div className="stats" id="stats1">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Planta para exterior</li>
          <li>Tamaño: 8 cm de altura</li>
          <li>Cantidad: 50</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Faucaria;
