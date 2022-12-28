import React from "react";
import bolan from "../../assets/bola-negra.jpg";

const Bolanegra = () => {
  return (
    <div className="card">
      <h2>Cactus Bola Negra</h2>
      <img src={bolan} alt="BOLA NEGRA" />
      <p>
        Es una planta arbolada perenne carnosa, armada de espinas. Cactácea
        arborescente, erecta, hasta de 2- 7 m de altura, tiene forma de un
        "candelabro", muy ramificado cerca de la base de un tronco corto, los
        tallos miden entre 6-12 cm de diámetro, con 6 -8 costillas, verdes
        azuladas, con bolas de lana de color pardo-blanquecinas en las puntas.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolanegra;
