import React from "react";
import Garra from "../../assets/garra-oso.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo = document.getElementById('parrafo2');
  parrafo2.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo2);
}

const cardover = () => {
  const parrafo2 = document.getElementById('parrafo2');
  parrafo2.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo2.append(lista)
  lista.append(sex, ref, size, amount);
}

const Garraoso = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Garra de Oso</h2>
      <img src={Garra} alt="Suculenta Garra de oso" />
      <p className="parrafo" id="parrafo2">
        Cotyledon ó (Garra de Oso) Esta gran diferencia se debe a que varias
        especies originalmente descritas como Cotyledon después se agruparon en
        otros taxones, principalmente en los géneros americanos Echeveria y
        Dudleya.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Garraoso;
