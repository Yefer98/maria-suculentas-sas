import React from "react";
import piedra from "../../assets/piedras.jpg";

const Piedras = () => {
  return (
    <div className="card">
      <h2>Planta Lithops de Piedras Vivas</h2>
      <img src={piedra} alt="Echeveria Setosa" />
      <p>
        Se denominan vulgarmente piedras vivas o planta piedra debido a que
        presentan una apariencia que las hace prácticamente indistinguibles de
        las piedras de su entorno; adaptación evolutiva (denominada cripsis) que
        les permite camuflarse ante posibles depredadores.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Piedras;
