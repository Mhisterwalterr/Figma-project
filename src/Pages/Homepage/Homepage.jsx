import React from 'react'
import NavBar from '../../Component/Navbar/Navbar'
import Button from '../../Component/Button/Button'
import logo1 from '../../assets/aptech.svg'
import './Homepage.css'
import Pizza from '../../assets/pizza.svg'
import Burger from '../../assets/burger.svg'
import Boy from '../../assets/boy 1.svg'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {

const navigate = useNavigate()
  return (
      <div className='homepageContainer'>
        <div className='homeLogo'>
            <img src={logo1} alt="logo" />
        </div>

        <div className='homeText'>
            <h1>Food for <br /> Everyone</h1>
        </div>
        <div className='imageContainer'>
            <div className='pizzaBurger'>
                  <img src={Pizza} alt="pizza" /> 
                  <img src={Burger} alt="burger" />
            </div>
            <div className='boyImage'>
                <img src={Boy} alt="boy" />
            </div>

        </div>
        <div className='homeButton'>
            {/* <Link to={'/login'} >            */}
                <Button name='Get started' bgcolor='white' onClick={ ()=> navigate('/login')} />
                {/* </Link> */}

            </div>

    </div>
  )
}

export default Homepage