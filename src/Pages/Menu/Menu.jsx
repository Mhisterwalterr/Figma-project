import React, { useState } from "react";
// import GrilledChickenSalad from '../../Food/LoadedHotDog.jpg'
// import LoadedHotDog from '../../Food/LoadedHotDog.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
// import { } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdHistory } from "react-icons/md";
import { BiUser } from "react-icons/bi";
// import { } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import foodDescription from "../../Data/foodDescription";
import TopDog from "../../Food/TopDog.jpg";
import SuyaChickenFries from "../../Food/SuyaChickenFries.jpg";
import FullLagosBreakfast from "../../Food/FullLagosBreakfast.jpg";
import Burger from "../../Food/Burger.jpg";
import "./Menu.css";

export default function menu() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const menus = foodDescription.map((menu, key) => (
    // <div className='cardWrapper'>
    <div key={key} className='menuCard' onClick={() => navigate(`/foodDetails/${menu.id}`)}>
      <div className='imageUrl'>
        <img src={menu.url} alt='' width='150' className='foodImage' />
      </div>

      <div className='priceNameDiv'>
        <h3 className='menuName'>{menu.name}</h3>
        <h6 className='menuPrice'>
          <span>₦</span>
          {menu.price}
        </h6>
      </div>
    </div>
    // </div>
  ));
  const handleSearchClick = () => {
    console.log("searchClicked");
    // alert(searchInput)
    navigate("/search", {
      state: {
        data: searchInput,
        name: "dera",
      },
    });
  };
  const handleInputChange = (data) => {
    console.log("handleClicked", data);
    setSearchInput(data);
  };
  return (
    <div className='menuContainer'>
      <div className='menuIcon headerMenuIcon'>
        <Link to='/sidemenu'>
          <RxHamburgerMenu />{" "}
        </Link>
        <AiOutlineShoppingCart />
      </div>
      <div className='menuText'>
        <p>
          Delicious <br />
          food for you
        </p>
      </div>
      <div className='search'>
        <div className='Icon'>
          <CiSearch className='searchLogo' onClick={() => handleSearchClick()} />
        </div>

        <input
          type='text'
          placeholder='search'
          className='SearchInput'
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <div className='menuButton'>
        <div className='foodText'>
          <button>Food</button>
        </div>
        <div>
          <button>Drinks</button>
        </div>
        <div>
          <button>Snacks</button>
        </div>
        <div>
          <button>Sauce</button>
        </div>
      </div>

      <div className='foodMenu'>
        <div className='innerWrapper'>{menus}</div>
      </div>
      <div className='menuIcon footerMenuIcon'>
        <span className='Icon'>
          {" "}
          <AiFillHome />{" "}
        </span>
        <MdOutlineFavoriteBorder />
        <BiUser />
        <MdHistory />
      </div>
    </div>
  );
}
