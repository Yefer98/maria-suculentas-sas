import React from "react";
import camandulas from "../../assets/camandula.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo8 = document.getElementById('parrafo8');
  parrafo8.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo8);
}

const cardover = () => {
  const parrafo8 = document.getElementById('parrafo8');
  parrafo8.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo8.append(lista)
  lista.append(sex, ref, size, amount);
}

const Camandula = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Camándula Bolitas Colgantes</h2>
      <img src={camandulas} alt="Camándula Bolitas Colgantes" />
      <p className="parrafo" id="parrafo8">
        Nativa del sudoeste de África, esta crasa perenne forma tapices
        rastreros que enraízan en los nudos. Las hojas son esféricas y miden 6
        mm de diámetro. Las flores blancas y como margaritas, de 12 mm de
        diámetro, brotan sobre pedúnculos de 35 mm en verano. Esta planta se
        cultiva extensamente en cestas colgantes, con tallos péndulos de hojas
        grises que parecen cuentas.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Camandula;
