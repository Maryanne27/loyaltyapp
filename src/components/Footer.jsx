import React from 'react'

import {FaPhoneAlt, FaHome} from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col-lg-4'>
          <p><FaHome /> 2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
        </div>

        <div className='second col-lg-4'>
          <p>Loyalbaze is almost here</p>
        </div>
        <div className='col-lg-4'>
          <p><FaPhoneAlt /> +234 903 618 9485</p>
        </div>
      </div>

    </div>
  )
}

export default Footer