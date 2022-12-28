import React from "react";
import Bolanegra from "./Cactus/Bolanegra";
import Bolaoro from "./Cactus/Bolaoro";
import Bolarosa from "./Cactus/Bolarosa";
import Gracilis from "./Cactus/gracilis";
import Mammillaria from "./Cactus/mammillaria";
import Utah from "./Cactus/Utah";
import Footer from "./Footer";
import Header from "./Header";

const Cactus = () => {
  return (
    <>
      <Header />
      <h1 className="plantExt">Plantas para exterior</h1>
      <section className="contenedor">
        <Bolanegra />
        <Bolarosa />
        <Bolaoro />
        <Gracilis />
        <Mammillaria />
        <Utah />
      </section>

      <Footer />
    </>
  );
};

export default Cactus;
