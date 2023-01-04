import React from "react";
import Orejasg from "../../assets/orejas-gato.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo = document.getElementById('parrafo3');
  parrafo3.textContent = "Esta especie se suele cultivar como planta de interior por la peculiaridad de su aspecto más que por sus pequeñas flores. Al igual que el resto de las crasuláceas, requiere riegos moderados, una temperatura invernal que no baje de los 5 °C, un sustrato bien drenado con adición de turba o mantillo de hojas y una posición soleada o semisombreada.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo3);
}

const cardover = () => {
  const parrafo3 = document.getElementById('parrafo3');
  parrafo3.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Macho";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: 1 m de altura";
  amount.textContent = "Cantidad: 10";
  parrafo3.append(lista)
  lista.append(sex, ref, size, amount);
}

const Orejas = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Suculenta Orejas de Gato</h2>
      <img src={Orejasg} alt="Suculenta Orejas de Gato" />
      <p className="parrafo" id="parrafo3">
        Esta especie se suele cultivar como planta de interior por la
        peculiaridad de su aspecto más que por sus pequeñas flores. Al igual que
        el resto de las crasuláceas, requiere riegos moderados, una temperatura
        invernal que no baje de los 5 °C, un sustrato bien drenado con adición
        de turba o mantillo de hojas y una posición soleada o semisombreada.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Orejas;
