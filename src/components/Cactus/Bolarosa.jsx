import React from "react";
import bolar from "../../assets/bola-rosada.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo14 = document.getElementById('parrafo14');
  parrafo14.textContent = "Es una especie fanerógama perteneciente a la familia de las cactáceas, endémica de Paraguay y en Argentina, en las provincias de Formosa, Chaco y parte de Santiago del Estero, que actualmente se ha extendido por todo el mundo.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo14);
}

const cardover = () => {
  const parrafo14 = document.getElementById('parrafo14');
  parrafo14.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Macho";
  ref.textContent = "Referencia: Cactus";
  size.textContent = "Tamaño: Max 15 centímetros de altura";
  amount.textContent = "Cantidad: 100";
  parrafo14.append(lista)
  lista.append(sex, ref, size, amount);
}

const Bolarosa = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Cactus Bola Rosada</h2>
      <img src={bolar} alt="Bola rosada" />
      <p className="parrafo" id="parrafo14">
        Es una especie fanerógama perteneciente a la familia de las cactáceas,
        endémica de Paraguay y en Argentina, en las provincias de Formosa, Chaco
        y parte de Santiago del Estero, que actualmente se ha extendido por
        todo el mundo.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolarosa;
