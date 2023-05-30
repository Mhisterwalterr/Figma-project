import React from 'react'

import foodDescription from '../../Data/foodDescription';

export default function slug() {



    const product = foodDescription.find(a => a.name === slug);
  return (
    <div className='foodDetailsContainer'>
    <div className='foodDetailsIcon'>
      <Link to='/menu'>
      <BsArrowLeftShort />
      </Link>
      <AiOutlineHeart />
    </div>

    <div className='foodDetailsImage'>
      <img src={product.url} alt="Ewwa" />
    </div>
    <div className='foodDetailsPrice'>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
    <div className='foodDetailsRating'>
      <span className='Ratings'>Rating 5.0</span>
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
