import {React, useState, useEffect} from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaHandScissors } from "react-icons/fa";
import NavBar from "../../Component/Navbar/Navbar";
import Button from "../../Component/Button/Button";
import "./Cart.css";
import Ewwa from "../../Food/EwwaAgoyin.png";
import frideRice from "../../Food/SpecialFriedRice.png";
import okro from "../../Food/SeaFoodOkro.png";
import { Link } from "react-router-dom";
import foodDescription from "../../Data/foodDescription";




function Cart() {
  // const[cartItem, setCartItem] = useState([]);
  // To retrieve the current cart data
  let cartData = JSON.parse(localStorage.getItem("cartItems")) || []
   
//   useEffect(() => {
//   const handleCartClearance = () =>{
//     // setCartItem(handleCartClearance)   
//   }
// });

  const cartItems = cartData.map((item) => {
    console.log(item)
    
   return  <div className='cartCard'>
      <div className='cartImage'>
        <img src={item.data.url} alt='Ewwa' />
      </div>
      <div className="cartInfo">

      
      <div className='cartImageText'>
        <p>{item.data.name}</p>
        </div>
        <div className="cartPriceValue">
          <div className="cartPrice">
        <p><span>₦</span>{item.data.price}</p>
        </div>
       <div className="cartQuantity">
        <span>-</span>
        <span>{item.count}</span>
        <span>+</span>
      </div>
      </div>
      </div>
       </div>
  });

  return (
    <div className='cartContainer'>
      <div className='cartHeader'>
        <Link to='/foodDetails/1'>
        <BsArrowLeftShort className='cartArrow' />
        </Link>
        <p>Cart Page</p>
      </div>
      <div className='cartSwipe'>
        <p>
          <span>
            <FaHandScissors />
          </span>
          swipe on an item to delete
        </p>
      </div>

      <div className="cartFormat">
        <span>clear cart</span>
      </div>

      <div className="cartDiv">
          {cartItems}

      </div>
    

      <Link to='/address'>
        <div className="cartBtn">
          <button>order now</button>
        </div>
      </Link>
      
    </div>
  );
}

export default Cart;
