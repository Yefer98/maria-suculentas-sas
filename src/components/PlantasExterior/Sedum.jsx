import React from "react";
import Sedumm from "../../assets/Sedum.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo = document.getElementById('parrafo4');
  parrafo4.textContent = "Son plantas anuales o perennes, a veces rizomatosas, con hojas carnosas generalmente enteras, planas o cilíndricas, alternas, aunque ocasionalmente pueden ser opuestas, verticiladas o agrupadas en rosetas basales, generalmente sésiles.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo4);
}

const cardover = () => {
  const parrafo4 = document.getElementById('parrafo4');
  parrafo4.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: 30 cm de longitud";
  amount.textContent = "Cantidad: 20";
  parrafo4.append(lista)
  lista.append(sex, ref, size, amount);
}

const Sedum = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Sedum morganianum</h2>
      <img src={Sedumm} alt="Sedum morganianum" />
      <p className="parrafo" id="parrafo4">
        Son plantas anuales o perennes, a veces rizomatosas, con hojas carnosas
        generalmente enteras, planas o cilíndricas, alternas, aunque
        ocasionalmente pueden ser opuestas, verticiladas o agrupadas en rosetas
        basales, generalmente sésiles.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Sedum;
