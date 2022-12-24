import React from "react";
import Carousel from './Carousel';
import orejasGato from '../assets/orejas-gato.jpg'

const Main = () => {
  return (
    <main>
        <Carousel />
        <section className="contenedor-main">
        <p>En Sembramos queremos inspirar a otras personas con nuestro amor por las plantas, porque sabemos que el poder de la inspiración es exponencial. A partir de una pequeña acción consciente podemos sembrar semillas en la tierra y en los demás. Por esta razón, en Sembramos encuentras plantas purificadoras de aire, plantas ornamentales, forestales y de flores que contagian a alguien más de vida y de buena energía; plantas aromáticas y frutales que nos proporcionan alimentos orgánicos. Todas nuestras plantas van sembradas en macetas adecuadas a su tamaño, con sustratos especialmente formulados para cada una de ellas y con una guía de cuidados que encontrarás en cada producto de nuestra página web nos aseguramos de que tus plantas estén en óptimas condiciones en su nuevo hogar por mucho más tiempo. Además, pensando en un producto útil, ecológico, decorativo y que participe de un impacto social importante y duradero hemos diseñado Cantharus, el sistema de riego más eficiente del mundo, que ahorra hasta el 70% del agua usada para el riego.

Si quieres aprender sobre jardinería y plantas de interior, a gestionar y aprovechar los residuos orgánicos que generas en tu hogar para producir el mejor abono para tus plantas mediante la lombricultura urbana y a cultivar tus propios alimentos en una huerta casera, inscríbete en nuestros cursos virtuales y presenciales.</p>
        </section>
        
    </main>
  );
};

export default Main;
