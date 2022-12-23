import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div>
        <Link to={'/'}><img src={logo} alt="logo" width="70" height="45" title="Home"/></Link>
    </div>
  )
}

export default Logo