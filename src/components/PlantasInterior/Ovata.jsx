import React from "react";
import ovatar from "../../assets/ovata.jpg";

const cardout = () => {
  const stats10 = document.querySelector("#stats10");
  const parrafo10 = document.querySelector("#parrafo10");
  stats10.style.opacity = "0";
  parrafo10.style.opacity = "1";
  stats10.style.transition = "1s";
  parrafo10.style.transition = "1s";
};

const cardover = () => {
  const stats10 = document.querySelector("#stats10");
  const parrafo10 = document.querySelector("#parrafo10");
  stats10.style.opacity = "1";
  parrafo10.style.opacity = "0";
  stats10.style.transition = "1s";
  parrafo10.style.transition = "1s";
};

const Ovata = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Ovata de Jade</h2>
      <img src={ovatar} alt="Echeveria Setosa" />
      <p className="parrafo" id="parrafo10">
        C. ovata es una planta perenne, con ramas gruesas y hojas carnosas de 3
        a 7 cm, que crecen en pares opuestos a lo largo del tallo. Es originaria
        de África del sur, crece en los laterales de las montañas en lugares
        rocosos y calurosos con lluvias invernales.
      </p>
      <div className="stats" id="stats10">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para interior</li>
          <li>Tamaño: 1-1,5 m de altura</li>
          <li>Cantidad: 35</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Ovata;
