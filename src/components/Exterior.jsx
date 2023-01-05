import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Echeveria from "./PlantasExterior/Echeveria";
import Faucaria from "./PlantasExterior/Faucaria";
import Garraoso from "./PlantasExterior/Garraoso";
import Orejas from "./PlantasExterior/Orejas";
import Sedum from "./PlantasExterior/Sedum";
import Snegra from "./PlantasExterior/Snegra";

const Exterior = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="plantExt">Plantas para exterior</h1>
        <section className="contenedor">
          <Snegra />
          <Faucaria />
          <Echeveria />
          <Sedum />
          <Garraoso />
          <Orejas />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Exterior;
