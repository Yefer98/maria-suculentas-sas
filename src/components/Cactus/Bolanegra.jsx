import React from "react";
import bolan from "../../assets/bola-negra.jpg";

const cardout = () => {
  const stats12 = document.querySelector("#stats12");
  const parrafo12 = document.querySelector("#parrafo12");
  stats12.style.opacity = "0";
  parrafo12.style.opacity = "1";
};

const cardover = () => {
  const stats12 = document.querySelector("#stats12");
  const parrafo12 = document.querySelector("#parrafo12");
  stats12.style.opacity = "1";
  parrafo12.style.opacity = "0";
};

const Bolanegra = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Bola Negra</h2>
      <img src={bolan} alt="BOLA NEGRA" />
      <p className="parrafo" id="parrafo12">
        Es una planta arbolada perenne carnosa, armada de espinas. Cactácea
        arborescente, erecta, hasta de 2- 7 m de altura, tiene forma de un
        "candelabro", muy ramificado cerca de la base de un tronco corto, los
        tallos miden entre 6-12 cm de diámetro, con 6 -8 costillas, verdes
        azuladas, con bolas de lana de color pardo-blanquecinas en las puntas.
      </p>
      <div className="stats" id="stats12">
        <ul>
          <li>Sexo: Macho</li>
          <li>Referencia: Cactus</li>
          <li>Tamaño: 2- 7 m de altura y 6-12 cm de diámetro</li>
          <li>Cantidad: 45</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolanegra;
