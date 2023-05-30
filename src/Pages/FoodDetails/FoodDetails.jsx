import React, {useEffect, useState} from 'react'
import NavBar from '../../Component/Navbar/Navbar'
import { BsArrowLeftShort,  } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Ewwa from '../../Food/EwwaAgoyin.png';
import Button from '../../Component/Button/Button'
import './FoodDetails.css'
import { Link } from 'react-router-dom';
// import ratings from '../../Data/Ratins';
import menu from '../Menu/Menu';
import foodDescription from '../../Data/foodDescription';
import { ImStarFull } from "react-icons/im";
import { useParams } from 'react-router-dom'


function FoodDetails() {
  // const { id } = useParams();
  const params = useParams()
  console.log(params, 'details')
  const foodId = params.id
  const [foodData, setFoodData]  = useState({})
  
  useEffect(() => {
    // const result = foodDescription.filter((menu, key) => {
    //   return menu.id.toString() === foodId
    //  } )[0]
    //  console.log(result, 'result')
  
  
    const result = foodDescription.find((menu, key) => {
      return menu.id.toString() === foodId
     } )
    setFoodData(result)
 
  }, [])
  
  
  


  let starArray = [...Array(foodData.rating)].map((_,index)=> index)

  
  return (
    <div className='foodDetailsContainer'>
      <div className='foodDetailsIcon'>
        <Link to='/menu'>
        <BsArrowLeftShort />
        </Link>
        <AiOutlineHeart />
      </div>

      <div className='foodDetailsImage'>
        <img src={foodData.url} alt="Ewwa" />
      </div>
      <div className='foodDetailsPrice'>
        <h1>{foodData.name}</h1>
        <h2><span>₦</span>{foodData.price}</h2>
      </div>
      <div className='foodDetailsRating'>
        <span className='Ratings'>Rating {foodData.rating}</span>
       <span>
          {

            starArray.map((item, index) => {
            return <ImStarFull key={index}/>;
          })
          }
      </span>
      
      </div>

      <div className='foodDetailsInfo'>
        <h1>Delivery Info</h1>
        <p>Delivery between monday and thursaday 20 from 8pm to 10:32pm</p>
      </div>

      <div  className='foodDetailsInfo'>
        <h1>Return Policy</h1>
        <p>All our food are double checked before leaving our store so by any case you found a broken food please contact our hotline immediately.</p>
      </div>

      <div className='foodDetailsButton'>
        <Link to='/cart'>
      <Button name={'Add to cart'} bgcolor='#ffc83a' color='black' textSize={'18px'} />
      </Link>
      </div>

    
    
    </div>
  )
}

export default FoodDetails