import React from "react";
import collares from "../../assets/collar.jfif";

const cardout = () => {
  const stats9 = document.querySelector("#stats9");
  const parrafo9 = document.querySelector("#parrafo9");
  stats9.style.opacity = "0";
  parrafo9.style.opacity = "1";
  stats9.style.transition = "1s";
  parrafo9.style.transition = "1s";
};

const cardover = () => {
  const stats9 = document.querySelector("#stats9");
  const parrafo9 = document.querySelector("#parrafo9");
  stats9.style.opacity = "1";
  parrafo9.style.opacity = "0";
  stats9.style.transition = "1s";
  parrafo9.style.transition = "1s";
};

const Collar = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Planta Collar de Corazones</h2>
      <img src={collares} alt="Planta Collar de Corazones" />
      <p className="parrafo" id="parrafo9">
        Ceropegia woodii Schltr. es una especie de planta de la familia
        Apocynaceae. Llamada comúnmente collar de corazones es una planta
        colgante con hojas en forma de corazón de color verde oscuro con manchas
        de apariencia marmórea.
      </p>
      <div className="stats" id="stats9">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para interior</li>
          <li>Tamaño: 2-5 cm de altura y 2-4 m de longitud</li>
          <li>Cantidad: 15</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Collar;
