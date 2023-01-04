import React from 'react'
import Socials from './Socials'
import pago from "../assets/formas-pago.png"
import envio from "../assets/Servientrega.webp"

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
      <div className='pagos'>
      <h4>Formas de Pago</h4>
      <div>
      <img src={pago} alt="formas de pago"/>
      </div>
      </div>

      <div className='envios'>
        <h4>Medio de Envío</h4>
        <div>
        <img src={envio} alt="" />
        </div>
        
      </div>
      </div>
      <div className='copy'>
        <p>&copy; 2022 Maria Suculentas S.A.S.</p>
      </div>
    </section>
  )
}

export default Footer