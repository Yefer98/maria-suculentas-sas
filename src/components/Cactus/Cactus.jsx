import React from "react";
import Bolanegra from "./Bolanegra";
import Bolaoro from "./Bolaoro";
import Bolarosa from "./Bolarosa";
import CGracilis from "./CGracilis";
import CMammillaria from "./CMammillaria";
import Utah from "./Utah";
import Footer from "../Footer";
import Header from "../Header";

const Cactus = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="plantExt">Cactus</h1>
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
