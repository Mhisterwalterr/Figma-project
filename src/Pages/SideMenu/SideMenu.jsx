import React from 'react'
import { BsArrowLeftShort,  } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalOffer, MdSecurity } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './SideMenu.css'

function SideMenu() {
  return (
    <div className='sideMenuContainer'>
        <div className='sideMenuIcon'>
        <BsArrowLeftShort />
        </div>
        <div className='sideMenuList'>
        <div>
            <Link to='/myprofile'>
            <p><span><CgProfile/></span>Profile</p>
            </Link>
        </div>
        <div>
        <Link to='/order'>
            <p><span><AiOutlineShoppingCart/></span>Order</p>
        </Link>
        </div>
        <div>
            <Link to='/myoffer'>
            <p><span><MdOutlineLocalOffer/></span>Offer and promo</p>
            </Link>
        </div>
        <div>
            <Link to='/privacy'>
            <p><span><FaRegNewspaper/></span>Privacy policy</p>
            </Link>
        </div>
        <div>
        <Link to='/privacy'>
            <p><span><MdSecurity/></span>Security</p>
            </Link>
        </div>
        </div>

        <div className='sideMenuSignOut'>
            <Link to='/login'>
            <p>Sign-out <span><AiOutlineArrowRight/></span></p>
            </Link>
        </div>
    </div>
  )
}

export default SideMenu