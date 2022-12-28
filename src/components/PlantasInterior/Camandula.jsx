import React from "react";
import camandulas from "../../assets/camandula.jpg";

const Camandula = () => {
  return (
    <div className="card">
      <h2>Camándula Bolitas Colgantes</h2>
      <img src={camandulas} alt="Camándula Bolitas Colgantes" />
      <p>
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
