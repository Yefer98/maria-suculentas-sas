import React from "react";
import Orejasg from "../../assets/orejas-gato.jpg";

const cardout = () => {
  const stats3 = document.querySelector("#stats3");
  const parrafo3 = document.querySelector("#parrafo3");
  stats3.style.opacity = "0";
  parrafo3.style.opacity = "3";
};

const cardover = () => {
  const stats3 = document.querySelector("#stats3");
  const parrafo3 = document.querySelector("#parrafo3");
  stats3.style.opacity = "3";
  parrafo3.style.opacity = "0";
};

const Orejas = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Orejas de Gato</h2>
      <img src={Orejasg} alt="Suculenta Orejas de Gato" />
      <p className="parrafo" id="parrafo3">
        Esta especie se suele cultivar como planta de interior por la
        peculiaridad de su aspecto más que por sus pequeñas flores. Al igual que
        el resto de las crasuláceas, requiere riegos moderados, una temperatura
        invernal que no baje de los 5 °C, un sustrato bien drenado con adición
        de turba o mantillo de hojas y una posición soleada o semisombreada.
      </p>
      <div className="stats" id="stats3">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Planta para exterior</li>
          <li>Tamaño: 1 m de altura</li>
          <li>Cantidad: 10</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Orejas;
