import React from 'react'
import whatsapp from '../assets/Whatsapp-logo.png'
import facebook from '../assets/facebook-logo.webp'
import instagram from '../assets/Instagram-logo.webp'
import twitter from '../assets/twitter-logo.png'
import youtube from '../assets/Youtube-logo.png'

const Socials = () => {
  return (
    <>
    <h5>Redes sociales</h5>
    <div className='socials'>
      <a href="https://web.whatsapp.com/"target="_blank">
        <img src={whatsapp} alt="Whatsapp" title="Whatsapp" />
      </a>
      <a href="https://facebook.com/"target="_blank">
        <img src={facebook} alt="Facebook" title="Facebook" />
      </a>
      <a href="https://instagram.com/"target="_blank">
        <img src={instagram} alt="Instagram" title='Instagram'/>
      </a>
      <a href="https://twitter.com/"target="_blank">
        <img src={twitter} alt="Twitter" title='Twitter' />
      </a>
      <a href="https://youtube.com/"target="_blank">
        <img src={youtube} alt="Youtube" title='Youtube' />
      </a>
    </div>
    </>
  )
}

export default Socials