import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import './PrivacyPolicy.css'



const PrivacyPolicy = () => {
  return (
    <div className='policyContainer'>
        <div className='policyHeader'>
            <Link to='/menu'>
            <IoIosArrowBack  className='policyIcon'/>
            </Link>
            <h3 className='moiMoi'> moimoi</h3>
        </div>
        <div className='policyBody'> 
            <div className='policySearch'>
                <BsSearch  className='policyBs'/>
            </div>
            <div>
                <h1>item not found</h1>
            </div>
            <div className='policyText'>
                <p>Try searchng the item with  <br /> a diferent keyword</p>
            </div>
        </div>

    </div>
  )
}

export default PrivacyPolicy