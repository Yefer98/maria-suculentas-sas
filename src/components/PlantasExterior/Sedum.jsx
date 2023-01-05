import React from "react";
import Sedumm from "../../assets/Sedum.jpg";

const cardout = () => {
  const stats4 = document.querySelector("#stats4");
  const parrafo4 = document.querySelector("#parrafo4");
  stats4.style.opacity = "0";
  parrafo4.style.opacity = "4";
};

const cardover = () => {
  const stats4 = document.querySelector("#stats4");
  const parrafo4 = document.querySelector("#parrafo4");
  stats4.style.opacity = "4";
  parrafo4.style.opacity = "0";
};

const Sedum = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Sedum morganianum</h2>
      <img src={Sedumm} alt="Sedum morganianum" />
      <p className="parrafo" id="parrafo4">
        Son plantas anuales o perennes, a veces rizomatosas, con hojas carnosas
        generalmente enteras, planas o cilíndricas, alternas, aunque
        ocasionalmente pueden ser opuestas, verticiladas o agrupadas en rosetas
        basales, generalmente sésiles.
      </p>
      <div className="stats" id="stats4">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para exterior</li>
          <li>Tamaño: 30 cm de longitud</li>
          <li>Cantidad: 20</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Sedum;
