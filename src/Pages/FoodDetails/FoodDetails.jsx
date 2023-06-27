import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { ImStarFull } from "react-icons/im";
import NavBar from "../../Component/Navbar/Navbar";
import Ewwa from "../../Food/EwwaAgoyin.png";
import Button from "../../Component/Button/Button";
import "./FoodDetails.css";
import { Link, useParams, useNavigate } from "react-router-dom";
// import ratings from '../../Data/Ratins';
import menu from "../Menu/Menu";
import foodDescription from "../../Data/foodDescription";

function FoodDetails() {
  // const { id } = useParams();
  const params = useParams();
  console.log(params, "details");
  const foodId = params.id;
  const [foodData, setFoodData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // const result = foodDescription.filter((menu, key) => {
    //   return menu.id.toString() === foodId
    //  } )[0]
    //  console.log(result, 'result')

    const result = foodDescription.find((menu, key) => menu.id.toString() === foodId);
    setFoodData(result);
  }, []);

  const starArray = [...Array(foodData.rating)].map((_, index) => index);
  const handleAddToCart = () => {
    const currentCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // creating a new object,,having a key
    const foodObject = {
      data: foodData,
      count: 1,
    };
    // searching through the cart items to find then existence of a food item in the local storage
    const searchResult = currentCartItems.filter((item) => item.data.id === foodData.id);
    // console.log(searchResult, 'searchResult')
    if (searchResult.length === 0) {
      currentCartItems.push(foodObject);
    } else {
      const itemIndex = currentCartItems.indexOf(searchResult[0]);
      // console.log(itemIndex, 'itemIndex')
      const updatedFoodObject = { ...searchResult[0], count: searchResult[0].count + 1 };
      //  console.log(updatedFoodObject)
      // replacing the old data with the updated one
      currentCartItems.splice(itemIndex, 1, updatedFoodObject);
    }

    //  adding items to the local storage
    localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
    navigate("/cart");
  };
  return (
    <div className='foodDetailsContainer'>
      <div className='foodDetailsIcon'>
        <Link to='/menu'>
          <BsArrowLeftShort />
        </Link>

        <AiOutlineHeart />
      </div>

      <div className='foodDetailsImage'>
        <img src={foodData.url} alt='Ewwa' />
      </div>
      <div className='foodDetailsPrice'>
        <h1>{foodData.name}</h1>
        <h2>
          <span>₦</span>
          {foodData.price}
        </h2>
      </div>
      <div className='foodDetailsRating'>
        <span className='Ratings'>Rating {foodData.rating}</span>
        <span>
          {starArray.map((item, index) => (
            <ImStarFull key={index} />
          ))}
        </span>
      </div>

      <div className='foodDetailsInfo'>
        <h1>Delivery Info</h1>
        <p>Delivery between monday and thursaday 20 from 8pm to 10:32pm</p>
      </div>

      <div className='foodDetailsInfo'>
        <h1>Return Policy</h1>
        <p>
          All our food are double checked before leaving our store so by any case you found a broken
          food please contact our hotline immediately.
        </p>
      </div>

      <div className='foodDetailsButton'>
        <Button
          name='Add to cart'
          bgcolor='#ffc83a'
          color='black'
          textSize='18px'
          onClick={() => handleAddToCart()}
        />
      </div>
    </div>
  );
}

export default FoodDetails;
