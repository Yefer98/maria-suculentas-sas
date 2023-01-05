import React from "react";
import Drosera from "./Galeria/Drosera";
import Lithops from "./Galeria/Lithops";
import Moringa from "./Galeria/Moringa";
import RicinoRojo from "./Galeria/RicinoRojo";
import RicinoVerde from "./Galeria/RicinoVerde";
import SanchaInchi from "./Galeria/SanchaInchi";

const Galeria = () => {
  return (
    <div className="semillas">
      <h2>Semillas</h2>
      <section className="galeria">
        <Drosera />
        <Lithops />
        <Moringa />
        <RicinoRojo />
        <RicinoVerde />
        <SanchaInchi />
      </section>
    </div>
  );
};

export default Galeria;
