import React from "react";
import piedra from "../../assets/piedras.jpg";

const cardout = () => {
  const stats11 = document.querySelector("#stats11");
  const parrafo11 = document.querySelector("#parrafo11");
  stats11.style.opacity = "0";
  parrafo11.style.opacity = "1";
  stats11.style.transition = "1s";
  parrafo11.style.transition = "1s";
};

const cardover = () => {
  const stats11 = document.querySelector("#stats11");
  const parrafo11 = document.querySelector("#parrafo11");
  stats11.style.opacity = "1";
  parrafo11.style.opacity = "0";
  stats11.style.transition = "1s";
  parrafo11.style.transition = "1s";
};

const Piedras = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Planta Lithops de Piedras Vivas</h2>
      <img src={piedra} alt="Echeveria Setosa" />
      <p className="parrafo" id="parrafo11">
        Se denominan vulgarmente piedras vivas o planta piedra debido a que
        presentan una apariencia que las hace prácticamente indistinguibles de
        las piedras de su entorno; adaptación evolutiva (denominada cripsis) que
        les permite camuflarse ante posibles depredadores.
      </p>
      <div className="stats" id="stats11">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Planta para interior</li>
          <li>Tamaño: Diámetro: 0.6-0.8 pulgadas, altura: 1-1.5 pulgadas</li>
          <li>Cantidad: 55</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Piedras;
