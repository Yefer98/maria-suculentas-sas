import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Aloe from "./PlantasInterior/Aloe";
import Bonsai from "./PlantasInterior/Bonsai";
import Camandula from "./PlantasInterior/Camandula";
import Collar from "./PlantasInterior/Collar";
import Ovata from "./PlantasInterior/Ovata";
import Piedras from "./PlantasInterior/Piedras";

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
