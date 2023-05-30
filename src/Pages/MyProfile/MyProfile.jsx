import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './MyProfile.css'
import image from '../../Food/Profile.png'
import { Link } from 'react-router-dom';

function MyProfile() {
  return (
    <div className='myProfileContainer'>
    <div className='profileIcon'>
        <Link to='/menu'>
        <IoIosArrowBack />
        </Link>
    </div>
    <div  className='profileText'>
        <h1>My Profile</h1>
    </div>
    <div className='profileText1'>
        <p>personal details</p>
        <p>change</p>
    </div>

    <div className='profileInfo'>
        <div>
           <img src={image} alt="image" className='profileImage'/>
        </div>
        <div className='innerInfo'>
            <p>Akaeme Chidera</p>
            <h5>akaeme@gmail.com</h5>
            <h4>+2349029935318</h4>
            <h4>lagos</h4>

        </div>

    </div>
    <div className='profileList'>
        <div className='innerList'>
            <p>order</p>
            <span><IoIosArrowForward /></span>
        </div>
        <div  className='innerList'>
            <p>Pending reviews</p>
            <span><IoIosArrowForward /></span>
        </div>
        <div  className='innerList'>
            <p>Faq</p>
            <span><IoIosArrowForward /></span>
        </div>
        <div  className='innerList'>
            <p>Help</p>
            <span><IoIosArrowForward /></span>
        </div>
    </div>

    </div>
  )
}

export default MyProfile