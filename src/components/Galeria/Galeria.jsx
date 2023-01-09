import React from "react";
import Drosera from "./Drosera";
import Lithops from "./Lithops";
import Moringa from "./Moringa";
import RicinoRojo from "./RicinoRojo";
import RicinoVerde from "./RicinoVerde";
import SanchaInchi from "./SanchaInchi";

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
