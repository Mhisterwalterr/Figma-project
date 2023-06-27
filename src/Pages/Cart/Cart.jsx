/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaHandScissors } from "react-icons/fa";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItem, setCartItem] = useState([]);

  const decreaseCount = (foodData) => {
    console.log(foodData, "food");

    const currentCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let itemIndex = ''
    currentCartItems.map((item, index) => {
     if (item.data.id === foodData.data.id) {
      itemIndex = index
     }
      
    })

    if (foodData.count === 1) {
      currentCartItems.splice(itemIndex, 1);
      // console.log('hello')
      window.dispatchEvent(new Event("storage"));
    } else {
      // console.log(itemIndex, 'itemIndex')
      // ... means spread
      const updatedFoodObject = { ...foodData, count: foodData.count - 1 };
      //  console.log(updatedFoodObject)
      // replacing the old data with the updated one
      currentCartItems.splice(itemIndex, 1, updatedFoodObject);
    }

    //  adding items to the local storage
    localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
    window.dispatchEvent(new Event("storage"));
  };

  // increasing count of cart item
  const increaseCount = (foodData) => {
    console.log(foodData, "food");
    const currentCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(currentCartItems, "items");

    let itemIndex = "";
    currentCartItems.map((item, index) => {
      if (item.data.id === foodData.data.id) {
        itemIndex = index;
      }
    });
    // let itemIndex = currentCartItems.indexOf(foodData)
    console.log(itemIndex, "itemIndex");
    const updatedFoodObject = { ...foodData, count: foodData.count + 1 };
    //  console.log(updatedFoodObject)
    // replacing the old data with the updated one
    currentCartItems.splice(itemIndex, 1, updatedFoodObject);

    //  adding items to the local storage
    localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
    window.dispatchEvent(new Event("storage"));
  };

  // // To retrieve the current cart data
  // let cartData = JSON.parse(localStorage.getItem("cartItems")) || []

  const clearCart = () => {
    //  setCartItem([]);
    localStorage.removeItem("cartItems");
    //
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    const checkLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem("cartItems")) || [];
      console.log(data);
      if (data !== undefined) {
        setCartItem(data);
      }
    };

    checkLocalStorage();
    window.addEventListener("storage", checkLocalStorage);

    return () => {
      window.removeEventListener("storage", checkLocalStorage);
    };
  }, []);

  const cartItems = cartItem.map((item) => {
    console.log(item);

    return (
      <div className='cartCard'>
        <div className='cartImage'>
          <img src={item.data.url} alt='Ewwa' />
        </div>
        <div className='cartInfo'>
          <div className='cartImageText'>
            <p>{item.data.name}</p>
          </div>
          <div className='cartPriceValue'>
            <div className='cartPrice'>
              <p>
                <span>₦</span>
                {item.data.price}
              </p>
            </div>
            <div className='cartQuantity'>
              <span onClick={() => decreaseCount(item)}>-</span>
              <span>{item.count}</span>
              <span onClick={() => increaseCount(item)}>+</span>
            </div>
          </div>
        </div>
      </div>
    );
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

      <div className='cartFormat'>
        <span onClick={clearCart}>clear cart</span>
      </div>

      <div className='cartDiv'>{cartItems}</div>

      <Link to='/address'>
        <div className='cartBtn'>
          <button type="button">order now</button>
        </div>
      </Link>
    </div>
  );
}

export default Cart;
