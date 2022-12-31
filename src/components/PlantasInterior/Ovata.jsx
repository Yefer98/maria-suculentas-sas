import React from "react";
import ovatar from "../../assets/ovata.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo10 = document.getElementById('parrafo10');
  parrafo10.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo10);
}

const cardover = () => {
  const parrafo10 = document.getElementById('parrafo10');
  parrafo10.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo10.append(lista)
  lista.append(sex, ref, size, amount);
}

const Ovata = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Ovata de Jade</h2>
      <img src={ovatar} alt="Echeveria Setosa" />
      <p className="parrafo" id="parrafo10">
        C. ovata es una planta perenne, con ramas gruesas y hojas carnosas de 3
        a 7 cm, que crecen en pares opuestos a lo largo del tallo. Es originaria
        de África del sur, crece en los laterales de las montañas en lugares
        rocosos y calurosos con lluvias invernales.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Ovata;
