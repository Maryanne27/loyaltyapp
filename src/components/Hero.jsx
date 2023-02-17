import React, { useState } from 'react'
import imgicon from '../assets/imgiconn.png'
import mail from '../assets/mailicon.png'
import starsm from '../assets/Star 3.png'
import starmd from '../assets/Star 1.png'
import circlesm from '../assets/circlesm.png'
import circlemd from '../assets/circlemd.png'
import circlebg from '../assets/circlebg.png'
import arrow from '../assets/arrow.png'


function Hero() {
 return (
    <section className='hero py-5'>
      <div className='images'>
      <span className='assets1'>
      <img src={starsm} alt="" className='starsm'/>
      </span>
      <span className='assets1'>
      <img src={starsm} alt="" className='starsm2'/>
      </span>
      <span className='assets2'>
      <img src={starmd} alt="" className='starmd' />
      </span>
      <span className='assets2'>
      <img src={starmd} alt="" className='starmd2'/>
      </span>
      <span className='assets3'>
      <img src={arrow} alt="" className='arrow'/>
      </span>
      <span className='assets4'>
      <img src={circlemd} alt="" className='circlemd' />
      </span>
     
      <span className='assets5'>
      <img src={circlesm} alt=""  className='circlesm'/>
      </span>
      <span className='assets'>
      <img src={circlebg} alt="" className='circlebg'/>
      </span>
  </div>
    <div className='text-center'>
        <h1>Turn your best customers<br/> into <span className='purple'>Loyal fans</span></h1>
        <p>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze.
           Join the waiting list now to be among the first to experience the future of the customer loyalty.</p>
        <form action="" className='pt-3'>
   <div className="input">
     <img src={imgicon} alt="" className='icon'/>
        <input type="text" placeholder='Tell us your name' className='py-1 px-2'/>
        </div>
        <div className="input">
          <img src={mail} alt="" className='icon'/>
        <input type="email" placeholder='Enter your email address' className='py-1 px-2'/>
        </div>  
        </form>
      
        <button className='btn'>Get early access</button>
        <small><span className='blue'>G</span>
        <span className='pink'>O</span>
        <span className='blue'>U</span><span className='pink'>M </span> <span className='joined'> +57 Joined</span></small>
       </div>
       </section>
  )
}

export default Hero