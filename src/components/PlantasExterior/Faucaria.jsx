import React from "react";
import Faucari from "../../assets/Faucaria-tigrina.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo1 = document.getElementById('parrafo1');
  parrafo1.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo1);
}

const cardover = () => {
  const parrafo1 = document.getElementById('parrafo1');
  parrafo1.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo1.append(lista)
  lista.append(sex, ref, size, amount);
  console.log("Stats")
}

const Faucaria = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Faucaria Tigrina</h2>
      <img src={Faucari} alt="Faucaria-tigrina" />
      <p className="parrafo" id="parrafo1">
        Las faucarias amarillas o amarillo doradas, nacen solitarias o en
        parejas, son sésiles de unos 3 a 5 cm de diámetro y surgen del centro de
        cada roseta. La floración se da en otoño, en ejemplares de dos años o
        incluso más jóvenes.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Faucaria;
