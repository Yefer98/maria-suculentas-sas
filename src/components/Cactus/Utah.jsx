import React from "react";
import uta from "../../assets/utah.jpg";

const cardout = () => {
  const stats17 = document.querySelector("#stats17");
  const parrafo17 = document.querySelector("#parrafo17");
  stats17.style.opacity = "0";
  parrafo17.style.opacity = "1";
};

const cardover = () => {
  const stats17 = document.querySelector("#stats17");
  const parrafo17 = document.querySelector("#parrafo17");
  stats17.style.opacity = "1";
  parrafo17.style.opacity = "0";
};

const Utah = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Utah</h2>
      <img src={uta} alt="Bola Utah" />
      <p className="parrafo" id="parrafo17">
        Este cactus tiene forma de huevo o un poco redondeado y alcanza un
        tamaño de hasta 6 centímetros de altura y aproximadamente 9 de ancho, y
        en general no tiene ramas. Se encoge de tamaño y desaparece bajo la
        tierra en tiempos secos y fríos, por lo que es difícil de encontrar en
        la mayoría del año.
      </p>
      <div className="stats" id="stats17">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Cactus</li>
          <li>Tamaño: Max 6 centímetros de altura</li>
          <li>Cantidad: 80</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Utah;
