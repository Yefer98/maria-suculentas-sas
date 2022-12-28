import React from "react";
import Orejasg from "../../assets/orejas-gato.jpg";

const Orejas = () => {
  return (
    <div className="card">
      <h2>Suculenta Orejas de Gato</h2>
      <img src={Orejasg} alt="Suculenta Orejas de Gato" />
      <p>
        Esta especie se suele cultivar como planta de interior por la
        peculiaridad de su aspecto más que por sus pequeñas flores. Al igual que
        el resto de las crasuláceas, requiere riegos moderados, una temperatura
        invernal que no baje de los 5 °C, un sustrato bien drenado con adición
        de turba o mantillo de hojas y una posición soleada o semisombreada.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Orejas;
