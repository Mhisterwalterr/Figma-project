import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import './Order.css'
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import Button from '../../Component/Button/Button';


const Orders = () => {
  return (
    <div className='orderContainer'>
      <div className='orderIcon'>
        <Link to='/menu'>
        <IoIosArrowBack  className='orderArrow'/>
        </Link>
        <p>orders</p>
      </div>
      <div className='orderImage'>
         <BsCart2 className='cartIcon'/>
         <h1>No orders yet</h1>
         <p>Hit the orange button down <br /> below to Creat an order </p>
      </div>
      <div className='orderBtn'>
        <Button  name={'Start ordering'} bgcolor='#ffc83a' color='black' textSize={'18px'} />
      </div>

    </div>
  )
}

export default Orders