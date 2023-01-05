import React from "react";
import Garra from "../../assets/garra-oso.jpg";

const cardout = () => {
  const stats2 = document.querySelector("#stats2");
  const parrafo2 = document.querySelector("#parrafo2");
  stats2.style.opacity = "0";
  parrafo2.style.opacity = "2";
};

const cardover = () => {
  const stats2 = document.querySelector("#stats2");
  const parrafo2 = document.querySelector("#parrafo2");
  stats2.style.opacity = "2";
  parrafo2.style.opacity = "0";
};

const Garraoso = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Garra de Oso</h2>
      <img src={Garra} alt="Suculenta Garra de oso" />
      <p className="parrafo" id="parrafo2">
        Cotyledon ó (Garra de Oso) Esta gran diferencia se debe a que varias
        especies originalmente descritas como Cotyledon después se agruparon en
        otros taxones, principalmente en los géneros americanos Echeveria y
        Dudleya.
      </p>
      <div className="stats" id="stats2">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Planta para exterior</li>
          <li>Tamaño: 30-70 cm de alto y 30-50 cm de ancho</li>
          <li>Cantidad: 30</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Garraoso;
