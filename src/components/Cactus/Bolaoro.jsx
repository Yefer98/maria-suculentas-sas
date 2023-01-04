import React from "react";
import bolaor from "../../assets/bola-oro.webp";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo13 = document.getElementById('parrafo13');
  parrafo13.textContent = "Echinocactus grusonii, llamado comúnmente asiento de suegra, bola de oro, barril de oro, o cactus erizo, es una especie perteneciente a la familia Cactaceae. El pequeño género al que pertenece, Echinocactus, junto con su género pariente Ferocactus, son vulgarmente conocidos como cactus barril.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo13);
}

const cardover = () => {
  const parrafo13 = document.getElementById('parrafo13');
  parrafo13.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Cactus";
  size.textContent = "Tamaño: Altura: 25 cm";
  amount.textContent = "Cantidad: 65";
  parrafo13.append(lista)
  lista.append(sex, ref, size, amount);
}

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
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolaoro;
