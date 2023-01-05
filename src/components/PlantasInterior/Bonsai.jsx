import React from "react";
import bonsais from "../../assets/bonsai.jpg";

const cardout = () => {
  const stats7 = document.querySelector("#stats7");
  const parrafo7 = document.querySelector("#parrafo7");
  stats7.style.opacity = "0";
  parrafo7.style.opacity = "1";
  stats7.style.transition = "1s";
  parrafo7.style.transition = "1s";
};

const cardover = () => {
  const stats7 = document.querySelector("#stats7");
  const parrafo7 = document.querySelector("#parrafo7");
  stats7.style.opacity = "1";
  parrafo7.style.opacity = "0";
  stats7.style.transition = "1s";
  parrafo7.style.transition = "1s";
};

const Bonsai = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Bonsai Portulacaria</h2>
      <img src={bonsais} alt="Bonsai" />
      <p className="parrafo" id="parrafo7">
        Portulacaria afra es una especie de plantas con flores del género
        Portulacaria que a veces se denomina comúnmente "verdolaga arbórea".
        Pertenece a la familia de las Portulacaceae según la clasificación
        clásica, oa la de las Didiereaceae según la clasificación filogenética.
      </p>
      <div className="stats" id="stats7">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Planta para interior</li>
          <li>Tamaño: Max 3 metros de altura</li>
          <li>Cantidad: 5</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bonsai;
