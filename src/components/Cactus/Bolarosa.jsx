import React from "react";
import bolar from "../../assets/bola-rosada.jpg";

const Bolarosa = () => {
  return (
    <div className="card">
      <h2>Cactus Bola Rosada</h2>
      <img src={bolar} alt="Bola rosada" />
      <p>
        es una especie fanerógama perteneciente a la familia de las cactáceas,
        endémica de Paraguay y en Argentina, en las provincias de Formosa, Chaco
        y parte de Santiago del Estero, que actualmente se ha extendido por
        todo el mundo.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Bolarosa;
