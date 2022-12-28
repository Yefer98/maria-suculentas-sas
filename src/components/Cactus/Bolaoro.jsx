import React from "react";
import bolaor from "../../assets/bola-oro.webp";

const Bolaoro = () => {
  return (
    <div className="card">
      <h2>Cactus Bola Oro</h2>
      <img src={bolaor} alt="BOLA ORO" />
      <p>
        Echinocactus grusonii, llamado comúnmente asiento de suegra, bola de
        oro, barril de oro, o cactus erizo, es una especie perteneciente a la
        familia Cactaceae. El pequeño género al que pertenece, Echinocactus,
        junto con su género pariente Ferocactus, son vulgarmente conocidos como
        cactus barril.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolaoro;
