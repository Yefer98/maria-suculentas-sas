import React from "react";
import graci from "../../assets/gracilis.jfif";

const Gracilis = () => {
  return (
    <div className="card">
      <h2>Cactus Gracilis</h2>
      <img src={graci} alt="gracilis" />
      <p>
        Se trata de una planta que crece por separado con tallos esféricos o
        cilíndricos, y alcanza un diámetro de 30 cm y una altura de 150
        centímetros. Tiene entre 16 y 24 costillas, con 7 a 13 espinas centrales
        de color rojo, ligeramente curvadas en gancho y de color amarillo de
        hasta 7 cm de largo. Los cuatro espinas principales están dispuestos en
        pares opuestos.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Gracilis;
