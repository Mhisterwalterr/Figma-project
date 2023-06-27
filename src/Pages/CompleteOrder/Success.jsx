import React from "react";
import "./Success.css";
import { IoIosArrowBack } from "react-icons/io";
import svg from "../../assets/star.gif";

function Success() {
  return (
    <div className='successContainer'>
      <div className='successIcon'>
        <IoIosArrowBack />
      </div>
      <div className='completeOrder'>
        <h1>COMPLETE ORDER</h1>
      </div>

      <div className='successSvg'>
        <img src={svg} alt='gif' />
      </div>

      <div className='successReview'>
        <h3>Review</h3>
        <h5>
          Rating 5.0 <span>⭐⭐⭐⭐⭐</span>
        </h5>
        <input type='text' placeholder='reviews' />
      </div>
      <div className='successButton'>
        <button>skip</button>
        <button>feedback</button>
      </div>
    </div>
  );
}

export default Success;
