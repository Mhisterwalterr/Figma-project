import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineIdcard } from "react-icons/ai";
import { GiCastle } from "react-icons/gi";
import { CiMoneyBill } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../Component/Button/Button";
import "./Checkout.css";

function Checkout() {
  return (
    <div className='checkoutContainer'>
      <div className='checkoutHeader'>
        <Link to='/address'>
          <IoIosArrowBack className='checkoutArrow' />
        </Link>
        <p>Checkout</p>
      </div>
      <div className='checkoutPayment'>
        <h1>Payment</h1>
        <p>Payment method</p>
      </div>
      <div className='chechoutPaymentMethod'>
        <div className='paymentMethod'>
          <div>
            <input type='checkbox' />
          </div>
          <div className='card iconWrapper'>
            <AiOutlineIdcard />
          </div>
          <div>
            <p>Card</p>
          </div>
        </div>
        <div className='paymentMethod'>
          <div>
            <input type='checkbox' />
          </div>
          <div className='castle iconWrapper'>
            <GiCastle />
          </div>
          <div>
            <p>Mobile pay</p>
          </div>
        </div>
        <div className='paymentMethod'>
          <div>
            <input type='checkbox' />
          </div>
          <div className='money iconWrapper'>
            <CiMoneyBill />
          </div>
          <div>
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>
      <div className='deliveryText'>
        <p>Delivery Method</p>
      </div>

      <div className='deliveryMethod'>
        <div className='method1'>
          <div>
            <input type='checkbox' />
          </div>
          <div className='method1Div'>
            <p>Door Delivery</p>
          </div>
        </div>
        <div className='method1'>
          <div>
            <input type='checkbox' />
          </div>
          <div>
            <p>Pick up</p>
          </div>
        </div>
      </div>

      <div className='deliveryPrice'>
        <p>Total</p>
        <h3>
          <span>₦</span> 10,000
        </h3>
      </div>
      <div className='deliveryButton'>
        <Link to='map'>
          <Button name='proceed to payment' bgcolor='yellow' textSize='20px' />
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
