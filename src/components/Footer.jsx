import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footerrow'>
      <div className='contacto'>
        <h4>Contacto</h4><br />
        <p><b>Correo:</b> mariasuculentassas@gmail.com</p>
        <p><b>Telefono:</b> +57 321 045 3980</p><br />
        <Socials />
      </div>
      <div className='referencias'>
        <h3>Referencias</h3>
        <ul>
          <li> <a href="https://es.wikipedia.org/wiki/Sedum">Sedum</a></li>
          <li> <a href="https://es.wikipedia.org/wiki/Kalanchoe_tomentosa">Orejas de Gato</a></li>
          <li> <a href="https://es.wikipedia.org/wiki/Cotyledo">Cotyledon</a></li>
          <li> <a href="https://es.wikipedia.org/wiki/Faucaria">Faucaria</a></li>
          <li> <a href="https://www.cocinafacil.com.mx/tips-de-cocina/suculenta-flor-negra/#:~:text=La%20suculenta%20flor%20negra%2C%20conocida,otras%20plantas%20en%20un%20jard%C3%ADn.">Suculenta Negra</a></li>
          <li> <a href="https://es.wikipedia.org/wiki/Echeveria_setosa">Echeveria Setosa</a></li>
        </ul>
      </div>
      </div>
      <div className='copy'>
        <p>&copy; 2022 Maria Suculentas S.A.S.</p>
      </div>
    </section>
  )
}

export default Footer