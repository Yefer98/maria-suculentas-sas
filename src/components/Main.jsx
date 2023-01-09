import React from "react";
import Carousel from "./Carousel";
import Galeria from "./Galeria/Galeria";

const Main = () => {
  return (
    <main>
      <Carousel />
      <section className="contenedor-main">
        <h2>Sobre Nosotros ... </h2>
        <p>
          En Marías Suculentas S.A.S, queremos inspirar a todas las personas
          amantes de las plantas a hacer parte de nuestra comunidad, porque
          sabemos que el poder de la inspiración es exponencial y cómo ayudan
          con nuestro apoyo emocional estas plantas. <br />
          A partir de una pequeña acción consciente podemos sembrar semillas en
          la tierra y en los demás. Por esta razón, en Marías Suculentas S.A.S
          encuentras plantas purificadoras de aire, plantas ornamentales,
          forestales y de flores que contagian a alguien más de vida y de buena
          energía ayudando con problemas emocionales y haciéndote sentir de la
          mejor manera. Todas nuestras plantas van sembradas en macetas
          adecuadas a su tamaño, con sustratos especialmente formulados para
          cada una de ellas y con una guía de cuidados por cuenta de nosotros
          que encontrarás en cada producto de nuestra página web; nos aseguramos
          de que tus plantas estén en óptimas condiciones en su nuevo hogar por
          mucho más tiempo. Además, pensando en un producto útil, ecológico,
          decorativo y que participe de un impacto social para el control
          psicológico de tus emociones. <br />
          Si quieres aprender sobre jardinería, plantas de interior, plantas de
          exterior, tipos de cactus y cómo mejorar tus emociones con nuestras
          pequeñas, no olvides seguirnos en nuestras redes sociales y entérate
          de todos nuestros Tips con Marías Suculentas S.A.S
        </p>
      </section>
      <Galeria />
    </main>
  );
};

export default Main;
