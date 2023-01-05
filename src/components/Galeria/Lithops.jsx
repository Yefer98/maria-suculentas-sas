import React from "react";
import semillaLithops from "../../assets/semilla-lithops.jpg";
import lithops from "../../assets/Lithops.jpg";

const overLithops = () => {
  const semillaLithops = document.querySelector("#semillaLithops");
  const Lithops = document.querySelector("#lithops");
  Lithops.style.transform = "translateX(0%)";
  semillaLithops.style.transform = "translateX(100%)";
};

const outLithops = () => {
  const semillaLithops = document.querySelector("#semillaLithops");
  const Lithops = document.querySelector("#lithops");
  Lithops.style.transform = "translateX(-100%)";
  semillaLithops.style.transform = "translateX(0%)";
};

const Lithops = () => {
  return (
    <div className="contenedor-semilla">
      <div
        className="imagenes"
        onMouseOver={overLithops}
        onMouseOut={outLithops}
      >
        <img className="imagen" id="lithops" src={lithops} alt="lithops" />
        <img
          className="imagen"
          id="semillaLithops"
          src={semillaLithops}
          alt="semillaLithops"
        />
      </div>
      <h4>Semillas Lithops</h4>
    </div>
  );
};

export default Lithops;
