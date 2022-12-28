import React from "react";
import uta from "../../assets/utah.jpg";

const Utah = () => {
  return (
    <div className="card">
      <h2>Cactus Utah</h2>
      <img src={uta} alt="Bola Utah" />
      <p>
        Este cactus tiene forma de huevo o un poco redondeado y alcanza un
        tamaño de hasta 6 centímetros de altura y aproximadamente 9 de ancho, y
        en general no tiene ramas. Se encoge de tamaño y desaparece bajo la
        tierra en tiempos secos y fríos, por lo que es difícil de encontrar en
        la mayoría del año.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Utah;
