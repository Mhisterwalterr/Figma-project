import React from 'react'
import { Link } from 'react-router-dom';
import './Address.css'
import { BsArrowLeftShort } from "react-icons/bs";
import Button from '../../Component/Button/Button';



function Address() {
  return (
    <div className='addressContainer'>
      <div>
      <div className='addressHeader'>
        <Link to='/cart'>
      <BsArrowLeftShort className='addressArrow'/>
      </Link>
      <p>Address</p>
      </div>
      <div className='addressDelivery'>
        <h1>Delivery</h1>
      </div>
      <div className='addressChange'>
        <h3>Address details</h3>
        <p>Change</p>
      </div>
      <div className='addressInfo'>
        <div className='class'>
          <h3>Akaeme Chidera</h3>
        </div>
        <div className='class'>
          <h3>Alade close</h3>
        </div>
        <div className='class'>
          <h4>09029935318</h4>
        </div>
      </div>
      </div>
      <Link to='/checkout'>
      <div className='addressButton'>
        
      <Button name='Confirm Address' bgcolor='yellow' />
        
      </div>
      </Link>
    </div>
  )
}

export default Address