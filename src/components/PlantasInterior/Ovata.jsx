import React from "react";
import ovatar from "../../assets/ovata.jpg";

const Ovata = () => {
  return (
    <div className="card">
      <h2>Suculenta Ovata de Jade</h2>
      <img src={ovatar} alt="Echeveria Setosa" />
      <p>
        C. ovata es una planta perenne, con ramas gruesas y hojas carnosas de 3
        a 7 cm, que crecen en pares opuestos a lo largo del tallo. Es originaria
        de África del sur, crece en los laterales de las montañas en lugares
        rocosos y calurosos con lluvias invernales.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Ovata;
