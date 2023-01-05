import React from "react";
import bolaor from "../../assets/bola-oro.webp";

const cardout = () => {
  const stats13 = document.querySelector("#stats13");
  const parrafo13 = document.querySelector("#parrafo13");
  stats13.style.opacity = "0";
  parrafo13.style.opacity = "1";
};

const cardover = () => {
  const stats13 = document.querySelector("#stats13");
  const parrafo13 = document.querySelector("#parrafo13");
  stats13.style.opacity = "1";
  parrafo13.style.opacity = "0";
};

const Bolaoro = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Bola Oro</h2>
      <img src={bolaor} alt="BOLA ORO" />
      <p className="parrafo" id="parrafo13">
        Echinocactus grusonii, llamado comúnmente asiento de suegra, bola de
        oro, barril de oro, o cactus erizo, es una especie perteneciente a la
        familia Cactaceae. El pequeño género al que pertenece, Echinocactus,
        junto con su género pariente Ferocactus, son vulgarmente conocidos como
        cactus barril.
      </p>
      <div className="stats" id="stats13">
        <ul>
          <li>Sexo: Hembra</li>
          <li>Referencia: Cactus</li>
          <li>Tamaño: Altura: 25 cm</li>
          <li>Cantidad: 65</li>
        </ul>
      </div>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolaoro;
