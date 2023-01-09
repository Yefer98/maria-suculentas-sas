import React from "react";

const RegistroProveedores = () => {
  return (
    <section className="controlP">
      <div class="container-formulario">
        <h2>Control de Proveedores</h2>
        <form name="form" id="form" action="">
          <div class="container-inp">
            <input
              name="nombrePro"
              class="nombrePro"
              id="nombrePro"
              type="text"
              placeholder="Nombre del Proveedor"
            />
            <p class="" id="pnombrePro"></p>
          </div>
          <div class="container-inp">
            <input
              name="nit"
              class="nit"
              id="nit"
              type="text"
              placeholder="NIT"
            />
            <p class="" id="pnit"></p>
          </div>
          <div class="container-inp">
            <input
              name="direccionPro"
              class="direccionPro"
              id="direccionPro"
              type="text"
              placeholder="Dirección del Proveedor"
            />
            <p class="" id="pdireccionPro"></p>
          </div>
          <div class="container-inp">
            <input
              name="telefono"
              class="telefono"
              id="telefono"
              type="text"
              placeholder="Teléfono del Proveedor"
            />
            <p class="" id="ptelefono"></p>
          </div>
          <div class="container-inp">
            <input
              name="emailPro"
              class="emailPro"
              id="emailPro"
              type="text"
              placeholder="Email"
            />
            <p class="" id="pemailPro"></p>
          </div>
          <div class="container-inp">
            <input
              name="nombreProd"
              class="nombreProd"
              id="nombreProd"
              type="text"
              placeholder="Nombre del Producto comprado"
            />
            <p class="" id="pnombreProd"></p>
          </div>
          <div class="container-inp">
            <textarea
              name="descripcionEmpre"
              class="descripcionEmpre"
              id="descripcionEmpre"
              type="text"
              placeholder="Descripcion de la Empresa"
            />
            <p class="" id="pdescripcionEmpre"></p>
          </div>
          <div class="container-inp">
            <textarea
              name="descripcionProducto"
              class="descripcionProducto"
              id="descripcionProducto"
              type="text"
              placeholder="Descripcion del Producto"
            />
            <p class="" id="pdescripcionProducto"></p>
          </div>
          <input
            name="enviarPro"
            class="enviarPro"
            id="enviarPro"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
    </section>
  );
};

const form = document.getElementById("form");
const input = document.querySelectorAll("#form input");
const nombrePro = document.getElementById("nombrePro");
const pnombrePro = document.querySelector("#pnombrePro");
const nit = document.getElementById("nit");
const pnit = document.querySelector("#pnit");
const direccionPro = document.getElementById("direccionPro");
const pdireccionPro = document.querySelector("#pdireccionPro");
const telPro = document.getElementById("telPro");
const ptelPro = document.querySelector("#ptelPro");
const emailPro = document.getElementById("emailPro");
const pemailPro = document.querySelector("#pemailPro");
const nombrepnombreProd = document.getElementById("nombreProd");
const pnombreProd = document.querySelector("#pnombreProd");
const descripcionEmpre = document.getElementById("descripcionEmpre");
const pdescripcionEmpre = document.querySelector("#pdescripcionEmpre");
const descripcionProducto = document.getElementById("descripcionProducto");
const pdescripcionProducto = document.querySelector("#pdescripcionProducto");

let textoCorto = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;
let textoNum = /^[a-zA-Z0-9#-\s]{1,30}$/;
let numero = /^[\d+]{1,50}$/;
let email =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const validacionForm = (e) => {
  switch (e.target.name) {
    case "nombrePro":
      if (textoCorto.test(e.target.value)) {
        nombrePro.classList.remove("incorrecto");
        nombrePro.classList.add("correcto");
        pnombrePro.textContent = "";
      } else {
        nombrePro.classList.add("incorrecto");
        nombrePro.classList.remove("correcto");
        pnombrePro.textContent = "Solo se permiten letras.";
      }
      break;
    case "nit":
      if (numero.test(e.target.value)) {
        nit.classList.remove("incorrecto");
        nit.classList.add("correcto");
        pnit.textContent = "";
      } else {
        nit.classList.add("incorrecto");
        nit.classList.remove("correcto");
        pnit.textContent = "Solo se permiten numeros.";
      }
      break;
    case "direccionPro":
      if (textoNum.test(e.target.value)) {
        direccionPro.classList.remove("incorrecto");
        direccionPro.classList.add("corecto");
        pdireccionPro.textContent = "";
      } else {
        direccionPro.classList.add("incorrecto");
        direccionPro.classList.remove("correcto");
        pdireccionPro.textContent = "Puedes usar letras y números.";
      }
      break;
    case "telPro":
      if (numero.test(e.target.value)) {
        telPro.classList.remove("incorrecto");
        telPro.classList.add("correcto");
        ptelPro.textContent = "";
      } else {
        telPro.classList.add("incorrecto");
        telPro.classList.remove("correcto");
        ptelPro.textContent = "Solo se permiten números.";
      }
      break;
    case "email":
      if (email.test(e.target.value)) {
        emailPro.classList.remove("incorrecto");
        emailPro.classList.add("correcto");
        pemailPro.textContent = "";
      } else {
        emailPro.classList.add("incorrecto");
        emailPro.classList.remove("correcto");
        pemailPro.textContent = "Puedes usar letras, números y @.";
      }
      break;
    case "nombreProd":
      if (textoCorto.test(e.target.value)) {
        nombrepnombreProd.classList.remove("incorrecto");
        nombrepnombreProd.classList.add("correcto");
        pnombreProd.textContent = "";
      } else {
        nombrepnombreProd.classList.add("incorrecto");
        nombrepnombreProd.classList.remove("correcto");
        pnombreProd.textContent = "Solo se permiten números.";
      }
      break;

    case "descripcionEmpre":
      if (textoCorto.test(e.target.value)) {
        descripcionEmpre.classList.remove("incorrecto");
        descripcionEmpre.classList.add("correcto");
        pdescripcionEmpre.textContent = "";
      } else {
        descripcionEmpre.classList.add("incorrecto");
        descripcionEmpre.classList.remove("correcto");
        pdescripcionEmpre.textContent = "Puedes usar solo letras.";
      }
      break;
    case "descripcionProducto":
      if (textoCorto.test(e.target.value)) {
        descripcionProducto.classList.remove("incorrecto");
        descripcionProducto.classList.add("correcto");
        pdescripcionProducto.textContent = "";
      } else {
        descripcionProducto.classList.add("incorrecto");
        descripcionProducto.classList.remove("correcto");
        pdescripcionProducto.textContent = "Puedes usar solo letras.";
      }
      break;
  }
};

input.forEach((input) => {
  input.addEventListener("keyup", validacionForm);
  input.addEventListener("blur", validacionForm);
});

export default RegistroProveedores;
