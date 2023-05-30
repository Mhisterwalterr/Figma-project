import React from 'react'
import './MyOffer.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';




const MyOffer = () => {
  return (
    <div className='offerContainer'>
        <div className='offerIcon'>
            <Link to='/menu'>
        <IoIosArrowBack className='offerArrow'/>
        </Link>
        </div>
        <div className='offers'>
            <h1>My offers</h1>
        </div>

     <div className='offerText'>
        <h1>Oh snap! No offers yet</h1>
        <p>Dera doesnt have any offers <br /> yet please check again</p>
     </div>
    </div>
  )
}

export default MyOffer