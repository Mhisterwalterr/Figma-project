import React from 'react'
import NavBar from '../../Component/Navbar/Navbar'
import Button from '../../Component/Button/Button'
import { BsArrowLeftShort,  } from "react-icons/bs";
import { FaHandScissors } from "react-icons/fa";
import './Cart.css';
import Ewwa from '../../Food/EwwaAgoyin.png';
import frideRice from '../../Food/SpecialFriedRice.png';
import okro from '../../Food/SeaFoodOkro.png';
import { Link  } from 'react-router-dom';
import foodDescription from '../../Data/foodDescription';


const Cart = () => {
  const cartItems = foodDescription.map((item)=> (
    <div className='cartCard'>
        <div className='cartImage'>
          <img src={item.url} alt="Ewwa" />
        </div>  
          <div className='cartImageText'>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
          <div className='cartImageButton'>
            <button>- 1 +</button>
            </div>     
      </div>
  ) )

  return (
    <div className='cartContainer'>
      <div  className='cartHeader'>
         <BsArrowLeftShort className='cartArrow' />
         <p>Cart Page</p>
      </div>
      <div className='cartSwipe'>
        <p><span><FaHandScissors /></span>swipe on an item to delete</p>
      </div>
      
        <div>
          {cartItems}
        </div>

      

       <Link to='/address'>
        <Button name='order' bgcolor={'green'} textSize={'25px'}/>
        </Link>
    </div>

  )
}

export default Cart