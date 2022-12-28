import React from 'react'
import loging from "../assets/inicio-cliente.png"
import Footer from './Footer'
import Header from './Header'

const InicioSesion = () => {
  return (
    <>
        <Header />
        <section className='customer-login'>
          <img width="660px" src={loging} alt="inicio de sesion" />
          <div className='customer-login-f'>
            <h2>Inicio Sesión cliente</h2>
          <form action="">
            <input type="text" placeholder='Usuario' />
            <input type="password" placeholder='Contraseña'/>
            <input className='inicio' type="submit" value="Inicio de sesión" />
          </form>
          </div>
        </section>
    
        <Footer />
    </> 
  )
}

export default InicioSesion