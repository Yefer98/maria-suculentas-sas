import React from "react";
import bonsais from "../../assets/bonsai.jpg";

const Bonsai = () => {
  return (
    <div className="card">
      <h2>Bonsai Portulacaria</h2>
      <img src={bonsais} alt="Bonsai" />
      <p>
        Portulacaria afra es una especie de plantas con flores del género
        Portulacaria que a veces se denomina comúnmente " verdolaga arbórea".
        Pertenece a la familia de las Portulacaceae según la clasificación
        clásica, oa la de las Didiereaceae según la clasificación filogenética.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bonsai;
