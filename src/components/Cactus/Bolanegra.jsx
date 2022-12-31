import React from "react";
import bolan from "../../assets/bola-negra.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo12 = document.getElementById('parrafo12');
  parrafo12.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo12);
}

const cardover = () => {
  const parrafo12 = document.getElementById('parrafo12');
  parrafo12.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo12.append(lista)
  lista.append(sex, ref, size, amount);
}

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
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolanegra;
