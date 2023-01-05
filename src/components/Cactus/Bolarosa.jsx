import React from "react";
import bolar from "../../assets/bola-rosada.jpg";

const cardout = () => {
  const stats14 = document.querySelector("#stats14");
  const parrafo14 = document.querySelector("#parrafo14");
  stats14.style.opacity = "0";
  parrafo14.style.opacity = "1";
};

const cardover = () => {
  const stats14 = document.querySelector("#stats14");
  const parrafo14 = document.querySelector("#parrafo14");
  stats14.style.opacity = "1";
  parrafo14.style.opacity = "0";
};

const Bolarosa = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Bola Rosada</h2>
      <img src={bolar} alt="Bola rosada" />
      <p className="parrafo" id="parrafo14">
        Es una especie fanerógama perteneciente a la familia de las cactáceas,
        endémica de Paraguay y en Argentina, en las provincias de Formosa, Chaco
        y parte de Santiago del Estero, que actualmente se ha extendido por todo
        el mundo.
      </p>
      <div className="stats" id="stats14">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Cactus</li>
          <li>Tamaño: Altura: 15 centímetros</li>
          <li>Cantidad: 36</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolarosa;
