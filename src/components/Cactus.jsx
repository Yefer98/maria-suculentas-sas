import React from "react";
import Bolanegra from "./Cactus/Bolanegra";
import Bolaoro from "./Cactus/Bolaoro";
import Bolarosa from "./Cactus/Bolarosa";
import CGracilis from "./Cactus/CGracilis";
import CMammillaria from "./Cactus/CMammillaria";
import Utah from "./Cactus/Utah";
import Footer from "./Footer";
import Header from "./Header";

const Cactus = () => {
  return (
    <>
      <Header />
      <main>
      <h1 className="plantExt">Plantas para exterior</h1>
      <section className="contenedor">
        <Bolanegra />
        <Bolarosa />
        <Bolaoro />
        <CGracilis />
        <CMammillaria />
        <Utah />
      </section>

      <Footer />
      </main>
    </>
  );
};

export default Cactus;
