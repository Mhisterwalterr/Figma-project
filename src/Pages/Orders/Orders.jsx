import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Order.css";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Button from "../../Component/Button/Button";

function Orders() {
  return (
    <div className='orderContainer'>
      <div className='orderIcon'>
        <Link to='/menu'>
          <IoIosArrowBack className='orderArrow' />
        </Link>
        <p>Orders</p>
      </div>
      <div className='orderImage'>
        <BsCart2 className='cartIcon' />
        <h1>No orders yet</h1>
        <p>
          Hit the orange button down <br /> below to Create an order{" "}
        </p>
      </div>
      <div className='orderBtn'>
        <Button name='Start ordering' bgcolor='#ffc83a' color='black' textSize='16px' />
      </div>
    </div>
  );
}

export default Orders;
