import React from "react";
import Sedumm from "../../assets/Sedum.jpg";

const Sedum = () => {
  return (
    <div className="card">
      <h2>Sedum morganianum</h2>
      <img src={Sedumm} alt="Sedum morganianum" />
      <p>
        Son plantas anuales o perennes, a veces rizomatosas, con hojas carnosas
        generalmente enteras, planas o cilíndricas, alternas, aunque
        ocasionalmente pueden ser opuestas, verticiladas o agrupadas en rosetas
        basales, generalmente sésiles.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Sedum;
