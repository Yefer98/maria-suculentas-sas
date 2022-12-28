import React from "react";
import collares from "../../assets/collar.jfif";

const Collar = () => {
  return (
    <div className="card">
      <h2>Planta Collar de Corazones</h2>
      <img src={collares} alt="Planta Collar de Corazones" />
      <p>
        Ceropegia woodii Schltr. es una especie de planta de la familia
        Apocynaceae. Llamada comúnmente collar de corazones es una planta
        colgante con hojas en forma de corazón de color verde oscuro con manchas
        de apariencia marmórea.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Collar;
