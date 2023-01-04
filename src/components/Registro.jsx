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
              id="enviar"
              type="submit"
              value="Registrarme"
            />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const nombre = document.getElementById("nombre");
const pnombre = document.querySelector("#pnombre");
const apellido = document.getElementById("apellido");
const papellido = document.querySelector("#papellido");
const documento = document.getElementById("documento");
const pdocumento = document.querySelector("#pdocumento");
const correo = document.getElementById("email");
const pcorreo = document.querySelector("#pemail");
const direccion = document.getElementById("direccion");
const pdireccion = document.querySelector("#pdireccion");
const barrio = document.getElementById("barrio");
const pbarrio = document.querySelector("#pbarrio");
const tel = document.getElementById("tel");
const ptel = document.querySelector("#ptel");

let textoCorto = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;
let textoNum = /^[a-zA-Z0-9#-\s]{1,30}$/;
let numero = /^[\d+]{1,50}$/;
let decimal = /^[.\d+]{1,50}$/;
let email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const validacionForm = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (textoCorto.test(e.target.value)) {
        nombre.classList.remove("incorrecto");
        nombre.classList.add("correcto");
        pnombre.textContent = "";
      } else {
        nombre.classList.add("incorrecto");
        nombre.classList.remove("correcto");
        pnombre.textContent = "Solo se permiten letras.";
      }
      break;
    case "apellido":
      if (textoCorto.test(e.target.value)) {
        apellido.classList.remove("incorrecto");
        apellido.classList.add("correcto");
        papellido.textContent = "";
      } else {
        apellido.classList.add("incorrecto");
        apellido.classList.remove("correcto");
        papellido.textContent = "Solo se permiten letras.";
      }
      break;
    case "documento":
      if (decimal.test(e.target.value)) {
        documento.classList.remove("incorrecto");
        documento.classList.add("correcto");
        pdocumento.textContent = "";
      } else {
        documento.classList.add("incorrecto");
        documento.classList.remove("correcto");
        pdocumento.textContent = "Solo se permiten números.";
      }
      break;
    case "correo":
      if (email.test(e.target.value)) {
        correo.classList.remove("incorrecto");
        correo.classList.add("correcto");
        pcorreo.textContent = "";
      } else {
        correo.classList.add("incorrecto");
        correo.classList.remove("correcto");
        pcorreo.textContent = "Puedes usar letras, números y @.";
      }
      break;
    case "direccion":
      if (textoNum.test(e.target.value)) {
        direccion.classList.remove("incorrecto");
        direccion.classList.add("corecto");
        pdireccion.textContent = "";
      } else {
        direccion.classList.add("incorrecto");
        direccion.classList.remove("correcto");
        pdireccion.textContent = "Puedes usar letras y números.";
      }
      break;
    case "barrio":
      if (textoCorto.test(e.target.value)) {
        barrio.classList.remove("incorrecto");
        barrio.classList.add("correcto");
        pbarrio.textContent = "";
      } else {
        barrio.classList.add("incorrecto");
        barrio.classList.remove("correcto");
        pbarrio.textContent = "Puedes usar solo letras.";
      }
      break;
    case "tel":
      if (numero.test(e.target.value)) {
        tel.classList.remove("incorrecto");
        tel.classList.add("correcto");
        ptel.textContent = "";
      } else {
        tel.classList.add("incorrecto");
        tel.classList.remove("correcto");
        ptel.textContent = "Solo se permiten números.";
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validacionForm);
  input.addEventListener("blur", validacionForm);
});

export default Registro;


