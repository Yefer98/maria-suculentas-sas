import React from "react";
import uta from "../../assets/utah.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo17 = document.getElementById('parrafo17');
  parrafo17.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo17);
}

const cardover = () => {
  const parrafo17 = document.getElementById('parrafo17');
  parrafo17.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo17.append(lista)
  lista.append(sex, ref, size, amount);
}

const Utah = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Utah</h2>
      <img src={uta} alt="Bola Utah" />
      <p className="parrafo" id="parrafo17">
        Este cactus tiene forma de huevo o un poco redondeado y alcanza un
        tamaño de hasta 6 centímetros de altura y aproximadamente 9 de ancho, y
        en general no tiene ramas. Se encoge de tamaño y desaparece bajo la
        tierra en tiempos secos y fríos, por lo que es difícil de encontrar en
        la mayoría del año.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Utah;
