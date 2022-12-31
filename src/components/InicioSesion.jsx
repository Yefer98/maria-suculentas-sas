import React from 'react'
import Footer from './Footer'
import Header from './Header'
import loginUser from '../assets/inicio-cliente.png'

const InicioSesion = () => {
  return (
    <>
        <Header />
        <section className='customer-login'>
          <div className='customer-login-f'>
            <img src={loginUser} alt="" />
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