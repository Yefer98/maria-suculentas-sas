import React from "react";
import Aloes from "../../assets/aloe.jpg";

const Aloe = () => {
  return (
    <div className="card">
      <h2>Suculenta Antorcha Aloe</h2>
      <img src={Aloes} alt="Aloe" />
      <p>
        La planta forma un rosetón pequeño (15 a 30 cm de diámetro), sin tallo,
        con hojas dentadas y suculentas. El tallo floral sale del centro de la
        planta. Sus flores, ricas en néctar suelen atraer pájaros, abejas y
        avispas.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Aloe;
