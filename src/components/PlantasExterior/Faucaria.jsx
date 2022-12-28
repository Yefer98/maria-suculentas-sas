import React from "react";
import Faucari from "../../assets/Faucaria-tigrina.jpg";

const Faucaria = () => {
  return (
    <div className="card">
      <h2>Faucaria Tigrina</h2>
      <img src={Faucari} alt="Faucaria-tigrina" />
      <p>
        Las faucarias amarillas o amarillo doradas, nacen solitarias o en
        parejas, son sésiles de unos 3 a 5 cm de diámetro y surgen del centro de
        cada roseta. La floración se da en otoño, en ejemplares de dos años o
        incluso más jóvenes.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Faucaria;
