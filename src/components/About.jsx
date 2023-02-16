import React from 'react'
import line from '../assets/scribbedline.png'

import starsm from '../assets/Star 3.png'
import starmd from '../assets/Star 1.png'
import circlesm from '../assets/circlesm.png'

function About() {
  return (
    <section className='about'>
      <div className="images">
       <span className='assets5'>
      <img src={circlesm} alt="" className='circlesm2' />
      </span>
      <span className='assets1'>
      <img src={starsm} alt="" className='starsm3'/>
      </span>
      <span className='assets2'>
      <img src={starmd} alt="" className='starmd3' />
      </span>
      <span className='assets2'>
      <img src={starmd} alt="" className='starmd4' />
      </span>
      </div>
      <div className='row'>
        <div className='col-lg-6 text'>
          <h1>What we do</h1>
          <div className='line'>
            <img src={line} alt="" />
          </div>
          <p>Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.</p>
        </div>
        <div className='col-lg-6 container'>
          <div className='form-head'>
          <h3 className='mb-3'>Book a consultation with us</h3>
          </div>
          <div className=' input_container'>
          <div className="mb-4">
            <input type="text" className="form-control"  placeholder="Enter your full name" />
          </div>
          <div className="mb-4">
            <input type="email" className="form-control"  placeholder="Enter your work email" />
          </div>
          <div className="mb-4">
            <input type="number" className="form-control" placeholder="Mobile number" />
          </div>
          <div className="mb-4">
            <input type="text" className="form-control" placeholder="Company name " />
          </div>
          <div className="mb-4">
            <select id="inputState" className="form-select" >
              <option selected>Select Country</option>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>...</option>
            </select>
          </div>
      
          <textarea id="" cols="30" rows="10">Drop a message...</textarea>
         
          <button className='btn'>Send Request</button>
         </div> 
        </div>
      </div>
    </section>
  )
}

export default About