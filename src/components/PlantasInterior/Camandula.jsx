import React from "react";
import camandulas from "../../assets/camandula.jpg";

const cardout = () => {
  const stats8 = document.querySelector("#stats8");
  const parrafo8 = document.querySelector("#parrafo8");
  stats8.style.opacity = "0";
  parrafo8.style.opacity = "1";
  stats8.style.transition = "1s";
  parrafo8.style.transition = "1s";
};

const cardover = () => {
  const stats8 = document.querySelector("#stats8");
  const parrafo8 = document.querySelector("#parrafo8");
  stats8.style.opacity = "1";
  parrafo8.style.opacity = "0";
  stats8.style.transition = "1s";
  parrafo8.style.transition = "1s";
};

const Camandula = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Camándula Bolitas Colgantes</h2>
      <img src={camandulas} alt="Camándula Bolitas Colgantes" />
      <p className="parrafo" id="parrafo8">
        Nativa del sudoeste de África, esta crasa perenne forma tapices
        rastreros que enraízan en los nudos. Las hojas son esféricas y miden 6
        mm de diámetro. Las flores blancas y como margaritas, de 12 mm de
        diámetro, brotan sobre pedúnculos de 35 mm en verano. Esta planta se
        cultiva extensamente en cestas colgantes, con tallos péndulos de hojas
        grises que parecen cuentas.
      </p>
      <div className="stats" id="stats8">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para interior</li>
          <li>Tamaño: 6 mm de diámetro</li>
          <li>Cantidad: 60</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Camandula;
