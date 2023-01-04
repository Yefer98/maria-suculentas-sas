import React from 'react'

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
              <p class="" id="nit"></p>
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
              <p class="" id="pcorreoPro"></p>
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
  )
}

export default RegistroProveedores