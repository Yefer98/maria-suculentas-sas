import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Echeveria from "./Echeveria";
import Faucaria from "./Faucaria";
import Garraoso from "./Garraoso";
import Orejas from "./Orejas";
import Sedum from "./Sedum";
import Snegra from "./Snegra";

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
