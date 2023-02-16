import React from 'react'
import logoinner from '../assets/logoinner.png'
import logobg from '../assets/logoouter.png'

function Nav() {
  return (
    <div className='header'>
        <h1 className='logo'>
          <span className='l'>l</span>
          <img src={logobg} className='bg'/>
         <img src={logoinner} className='o'/>
          <span className='y'>yalbaze</span></h1>
        <button className='nav_btn'>Request a call</button>
    </div>
  )
}

export default Nav