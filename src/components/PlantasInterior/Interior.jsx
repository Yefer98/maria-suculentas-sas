import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Aloe from "./Aloe";
import Bonsai from "./Bonsai";
import Camandula from "./Camandula";
import Collar from "./Collar";
import Ovata from "./Ovata";
import Piedras from "./Piedras";

const Interior = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="plantExt">Plantas para interior</h1>
        <section className="contenedor">
          <Aloe />
          <Bonsai />
          <Camandula />
          <Collar />
          <Ovata />
          <Piedras />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Interior;
