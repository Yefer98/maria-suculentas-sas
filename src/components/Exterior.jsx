import React from "react";
import NavBar from "./NavBar";
import Echeveria from "./PlantasExterior/Echeveria";
import Faucaria from "./PlantasExterior/Faucaria";
import Garraoso from "./PlantasExterior/Garraoso";
import Orejas from "./PlantasExterior/Orejas";
import Sedum from "./PlantasExterior/Sedum";
import Snegra from "./PlantasExterior/Snegra";


const Exterior = () => {
  return (
    <>
      <NavBar />
      <section className="contenedor">
        <Snegra />
        <Faucaria />
        <Echeveria />
        <Sedum />
        <Garraoso />
        <Orejas />

      </section>
    </>
  );
};

export default Exterior;
