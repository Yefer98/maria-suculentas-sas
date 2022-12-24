import React from 'react'
import whatsapp from '../assets/Whatsapp-logo.png'
import facebook from '../assets/facebook-logo.webp'
import instagram from '../assets/Instagram-logo.webp'
import twitter from '../assets/twitter-logo.png'
import youtube from '../assets/Youtube-logo.png'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='socials'>
        <img src={whatsapp} alt="Whatsapp" title="Whatsapp" />
        <img src={facebook} alt="Facebook" title="Facebook" />
        <img src={instagram} alt="Instagram" title='Instagram'/>
        <img src={twitter} alt="Twitter" title='Twitter' />
        <img src={youtube} alt="Youtube" title='Youtube' />
      </div>
      <div className='referencias'>

      </div>
    </section>
  )
}

export default Footer