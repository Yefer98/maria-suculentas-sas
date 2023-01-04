import React from "react";
import suculenta_negra from "../../assets/suculenta_negra.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo = document.getElementById('parrafo5');
  parrafo5.textContent = "Esta planta en el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo5);
}

const cardover = () => {
  const parrafo5 = document.getElementById('parrafo5');
  parrafo5.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Macho";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: 60-90 cm de alto y 15-20 cm de ancho";
  amount.textContent = "Cantidad: 30";
  parrafo5.append(lista)
  lista.append(sex, ref, size, amount);
}

const Snegra = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Negra</h2>
      <img src={suculenta_negra} alt="Suculenta Negra" />
      <p className="parrafo" id="parrafo5">
        Esta planta en el sol, su color es casi negro, lo que provoca un bello
        contraste con otras plantas en un jardín. Por otro lado, en la sombra
        parcial llega a tomar un color púrpura con tonos verdes al centro.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Snegra;
