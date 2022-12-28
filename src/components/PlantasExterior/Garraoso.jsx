import React from "react";
import Garra from "../../assets/garra-oso.jpg";

const Garraoso = () => {
  return (
    <div className="card">
      <h2>Suculenta Garra de Oso</h2>
      <img src={Garra} alt="Suculenta Garra de oso" />
      <p>
        Cotyledon ó (Garra de Oso) Esta gran diferencia se debe a que varias
        especies originalmente descritas como Cotyledon después se agruparon en
        otros taxones, principalmente en los géneros americanos Echeveria y
        Dudleya.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Garraoso;
