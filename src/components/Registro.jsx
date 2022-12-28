import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import usuarios from "../assets/usuarios.png";

const Registro = () => {
  return (
    <>
      <Header />
      <section className="registro">
        <img src={usuarios} alt="usuario" />

        <div class="container-form">
          <h2>Registro Cliente</h2>
          <form name="form" id="form" action="">
            <div class="container-inp">
              <input
                name="nombre"
                class="nombre"
                id="nombre"
                type="text"
                placeholder="Nombre"
              />
              <p class="" id="pnombre"></p>
            </div>
            <div class="container-inp">
              <input
                name="apellido"
                class="apellido"
                id="apellido"
                type="text"
                placeholder="Apellido"
              />
              <p class="" id="papellido"></p>
            </div>
            <div class="container-inp">
              <input
                name="documento"
                class="documento"
                id="documento"
                type="text"
                placeholder="Documento"
              />
              <p class="" id="pdocumento"></p>
            </div>
            <div class="container-inp">
              <input
                name="email"
                class="email"
                id="email"
                type="text"
                placeholder="Email"
              />
              <p class="" id="pcorreo"></p>
            </div>
            <div class="container-inp">
              <input
                name="direccion"
                class="direccion"
                id="direccion"
                type="text"
                placeholder="Dirección"
              />
              <p class="" id="pdireccion"></p>
            </div>

            <div class="container-inp">
              <input
                name="barrio"
                class="barrio"
                id="barrio"
                type="text"
                placeholder="Barrio"
              />
              <p class="" id="barrio"></p>
            </div>

            <div class="container-inp">
              <input
                name="tel"
                class="tel"
                id="tel"
                type="text"
                placeholder="Teléfono"
              />
              <p class="" id="ptel"></p>
            </div>

            <input
              name="enviar"
              class="enviar"
              id=""
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Registro;
