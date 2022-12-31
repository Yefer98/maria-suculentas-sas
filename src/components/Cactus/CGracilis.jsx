import React from "react";
import graci from "../../assets/gracilis.jfif";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo15 = document.getElementById('parrafo15');
  parrafo15.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo15);
}

const cardover = () => {
  const parrafo15 = document.getElementById('parrafo15');
  parrafo15.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo15.append(lista)
  lista.append(sex, ref, size, amount);
}

const CGracilis = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Gracilis</h2>
      <img src={graci} alt="gracilis" />
      <p className="parrafo" id="parrafo15">
        Se trata de una planta que crece por separado con tallos esféricos o
        cilíndricos, y alcanza un diámetro de 30 cm y una altura de 150
        centímetros. Tiene entre 16 y 24 costillas, con 7 a 13 espinas centrales
        de color rojo, ligeramente curvadas en gancho y de color amarillo de
        hasta 7 cm de largo. Los cuatro espinas principales están dispuestos en
        pares opuestos.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default CGracilis;
