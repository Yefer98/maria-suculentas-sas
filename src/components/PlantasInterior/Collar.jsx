import React from "react";
import collares from "../../assets/collar.jfif";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo9 = document.getElementById('parrafo9');
  parrafo9.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo9);
}

const cardover = () => {
  const parrafo9 = document.getElementById('parrafo9');
  parrafo9.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo9.append(lista)
  lista.append(sex, ref, size, amount);
}

const Collar = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Planta Collar de Corazones</h2>
      <img src={collares} alt="Planta Collar de Corazones" />
      <p className="parrafo" id="parrafo9">
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
