import React from "react";
import Aloes from "../../assets/aloe.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo6 = document.getElementById('parrafo6');
  parrafo6.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo6);
}

const cardover = () => {
  const parrafo6 = document.getElementById('parrafo6');
  parrafo6.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo6.append(lista)
  lista.append(sex, ref, size, amount);
}

const Aloe = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Antorcha Aloe</h2>
      <img src={Aloes} alt="Aloe" />
      <p className="parrafo" id="parrafo6">
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
