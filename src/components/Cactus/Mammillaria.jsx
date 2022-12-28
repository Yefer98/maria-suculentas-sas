import React from "react";
import mammi from "../../assets/mammillaria.jpg";

const Mammillaria = () => {
  return (
    <div className="card">
      <h2>Cactus Mammillaria</h2>
      <img src={mammi} alt="mammillaria" />
      <p>
        Es una especie de pequeño tamaño, como máximo 13 cm de altura. Los
        tallos (hasta unos 4 cm de diámetro), de color verde azulado, son algo
        globosos o cilíndricos, profusamente ramificados.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Mammillaria;
