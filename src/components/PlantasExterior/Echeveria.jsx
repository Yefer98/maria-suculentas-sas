import React from "react";
import Echeverias from "../../assets/Echeveria.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo = document.getElementById('parrafo');
  parrafo.textContent = "Surge de una roseta suculenta casi sin tallo con 7 - 15 cm de altura según la variedad y de la que surgen de 4 a 6 inflorescencias ramosas que alcanzan los 20 cm de altura. Flores rojas y amarillas en la primavera y principios de verano.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo);
}

const cardover = () => {
  const parrafo = document.getElementById('parrafo');
  parrafo.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: 7 - 15 cm de altura";
  amount.textContent = "Cantidad: 100";
  parrafo.append(lista)
  lista.append(sex, ref, size, amount);
}

const Echeveria = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Echeveria Setosa</h2>
      <img src={Echeverias} alt="Echeveria Setosa" />
      <p className="parrafo" id="parrafo">
        Surge de una roseta suculenta casi sin tallo con 7 - 15 cm de altura
        según la variedad y de la que surgen de 4 a 6 inflorescencias ramosas
        que alcanzan los 20 cm de altura. Flores rojas y amarillas en la
        primavera y principios de verano.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Echeveria;
