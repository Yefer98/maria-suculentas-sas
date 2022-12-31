import React from "react";
import mammi from "../../assets/mammillaria.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo16 = document.getElementById('parrafo16');
  parrafo16.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo16);
}

const cardover = () => {
  const parrafo16 = document.getElementById('parrafo16');
  parrafo16.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo16.append(lista)
  lista.append(sex, ref, size, amount);
}

const CMammillaria = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Mammillaria</h2>
      <img src={mammi} alt="mammillaria" />
      <p className="parrafo" id="parrafo16">
        Es una especie de pequeño tamaño, como máximo 13 cm de altura. Los
        tallos (hasta unos 4 cm de diámetro), de color verde azulado, son algo
        globosos o cilíndricos, profusamente ramificados.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default CMammillaria;
