import React from "react";
import bonsais from "../../assets/bonsai.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo7 = document.getElementById('parrafo7');
  parrafo7.textContent = 'Portulacaria afra es una especie de plantas con flores del género Portulacaria que a veces se denomina comúnmente "verdolaga arbórea".Pertenece a la familia de las Portulacaceae según la clasificación clásica, oa la de las Didiereaceae según la clasificación filogenética.';
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo7);
}

const cardover = () => {
  const parrafo7 = document.getElementById('parrafo7');
  parrafo7.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Macho";
  ref.textContent = "Referencia: Planta para interior";
  size.textContent = "Tamaño: Max 3 metros de altura";
  amount.textContent = "Cantidad: 5";
  parrafo7.append(lista)
  lista.append(sex, ref, size, amount);
}

const Bonsai = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Bonsai Portulacaria</h2>
      <img src={bonsais} alt="Bonsai" />
      <p className="parrafo" id="parrafo7">
        Portulacaria afra es una especie de plantas con flores del género
        Portulacaria que a veces se denomina comúnmente "verdolaga arbórea".
        Pertenece a la familia de las Portulacaceae según la clasificación
        clásica, oa la de las Didiereaceae según la clasificación filogenética.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bonsai;
