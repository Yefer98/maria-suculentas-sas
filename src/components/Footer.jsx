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
          <li></li>
          <li></li>
          <li></li>
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